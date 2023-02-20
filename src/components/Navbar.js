import { Link } from "react-router-dom";

export default function Navbar({ user, setUser }) {
  const handleClick = async () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  return (
    <div className="container">
      <Link to="/">My Cool App</Link>
      <nav>
        {user !== null && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleClick}>Logout</button>
          </div>
        )}
        {user === null && (
          <div>
            <Link to="/login">Log in</Link>
            <Link to="/signup">Signup</Link>
          </div>
        )}
      </nav>
    </div>
  );
}
