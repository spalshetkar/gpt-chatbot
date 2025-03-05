import { Outlet } from 'react-router-dom';
import AuthHeader from '../navigation/AuthHeader';

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <AuthHeader />
      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;