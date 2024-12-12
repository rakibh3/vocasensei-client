import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Fingerprint } from 'lucide-react';
import LoginForm from './auth-utils/LoginForm';
import AuthFooter from './auth-utils/AuthFooter';

const Login = () => {
  return (
    <div className="flex min-h-[85vh] flex-col items-center justify-center">
      <Card className="w-full max-w-sm md:max-w-lg ">
        <CardHeader className="space-y-2 text-center">
          <div className="flex justify-center">
            <div className="rounded-full bg-primary/10 p-3">
              <Fingerprint className="h-6 w-6 text-primary" />
            </div>
          </div>
          <CardTitle className="text-2xl font-semibold">Welcome back</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>

        <CardFooter>
          <AuthFooter
            text="Don't have an account?"
            linkText="Register"
            linkHref="/register"
          />
        </CardFooter>
      </Card>
    </div>
  );
};
export default Login;
