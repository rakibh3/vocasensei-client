import { LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';

const SideBarFooter = () => {
  const { logout } = useAuth();
  return (
    <div className="mt-auto border-t p-4">
      <Button
        variant="ghost"
        className="w-full justify-start gap-2 hover:bg-muted"
        onClick={logout}
      >
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
};
export default SideBarFooter;
