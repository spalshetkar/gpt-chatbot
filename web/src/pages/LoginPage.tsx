import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<FormData>();

  const onSubmit = async ({ email, password }: FormData) => {
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login-page">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Sign In</h2>
        
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
                id="email"
                {...register('email', { required: 'Email is required' })}
                type="email"
            />
        </div>

        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                id="password"
                {...register('password', { required: 'Password is required' })}
                type="password"
            />
        </div>

        <button 
          type="submit" 
          disabled={formState.isSubmitting}
        >
          {formState.isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;