import {
  LayoutDashboard,
  Users,
  BookOpen,
  BadgePlus,
  Video,
  LogOut,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const adminNavItems = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Users',
    href: 'users',
    icon: Users,
  },
  {
    title: 'Lessons',
    href: 'lessons',
    icon: BookOpen,
  },
  {
    title: 'Create Lesson',
    href: 'lesson/create',
    icon: BadgePlus,
  },
  {
    title: 'Tutorials',
    href: 'tutorials',
    icon: Video,
  },
];

const AdminSidebar = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className="hidden border-r bg-background/95 md:block md:w-64">
      <div className="flex h-full flex-col">
        <ScrollArea className="flex-1 px-4 py-6">
          <div className="mb-4 px-2">
            <h2 className="text-lg font-semibold">Admin Panel</h2>
            {currentUser && (
              <p className="text-sm text-muted-foreground">
                {currentUser?.email}
              </p>
            )}
          </div>
          <nav className="space-y-2">
            {adminNavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-x-2 rounded-md px-2 py-2',
                    'text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                    isActive && 'bg-accent text-accent-foreground'
                  )
                }
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </NavLink>
            ))}
          </nav>
        </ScrollArea>
        <div className="border-t p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={logout}
          >
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};
export default AdminSidebar;
