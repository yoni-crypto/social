import { useState } from 'react'
import ContactList from './ContactList.jsx'
import Login from './Login.jsx'
import Welcome from './Welcome.jsx'
import './App.css'

const contacts = [
  {
    name: 'Yonas Addisu',
    email: 'yonidisu111@gmail.com',
    phone: '+251 911 234 567',
    profile_picture: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Sara Mohammed',
    email: 'sara.m@gmail.com',
    phone: '+251 912 345 678',
    profile_picture: 'https://i.pravatar.cc/150?img=47',
  },
  {
    name: 'David Bekele',
    email: 'david.b@outlook.com',
    phone: '+251 913 456 789',
    profile_picture: 'https://i.pravatar.cc/150?img=32',
  },
  {
    name: 'Hanna Tesfaye',
    email: 'hanna.t@gmail.com',
    phone: '+251 914 567 890',
    profile_picture: 'https://i.pravatar.cc/150?img=5',
  },
]

export default function UserState() {
  const [user, setUser] = useState(null)
  const [theme, setTheme] = useState('light')

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    document.body.setAttribute('data-theme', nextTheme)
  }

  function handleLogin(userInfo) {
    setUser(userInfo)
  }

  function handleLogout() {
    setUser(null)
  }

  return (
    <>
      <button
        type="button"
        className="theme-toggle"
        onClick={toggleTheme}
      >
        {theme === 'light' ? 'Dark' : 'Light'}
      </button>
      {user ? (
        <>
          <Welcome user={user} onLogout={handleLogout} />
          <ContactList contacts={contacts} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  )
}