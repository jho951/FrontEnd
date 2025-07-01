const HEADER_NAV_LINK = [
  { href: '/about', label: 'About' },
  { href: '/posts', label: 'Posts' },
  { href: '/tags', label: 'Tags' },
  { href: '/contact', label: 'Contact' },
];

const MENU_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    },
  }),
};

export { HEADER_NAV_LINK, MENU_VARIANTS };
