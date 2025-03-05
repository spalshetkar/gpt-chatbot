import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">ChatApp</Link>
        {user && <Link to="/chat">Chat</Link>}
        {user && <Link to="/dashboard">Dashboard</Link>}
      </div>
      
      <div className="nav-right">
        {user ? (
          <button onClick={logout} className="logout-btn">
            Logout ({user.name})
          </button>
        ) : (
          <Link to="/auth/login" className="login-btn">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;