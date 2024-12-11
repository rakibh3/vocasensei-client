import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
export default MainLayout;
