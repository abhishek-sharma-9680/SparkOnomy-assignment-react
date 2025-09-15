import "./Header.css"; // ✅ import the css file

export default function Header() {
  return (
    <div className="header">
      <button className="back-btn">&lt; Back</button>
      <h1 className="title">Dashboard</h1>
      <img src="/assets/me.jpg" className="profile-pic" alt="profile" />
    </div>
  );
}
