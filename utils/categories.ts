import {
  Zap,
  LucideIcon,
  Droplet,
  HardHat,
  LibraryBig,
  PencilLine,
  Waves,
  MessageCircleQuestion,
} from 'lucide-react';

type DescriptionType = {
  title: string;
  text: string;
  href: string;
};

type Category = {
  label: CategoryLabel;
  icon: LucideIcon;
  href: string;
  navLink?: {
    title: string;
    text: string;
    href: string;
  };
  trigger: boolean;
  description?: DescriptionType[];
};

export type CategoryLabel =
  | 'Электрика'
  | 'Сантехника'
  | 'Гидравлика'
  | 'Охрана Труда'
  | 'Блог'
  | 'Библиотека'
  | 'Q & A';

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
        href: '/electricity/equipment',
      },
      {
        title: 'Материалы',
        text: 'электрощитовое оборудование, светильники, СиЗ',
        href: '/electricity/materials',
      },
      {
        title: 'График',
        text: 'табель рабочего времени',
        href: '/electricity/schedule',
      },
      {
        title: 'ППР',
        text: 'планово предупредительные работы',
        href: '/electricity/repair',
      },
      {
        title: 'График Поверки Приборов Учета',
        text: 'планово предупредительные работы',
        href: '/electricity/verification',
      },
      {
        title: 'Калькулятор',
        text: 'Расчет сечения проводника',
        href: '/electricity/calculator',
      },
    ],
  },
  {
    label: 'Сантехника',
    icon: Droplet,
    href: '/plumbing',
    trigger: true,
    description: [
      {
        title: 'Оборудование',
        text: 'сантех.оборудование',
        href: '/plumbing/equipment',
      },
      {
        title: 'Материалы',
        text: 'сантех.материалы',
        href: '/plumbing/materials',
      },
    ],
  },
  {
    label: 'Гидравлика',
    icon: Waves,
    href: '/hydraulics',
    trigger: true,
    description: [
      {
        title: 'Оборудование',
        text: 'уравнительные платформы, пресса',
        href: '/hydraulics/equipment',
      },
      {
        title: 'Схемы',
        text: 'Типовые схемы гидравлического оборудования',
        href: '/hydraulics/scheme',
      },
      {
        title: 'Журнал Ремонта',
        text: 'выполненые работы',
        href: '/hydraulics/logbook',
      },
    ],
  },
  {
    label: 'Охрана Труда',
    icon: HardHat,
    href: '/labor',
    trigger: true,
    navLink: {
      title: 'Проверка знаний по Охране Труда',
      text: 'пройти проверку знаний по категориям',
      href: '/labor/',
    },
    description: [
      {
        title: 'Должностные Инструкции',
        text: 'инструкции по профессиям',
        href: '/labor/instructions',
      },
      {
        title: 'Должностные Инструкции',
        text: 'инструкции по профессиям',
        href: '/labor/instructions',
      },
      {
        title: 'Должностные Инструкции',
        text: 'инструкции по профессиям',
        href: '/labor/instructions',
      },
    ],
  },
  {
    label: 'Блог',
    icon: PencilLine,
    href: '/blog',
    trigger: false,
  },
  {
    label: 'Библиотека',
    icon: LibraryBig,
    href: '/library',
    trigger: false,
  },
  {
    label: 'Q & A',
    icon: MessageCircleQuestion,
    href: '/questions',
    trigger: false,
  },
];
