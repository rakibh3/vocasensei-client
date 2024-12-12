import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import UserRoleSelect from './UserRoleSelect';
import { format } from 'date-fns';

const UserTable = ({ users, onUpdateRole, isLoading = false }) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((user) => (
            <TableRow key={user?._id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <UserRoleSelect
                  user={user}
                  onRoleChange={(role) => onUpdateRole(user._id, role)}
                  disabled={isLoading}
                />
              </TableCell>
              <TableCell className="text-muted-foreground">
                {format(new Date(user.createdAt), 'MMM d, yyyy')}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default UserTable;
