function Contact({ name, email, phone, profile_picture, isFavorite, onToggleFavorite }) {
  function share() {
    const text = `${name}\nEmail: ${email}\nPhone: ${phone}`
    navigator.share({ title: name, text: text }).catch(() => {})
  }

  function shareWhatsApp() {
    const text = encodeURIComponent(`${name}\nEmail: ${email}\nPhone: ${phone}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  function shareTelegram() {
    const text = encodeURIComponent(`${name}\nEmail: ${email}\nPhone: ${phone}`)
    window.open(`https://t.me/share/url?text=${text}`, '_blank')
  }

  function shareEmail() {
    const subject = encodeURIComponent(`Contact: ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}`)
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  function copyEmail() {
    navigator.clipboard.writeText(email)
    alert('Email copied!')
  }

  function copyPhone() {
    navigator.clipboard.writeText(phone)
    alert('Phone copied!')
  }

  return (
    <div className="contact-card">
      <div className="contact-card-header">
        <img className="contact-avatar" src={profile_picture} alt="" />
        <div className="contact-info">
          <h2>{name}</h2>
          <p className="contact-email">{email}</p>
          <p className="contact-phone">{phone}</p>
        </div>
      </div>

      <div className="contact-actions">
        <button type="button" onClick={copyPhone} title="Copy phone">Copy Phone</button>
        <button type="button" onClick={copyEmail} title="Copy email">Copy Email</button>
        <button type="button" onClick={onToggleFavorite} title="Favorite">
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
      </div>

      <div className="contact-share">
        <button type="button" onClick={shareWhatsApp} title="Share via WhatsApp">WhatsApp</button>
        <button type="button" onClick={shareTelegram} title="Share via Telegram">Telegram</button>
        <button type="button" onClick={shareEmail} title="Share via Email">Email</button>
        <button type="button" onClick={share} title="Share">Share</button>
      </div>

      <div className="contact-crud">
        <button type="button" title="Add new contact">Add</button>
        <button type="button" title="Edit contact">Edit</button>
        <button type="button" title="Delete contact">Delete</button>
      </div>
    </div>
  )
}

export default Contact