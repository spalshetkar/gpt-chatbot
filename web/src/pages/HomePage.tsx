import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to ChatApp</h1>
        <p>Connect with your team in real-time</p>
        
        {user ? (
          <div className="auth-buttons">
            <Link to="/chat" className="cta-button">
              Go to Chat
            </Link>
          </div>
        ) : (
          <div className="auth-buttons">
            <Link to="/auth/login" className="cta-button">
              Get Started
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;