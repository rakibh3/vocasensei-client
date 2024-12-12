import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const NavLink = ({ href, children, icon: Icon, className }) => {
  return (
    <li>
      <Link
        to={href}
        className={cn(
          'flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent',
          'text-muted-foreground transition-colors',
          className
        )}
      >
        {Icon && <Icon className="mr-2 h-4 w-4" aria-hidden="true" />}
        {children}
      </Link>
    </li>
  );
};
export default NavLink;
