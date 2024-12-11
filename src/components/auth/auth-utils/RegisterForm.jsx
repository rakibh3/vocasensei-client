import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Mail, User } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import InputField from '@/components/ui/form/InputField';
import PasswordField from '@/components/ui/form/PasswordField';
import AvatarUpload from '@/components/ui/avatar-upload';
import { registerSchema } from '@/lib/validators/auth';

const RegisterForm = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (values) => {
    toast({
      title: 'Registration Attempt',
      description: `Trying to register with email: ${values.email}`,
    });
    // Handle registration logic here
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <AvatarUpload
            onChange={(file) => form.setValue('photo', file)}
            className="py-4"
          />
          {form.formState.errors.photo && (
            <p className="text-sm text-destructive text-center">
              {form.formState.errors.photo.message}
            </p>
          )}
        </div>

        <InputField
          form={form}
          name="name"
          label="Full Name"
          placeholder="Enter your name"
          leftIcon={<User />}
        />

        <InputField
          form={form}
          name="email"
          label="Email"
          placeholder="Enter your email"
          leftIcon={<Mail />}
        />

        <PasswordField
          form={form}
          name="password"
          label="Password"
          placeholder="Create a password"
        />

        <PasswordField
          form={form}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
        />

        <Button type="submit" className="w-full">
          Create Account
        </Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
