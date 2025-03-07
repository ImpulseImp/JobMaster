import { Zap, LucideIcon, Droplet } from 'lucide-react';

type DescriptionType = {
  title: string;
  text: string;
};

type Category = {
  label: CategoryLabel;
  icon: LucideIcon;
  href: string;
  navLink?: {
    title: string;
    text: string;
  };
  trigger: boolean;
  description?: DescriptionType[];
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

    description: [
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
      {
        title: 'Калькулятор',
        text: 'Расчет сечения проводника',
      },
    ],
  },
  {
    label: 'Сантехника',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    description: [
      { title: 'Оборудование', text: 'сантех.оборудование' },
      { title: 'Материалы', text: 'сантех.материалы' },
    ],
  },
  {
    label: 'Гидравлика',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    description: [
      { title: 'Оборудование', text: 'уравнительные платформы, пресса' },
      { title: 'Схемы', text: 'Типовые схемы гидравлического оборудования' },
      {
        title: 'Журнал Ремонта',
        text: 'выполненые работы',
      },
    ],
  },
  {
    label: 'Охрана Труда',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    navLink: {
      title: 'Проверка знаний по Охране Труда',
      text: 'пройти проверку знаний по категориям',
    },
    description: [
      { title: 'Должностные Инструкции', text: 'инструкции по профессиям' },
      { title: 'Должностные Инструкции', text: 'инструкции по профессиям' },
      { title: 'Должностные Инструкции', text: 'инструкции по профессиям' },
      { title: 'Должностные Инструкции', text: 'инструкции по профессиям' },
    ],
  },
  {
    label: 'Блог',
    icon: Droplet,
    href: '/plumbing',
    trigger: false,
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
