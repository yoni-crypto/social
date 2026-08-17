import ContactList from './ContactList.jsx'
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

function App() {
  return (
    <>
      <ContactList contacts={contacts} />
    </>
  )
}

export default App