import { useState } from 'react'
import Contact from './Contact.jsx'

function ContactList({ contacts }) {
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState([])

  function toggleFavorite(email) {
    if (favorites.includes(email)) {
      setFavorites(favorites.filter((f) => f !== email))
    } else {
      setFavorites([...favorites, email])
    }
  }

  const filtered = contacts.filter((contact) => {
    const text = query.trim().toLowerCase()
    if (!text) return true
    return (
      contact.name.toLowerCase().includes(text) ||
      contact.email.toLowerCase().includes(text) ||
      contact.phone.toLowerCase().includes(text)
    )
  })

  return (
    <section className="contact-list">
      <h1>My Contacts</h1>
      <input
        className="search"
        type="search"
        placeholder="Search by name, email or phone..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="grid">
        {filtered.length > 0 ? (
          filtered.map((contact) => (
            <Contact
              key={contact.email}
              {...contact}
              isFavorite={favorites.includes(contact.email)}
              onToggleFavorite={() => toggleFavorite(contact.email)}
            />
          ))
        ) : (
          <p className="empty">No contacts match your search.</p>
        )}
      </div>
    </section>
  )
}

export default ContactList