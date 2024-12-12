import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return children;
  }

  if (currentUser?.role === 'admin') {
    return <Navigate to="/dashboard" />;
  } else {
    return <Navigate to="/lessons" replace />;
  }
};
export default PublicRoute;
