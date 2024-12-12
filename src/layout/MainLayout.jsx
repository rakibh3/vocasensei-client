import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div className="flex justify-center items-center min-h-screen">
      <p className="text-lg text-green-600">Checking authentication...</p>
    </div>
  ) : (
    <main className="min-h-screen flex flex-col  bg-gradient-to-br from-primary/5 via-secondary/5 to-muted/5">
      <Navbar />
      <div className="mx-auto w-[90%] sm:w-[75%] flex flex-col flex-grow items-center justify-center">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};
export default MainLayout;
