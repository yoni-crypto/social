export default function Welcome({ user, onLogout }) {
  return (
    <section className="welcome">
      <h1>Welcome {user.userName}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </section>
  )
}