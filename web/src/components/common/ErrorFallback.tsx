import { useRouteError } from 'react-router-dom';

const ErrorFallback = () => {
  const error = useRouteError() as Error;
  
  return (
    <div className="error-boundary">
      <h2>Something went wrong</h2>
      <p>{error.message}</p>
      <button onClick={() => window.location.reload()}>
        Refresh Page
      </button>
    </div>
  );
};

export default ErrorFallback;