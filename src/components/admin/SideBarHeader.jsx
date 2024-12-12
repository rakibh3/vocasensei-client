import { useAuth } from '@/hooks/useAuth';

const AdminSideBarHeader = () => {
  const { currentUser } = useAuth();
  return (
    <div>
      <h2 className="text-lg font-semibold tracking-tight">Admin Panel</h2>
      {currentUser && (
        <p className="truncate text-sm text-muted-foreground">
          {currentUser?.email}
        </p>
      )}
    </div>
  );
};
export default AdminSideBarHeader;
