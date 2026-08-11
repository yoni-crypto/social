function Contact({ name, email, phone, profile_picture }) {
  return (
    <div className="contact-card">
      <img className="profile-picture" src={profile_picture} alt={`${name} profile`} />
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
    </div>
  )
}

export default Contact
