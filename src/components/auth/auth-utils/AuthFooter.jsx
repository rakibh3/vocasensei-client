import { Link } from 'react-router-dom';

const AuthFooter = ({ text, linkText, linkHref }) => {
  return (
    <div className="w-full text-center text-sm">
      <span className="text-muted-foreground">{text}</span>{' '}
      <Link
        to={linkHref}
        className="font-medium text-primary underline-offset-4 hover:underline"
      >
        {linkText}
      </Link>
    </div>
  );
};
export default AuthFooter;
