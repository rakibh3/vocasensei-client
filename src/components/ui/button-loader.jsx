import { cn } from '@/lib/utils';
import { Button } from './button';
import Loader from './loader';

const ButtonLoader = ({
  loading,
  loadingText = 'Loading...',
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <Button
      className={cn('min-w-[100px] relative', className)}
      disabled={loading || disabled}
      {...props}
    >
      <span
        className={cn(
          'transition-opacity',
          loading ? 'opacity-0' : 'opacity-100'
        )}
      >
        {children}
      </span>

      {loading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
          <Loader size="sm" />
          {loadingText && <span className="text-sm">{loadingText}</span>}
        </div>
      )}
    </Button>
  );
};
export default ButtonLoader;
