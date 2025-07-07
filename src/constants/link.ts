const HEADER_EXCLUDED_PATHS = ['/signin', '/signup'];
const FOOTER_EXCLUDED_PATHS = ['/signin', '/signup'];

const NAV_LINK = [
  {
    id: 1,
    href: '/test1',
    label: 'test1',
    children: [
      { href: '/test1/writing', label: 'Writing' },
      { href: '/test1/design', label: 'Design' },
    ],
  },
  {
    id: 2,
    href: '/test2',
    label: 'test2',
    children: [
      { href: '/test2/writing', label: 'Writing' },
      { href: '/test2/design', label: 'Design' },
    ],
  },
  { id: 3, href: '/test3', label: 'test3' },
  { id: 4, href: '/test4', label: 'test4' },
];

export { HEADER_EXCLUDED_PATHS, FOOTER_EXCLUDED_PATHS, NAV_LINK };
