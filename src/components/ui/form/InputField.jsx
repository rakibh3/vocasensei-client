import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const InputField = ({
  form,
  name,
  label,
  placeholder,
  type = 'text',
  leftIcon,
  rightElement,
  defaultValue = '',
}) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <div className="relative">
              {leftIcon && (
                <div className="absolute left-3 top-[6px] h-5 w-5 text-muted-foreground">
                  {leftIcon}
                </div>
              )}
              <Input
                type={type}
                placeholder={placeholder}
                className={`${leftIcon ? 'pl-10' : ''} ${
                  rightElement ? 'pr-10' : ''
                }`}
                {...field}
                value={field.value || defaultValue}
              />
              {rightElement && (
                <div className="absolute right-0 top-0 h-full">
                  {rightElement}
                </div>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default InputField;
