import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { useAuth } from '@/hooks/useAuth';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const authChecked = useAuth();

  return !authChecked ? (
    <div>Checking authentication...</div>
  ) : (
    <main className="grid min-h-screen place-items-center bg-gradient-to-br from-primary/5 via-secondary/5 to-muted/5">
      <Navbar />
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex justify-center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </main>
  );
};
export default MainLayout;
