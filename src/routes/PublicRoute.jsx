import { useAuth } from '@/hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return children;
  }
  return <Navigate to="/lessons" replace />;
};
export default PublicRoute;
