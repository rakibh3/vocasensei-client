import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const UserRoleSelect = ({ user, onRoleChange, disabled }) => {
  return (
    <Select
      defaultValue={user.role}
      onValueChange={(value) => onRoleChange(value)}
      disabled={disabled}
    >
      <SelectTrigger className="w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="user">User</SelectItem>
        <SelectItem value="admin">Admin</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default UserRoleSelect;
