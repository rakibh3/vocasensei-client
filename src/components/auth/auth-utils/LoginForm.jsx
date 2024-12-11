import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';

import { useToast } from '@/hooks/use-toast';
import InputField from '@/components/ui/form/InputField';
import PasswordField from '@/components/ui/form/PasswordField';
import { Mail } from 'lucide-react';
import { loginSchema } from '@/lib/validators/auth';

const LoginForm = () => {
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values) => {
    toast({
      title: 'Login Attempt',
      description: `Trying to login with email: ${values.email}`,
    });
    console.log(values);
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

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </Form>
  );
};
export default LoginForm;
