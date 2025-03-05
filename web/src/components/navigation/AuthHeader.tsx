import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <header className="auth-header">
      <Link to="/" className="auth-logo">
        <img src="/logo.svg" alt="ChatApp Logo" />
        <h1>ChatApp</h1>
      </Link>
      <nav className="auth-nav">
        <Link to="/auth/login">Sign In</Link>
        <Link to="/auth/signup">Create Account</Link>
      </nav>
    </header>
  );
};

export default AuthHeader;