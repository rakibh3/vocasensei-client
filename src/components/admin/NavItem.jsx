import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

const AdminNavItem = ({ item }) => {
  {
    const [isOpen, setIsOpen] = useState(false);

    if (item?.children) {
      return (
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
            <div className="flex items-center gap-x-2">
              <item.icon className="h-4 w-4" />
              {item.title}
            </div>
            <ChevronRight
              className={cn(
                'h-4 w-4 transition-transform',
                isOpen && 'rotate-90'
              )}
            />
          </CollapsibleTrigger>
          <CollapsibleContent className="ml-4 space-y-1 pt-1">
            {item.children.map((child) => (
              <NavLink
                key={child?.href}
                to={child?.href || '#'}
                className={({ isActive }) =>
                  cn(
                    'flex items-center gap-x-2 rounded-md px-2 py-2',
                    'text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
                    isActive && 'bg-accent text-accent-foreground'
                  )
                }
              >
                <child.icon className="h-4 w-4" />
                {child.title}
              </NavLink>
            ))}
          </CollapsibleContent>
        </Collapsible>
      );
    }

    return (
      <NavLink
        to={item?.href || '#'}
        end={item?.href === '/dashboard'}
        className={({ isActive }) =>
          cn(
            'flex items-center gap-x-2 rounded-md px-2 py-2',
            'text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground',
            isActive && 'bg-accent text-accent-foreground'
          )
        }
      >
        <item.icon className="h-4 w-4" />
        {item?.title}
      </NavLink>
    );
  }
};

export default AdminNavItem;
