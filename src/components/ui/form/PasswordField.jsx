import { useState } from 'react';
import { Button } from '../button';
import { Eye, EyeOff, Lock } from 'lucide-react';
import InputField from './InputField';

const PasswordField = ({ form, name, label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  const ToggleButton = (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className="px-3 py-2 hover:bg-transparent"
      onClick={togglePassword}
    >
      {showPassword ? (
        <EyeOff className="h-5 w-5 text-muted-foreground" />
      ) : (
        <Eye className="h-5 w-5 text-muted-foreground" />
      )}
    </Button>
  );
  return (
    <InputField
      form={form}
      name={name}
      label={label}
      placeholder={placeholder}
      type={showPassword ? 'text' : 'password'}
      leftIcon={<Lock />}
      rightElement={ToggleButton}
    />
  );
};
export default PasswordField;
