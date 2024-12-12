import {
  LayoutDashboard,
  Users,
  BookOpen,
  BadgePlus,
  Video,
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
    title: 'User',
    icon: Users,
    children: [
      {
        title: 'All Users',
        href: 'users',
        icon: Users,
      },
    ],
  },
  {
    title: 'Lesson',
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
    title: 'Vocabulary',
    icon: BookOpen,
    children: [
      {
        title: 'Vocabularies',
        href: 'vocabularies',
        icon: BookOpenCheck,
      },
      {
        title: 'Create Vocabulary',
        href: 'vocabulary/create',
        icon: BadgePlus,
      },
    ],
  },
  {
    title: 'Tutorial',
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
