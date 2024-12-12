import { useSelector } from 'react-redux';

export const useAuth = () => {
  const auth = useSelector((state) => state.auth);

  const isAuthenticated = !!auth?.accessToken && !!auth?.user;

  return {
    currentUser: isAuthenticated ? auth?.user : null,
  };
};
