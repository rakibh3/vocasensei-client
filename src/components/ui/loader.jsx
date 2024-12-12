import { cn } from '@/lib/utils';

const Loader = ({ size = 'md', className }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };
  return (
    <div
      className={cn(
        'inline-block animate-spin rounded-full border-2 border-current border-t-transparent text-current',
        sizeClasses[size],
        className
      )}
      role="status"
      aria-label="loading"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default Loader;
