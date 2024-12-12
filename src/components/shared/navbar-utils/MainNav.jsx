import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import NavLink from './NavLink';

const MainNav = ({ items }) => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex items-center space-x-4">
        {items.map((item) => (
          <NavLink key={item.href} href={item?.href} icon={item.icon}>
            {item.title}
          </NavLink>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
export default MainNav;
