type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/electricity ', label: 'Электрика' },
  { href: '/plumbing ', label: 'Сантехника' },
  { href: '/hydraulics ', label: 'Гидравлика' },
  { href: '/labor ', label: 'Охрана Труда' },
  { href: '/blog', label: 'Блог' },
  { href: '/library', label: 'Библиотека' },
  { href: '/questions', label: 'Q & A' },
  { href: '/ ', label: 'Профиль' },
];
