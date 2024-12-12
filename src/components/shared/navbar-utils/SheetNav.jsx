import { SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const SheetNav = ({ items, onSelect }) => {
  return (
    <>
      <SheetHeader className="px-1">
        <SheetTitle asChild>
          <Link to="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="font-bold">Voca Sensei</span>
          </Link>
        </SheetTitle>
      </SheetHeader>
      <div className="mt-8">
        <ul className="flex flex-col space-y-3">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  'flex w-full items-center rounded-md p-2 text-sm font-medium hover:bg-accent',
                  'text-muted-foreground'
                )}
                onClick={onSelect}
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default SheetNav;
