import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  BookOpen,
  Video,
  LogIn,
  UserPlus,
  LayoutDashboard,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAuth } from '@/hooks/useAuth';
import MainNav from './navbar-utils/MainNav';
import SheetNav from './navbar-utils/SheetNav';
import UserMenu from '../auth/auth-utils/UserMenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useAuth();
  const location = useLocation();

  const isAdmin = currentUser?.role === 'admin';
  const user = currentUser?.role === 'user';

  const navItems = [
    {
      title: 'Lessons',
      href: '/lessons',
      icon: BookOpen,
    },
    {
      title: 'Tutorials',
      href: '/tutorials',
      icon: Video,
    },
    ...(isAdmin
      ? [
          {
            title: 'Admin Dashboard',
            href: '/dashboard',
            icon: LayoutDashboard,
          },
        ]
      : []),
    ...(user
      ? []
      : [
          {
            title: 'Login',
            href: '/login',
            icon: LogIn,
          },
          {
            title: 'Register',
            href: '/register',
            icon: UserPlus,
          },
        ]),
  ];

  if (location.pathname.startsWith('/dashboard')) {
    return null;
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-[90%] sm:w-[75%]  flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold">Voca Sensei</span>
          </Link>
        </div>

        <div className="flex items-center  space-x-2 justify-end">
          <div className="hidden md:flex">
            <MainNav items={navItems} />
          </div>

          {/* Based on auth logout button will appeared */}
          {currentUser && <UserMenu />}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                aria-label="Toggle Menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <SheetNav items={navItems} onSelect={() => setIsOpen(false)} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
