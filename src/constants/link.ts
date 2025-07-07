import { FooterSection } from '@/types';

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

const FOOTER_LINK: FooterSection[] = [
  {
    title: 'Posting',
    external: false,
    links: [
      { label: 'What’s New', href: '/posts/latest' },
      { label: 'Writing', href: '/write' },
      { label: 'Category', href: '/categories' },
      { label: 'Tags', href: '/tags' },
      { label: 'Popular', href: '/posts/popular' },
    ],
  },
  {
    title: 'Community',
    external: true,
    links: [
      { label: 'Contact', href: 'mailto:contact@yourdomain.com' },
      { label: 'Linked In', href: 'https://www.linkedin.com/company/yourcompany' },
      { label: 'Slack', href: 'https://yourdomain.slack.com' },
      { label: 'Discord', href: 'https://discord.gg/yourinvite' },
      { label: 'Blog', href: '/blog' },
      { label: 'GitHub', href: 'https://github.com/yourorg' },
    ],
  },
  {
    title: 'Company',
    external: false,
    links: [
      { label: 'About', href: '/about' },
      { label: 'Press', href: '/press' },
      { label: 'Brand Assets', href: '/brand-assets' },
      { label: 'Affiliate Program', href: '/affiliate' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Legal',
    external: true,
    links: [
      { label: 'Privacy', href: '/legal/privacy' },
      { label: 'Terms', href: '/legal/terms' },
      { label: 'Security', href: '/legal/security' },
      { label: 'ESG', href: '/legal/esg' },
      { label: 'Responsible Disclosure', href: '/legal/responsible-disclosure' },
    ],
  },

  {
    title: 'Download',
    external: true,
    links: [
      {
        label: 'iPhone',
        href: 'https://apps.apple.com/app/id0000000000',
      },
      {
        label: 'iPad',
        href: 'https://apps.apple.com/app/id0000000000',
      },
      {
        label: 'Craft for Android',
        href: 'https://play.google.com/store/apps/details?id=com.yourcompany.craft',
      },
      {
        label: 'Craft for Mac',
        href: 'https://yourdomain.com/download/mac',
      },
      {
        label: 'Craft for Windows',
        href: 'https://yourdomain.com/download/windows',
      },
    ],
  },
];

export { HEADER_EXCLUDED_PATHS, FOOTER_EXCLUDED_PATHS, NAV_LINK, FOOTER_LINK };
