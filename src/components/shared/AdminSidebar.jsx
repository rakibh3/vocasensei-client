import { useState } from 'react';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import AdminSideBarHeader from '@/components/admin/SideBarHeader';
import AdminNavItem from '../admin/NavItem';
import SideBarFooter from '../admin/SideBarFooter';
import { adminNavData } from '../admin/nav-data';

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="relative md:sticky md:top-0 md:h-screen">
      <Button
        variant="default"
        size="icon"
        className="fixed left-4 top-4 z-50 bg-primary text-primary-foreground hover:bg-primary/90 md:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <aside
        className={cn(
          'fixed inset-y-0 z-40 flex w-64 flex-col border-r bg-background/95 transition-transform duration-300 md:relative md:translate-x-0',
          isCollapsed ? '-translate-x-full' : 'translate-x-0'
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <AdminSideBarHeader />
        </div>
        <ScrollArea className="flex-1 px-4 py-4">
          <nav className="space-y-2">
            {adminNavData?.map((item) => (
              <AdminNavItem key={item.title} item={item} />
            ))}
          </nav>
        </ScrollArea>
        <SideBarFooter />
      </aside>
    </div>
  );
};
export default AdminSidebar;
