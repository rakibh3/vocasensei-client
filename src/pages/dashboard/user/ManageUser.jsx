/* eslint-disable no-unused-vars */
import PageLoader from '@/components/ui/page-loader';
import UserTable from '@/components/user/UserTable';
import { toast } from '@/hooks/use-toast';
import {
  useGetAllUsersQuery,
  useUpdateUserRoleMutation,
} from '@/redux/features/auth/authApi';
import { useEffect } from 'react';

const ManageUser = () => {
  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
    error: usersError,
  } = useGetAllUsersQuery();

  const [
    updateUserRole,
    {
      data: updateData,
      isLoading: isUpdateLoading,
      isSuccess: isUpdateSuccess,
      error: updateError,
    },
  ] = useUpdateUserRoleMutation();

  useEffect(() => {
    if (isUpdateSuccess) {
      toast({
        title: 'Congratulations!',
        description: `User role was successfully updated`,
        status: 'success',
        duration: 3000,
      });
    }
    if (updateError) {
      toast({
        title: 'Update Failed',
        description:
          updateError.data.errorMessage || updateError?.data?.message,
        status: 'error',
        duration: 3000,
      });
    }
  }, [isUpdateSuccess, updateError]);

  // If loading, show the loader
  if (isUsersLoading) {
    return <PageLoader />;
  }

  // If error occurs, show the error message
  if (isUsersError) {
    return <div>Error: {usersError.message}</div>;
  }

  // If there are no user, show a no data found message
  if (users?.data?.length === 0) {
    return <div>No user found</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
        <p className="text-muted-foreground">
          Manage user roles and permissions across the platform.
        </p>
      </div>

      <UserTable
        users={users?.data}
        onUpdateRole={(id, role) => updateUserRole({ id, role })}
        isLoading={isUsersLoading}
      />
    </div>
  );
};
export default ManageUser;
