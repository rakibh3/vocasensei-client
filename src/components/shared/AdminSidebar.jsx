import { LayoutDashboard, Users, BookOpen, Video } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';

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
    title: 'Tutorials',
    href: 'tutorials',
    icon: Video,
  },
];

const AdminSidebar = () => {
  return (
    <div className="hidden border-r bg-background/95 md:block md:w-64">
      <ScrollArea className="h-[calc(100vh-4rem)] px-4 py-6">
        <h2 className="mb-6 px-2 text-lg font-semibold">Admin Panel</h2>
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
    </div>
  );
};
export default AdminSidebar;
