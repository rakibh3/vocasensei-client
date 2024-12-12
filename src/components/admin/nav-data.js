import {
  LayoutDashboard,
  Users,
  BookOpen,
  BadgePlus,
  Video,
  UserCog,
  BookOpenCheck,
  // VideoPlus,
} from 'lucide-react';

export const adminNavData = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'User Management',
    icon: Users,
    children: [
      {
        title: 'All Users',
        href: 'users',
        icon: Users,
      },
      {
        title: 'User Roles',
        href: 'user-roles',
        icon: UserCog,
      },
    ],
  },
  {
    title: 'Lesson Management',
    icon: BookOpen,
    children: [
      {
        title: 'Lessons',
        href: 'lessons',
        icon: BookOpenCheck,
      },
      {
        title: 'Create Lesson',
        href: 'lesson/create',
        icon: BadgePlus,
      },
    ],
  },
  {
    title: 'Tutorial Management',
    icon: Video,
    children: [
      {
        title: 'All Tutorials',
        href: 'tutorials',
        icon: Video,
      },
      // {
      //   title: 'Add Tutorial',
      //   href: 'tutorial/create',
      //   icon: VideoPlus,
      // },
    ],
  },
];
