import { useAuth } from '@/hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ allowedRoles, children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (
    Array.isArray(allowedRoles)
      ? allowedRoles.includes(currentUser.role)
      : currentUser.role === allowedRoles
  ) {
    return children;
  }

  return <Navigate to="/unauthorized" replace />;
};
export default PrivateRoute;
