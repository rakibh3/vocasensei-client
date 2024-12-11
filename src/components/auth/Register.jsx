import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { UserPlus } from 'lucide-react';
import AuthFooter from './auth-utils/AuthFooter';
import RegisterForm from './auth-utils/RegisterForm';

const Register = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-2 text-center">
        <div className="flex justify-center">
          <div className="rounded-full bg-primary/10 p-3">
            <UserPlus className="h-6 w-6 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl font-semibold">
          Create an account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RegisterForm />
      </CardContent>
      <CardFooter>
        <AuthFooter
          text="Already have an account?"
          linkText="Login"
          linkHref="/login"
        />
      </CardFooter>
    </Card>
  );
};
export default Register;
