import { Zap, LucideIcon, Droplet } from 'lucide-react';

type Category = {
  label: CategoryLabel;
  icon: LucideIcon;
  href: string;
  description?: string[];
  trigger: boolean;
  // link: boolean;
};

export type CategoryLabel =
  | 'electricity'
  | 'plumbing'
  | 'ventilation'
  | 'hydraulics'
  | 'labor'
  | 'blog'
  | 'library';

export const categories: Category[] = [
  {
    label: 'electricity',
    icon: Zap,
    href: '/electricity',
    trigger: true,
    description: ['PPR', 'Tabel', 'Manetance'],
  },
  {
    label: 'plumbing',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    description: ['water', 'kns', 'pribor ucheta'],
  },
  {
    label: 'library',
    icon: Droplet,
    href: '/library',
    trigger: false,
  },
  // {
  //   label: 'ventilation',
  //   icon: Zap,
  //   href: '/electricity',
  //   description: '123',
  // },
  // {
  //   label: 'hydraulics',
  //   icon: Zap,
  //   href: '/electricity',
  //   description: '123',
  // },
  // {
  //   label: 'labor',
  //   icon: Zap,
  //   href: '/electricity',
  //   description: '123',
  // },
  // {
  //   label: 'blog',
  //   icon: Zap,
  //   href: '/electricity',
  //   description: '123',
  // },
];
