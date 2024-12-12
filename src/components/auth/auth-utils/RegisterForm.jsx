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
import { useRegisterMutation } from '@/redux/features/auth/authApi';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate = useNavigate();
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

  const [register, { data, isLoading, error }] = useRegisterMutation();

  useEffect(() => {
    if (data?.success) {
      navigate('/login');
      toast({
        title: 'Congratulations!',
        description: `You have successfully registered with email: ${data?.data?.email}`,
        status: 'success',
        duration: 3000,
      });
    }

    if (error?.data) {
      toast({
        title: 'Registration Failed',
        description: error.data.errorMessage || error?.data?.message,
        status: 'error',
        duration: 3000,
      });
    }
  }, [data, error, toast, navigate]);

  const onSubmit = (values) => {
    const { name, email, password } = values;
    register({ name, email, password });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <AvatarUpload
            onChange={(file) => form.setValue('photo', file)}
            className="pb-1"
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

        <Button type="submit" className="w-full" disabled={isLoading}>
          Create Account
        </Button>
      </form>
    </Form>
  );
};
export default RegisterForm;
