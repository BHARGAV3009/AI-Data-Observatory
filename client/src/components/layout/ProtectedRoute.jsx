import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ROUTES } from '../../constants/routes';
import Loader from '../common/Loader';
import { useEffect, useState } from 'react';

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Simulate a brief check for token validity if needed
    // In a real app, you might verify the token with the backend here
    const timer = setTimeout(() => {
      setIsChecking(false);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  if (isChecking) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[var(--color-background)]">
        <Loader size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
