import { Zap, LucideIcon, Droplet } from 'lucide-react';

type ContentType = {
  title: string;
  text: string;
};

type Category = {
  label: CategoryLabel;
  icon: LucideIcon;
  href: string;
  description?: string[];
  navLink?: boolean;
  trigger: boolean;
  content?: ContentType[];
  // link: boolean;
};

export type CategoryLabel =
  | 'Электрика'
  | 'Сантехника'
  | 'Гидравлика'
  | 'Охрана Труда'
  | 'Блог'
  | 'Библиотека';

export const categories: Category[] = [
  {
    label: 'Электрика',
    icon: Zap,
    href: '/electricity',
    trigger: true,
    description: ['PPR', 'Tabel', 'Manetance'],
    navLink: true,
    content: [
      {
        title: 'Оборудование',
        text: 'электрические щиты',
      },
      {
        title: 'Материалы',
        text: 'электрощитовое оборудование, светильники, СиЗ',
      },
      {
        title: 'График',
        text: 'табель рабочего времени',
      },
      {
        title: 'ППР',
        text: 'планово предупредительные работы',
      },
      {
        title: 'График Поверки Приборов Учета',
        text: 'планово предупредительные работы',
      },
    ],
  },
  {
    label: 'Сантехника',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    description: ['water', 'kns', 'pribor ucheta'],
    content: [{ title: 'оборудование', text: 'сантех.оборудование' }],
  },
  {
    label: 'Гидравлика',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    description: ['water', 'kns', 'pribor ucheta'],
  },
  {
    label: 'Охрана Труда',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    description: ['water', 'kns', 'pribor ucheta'],
  },
  {
    label: 'Блог',
    icon: Droplet,
    href: '/plumbing',
    trigger: false,
    description: ['water', 'kns', 'pribor ucheta'],
  },
  {
    label: 'Библиотека',
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
