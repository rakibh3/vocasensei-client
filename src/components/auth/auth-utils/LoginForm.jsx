import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { useToast } from '@/hooks/use-toast';
import InputField from '@/components/ui/form/InputField';
import PasswordField from '@/components/ui/form/PasswordField';
import { Mail } from 'lucide-react';
import { loginSchema } from '@/lib/validators/auth';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [login, { data, isLoading, error }] = useLoginMutation();

  useEffect(() => {
    if (data?.success) {
      // navigate('/');
      toast({
        title: 'Congratulations!',
        description: `You have successfully login with email: ${data?.data?.user?.email}`,
        status: 'success',
        duration: 3000,
      });
    }

    if (error?.data) {
      console.log(error);
      toast({
        title: 'Login Failed',
        description: error.data.errorMessage || error?.data?.message,
        status: 'error',
        duration: 3000,
      });
    }
  }, [data, error, toast, navigate]);

  const onSubmit = (values) => {
    const { email, password } = values;
    login({ email, password });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
          placeholder="Enter your password"
        />

        <Button type="submit" className="w-full" disabled={isLoading}>
          Login
        </Button>
      </form>
    </Form>
  );
};
export default LoginForm;
