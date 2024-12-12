import { userLoggedOut } from '@/redux/features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const isAuthenticated = !!auth?.accessToken && !!auth?.user;

  const logout = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  };

  return {
    currentUser: isAuthenticated ? auth?.user : null,
    logout,
  };
};
