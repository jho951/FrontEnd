import { FooterSection, SnsLink } from '../types';

const HEADER_EXCLUDED_PATHS = ['/signin', '/signup'];
const FOOTER_EXCLUDED_PATHS = ['/signin', '/signup'];

const SNS_LINK: SnsLink[] = [
  {
    name: 'RSS',
    href: '/rss.xml',
    icon: 'rss',
    external: true,
  },
  {
    name: 'GitHub',
    href: 'https://github.com/jho951',
    icon: 'gitHub',
    external: true,
  },
];

const NAV_LINK = [
  {
    id: 1,
    href: '/cs',
    label: 'ComputerScience',
    children: [
      { href: '/edit', label: 'Writing' },
      { href: '/list', label: 'list' },
      { href: '/tags', label: 'tags' },
      { href: '/popular', label: 'popular' },
      { href: '/category', label: 'category' },
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

    links: [
      { label: 'What’s New', href: '/posts/latest' },
      { label: 'Writing', href: '/write', target: '_blank' },
      { label: 'Category', href: '/categories' },
      { label: 'Tags', href: '/tags' },
      { label: 'Popular', href: '/posts/popular' },
    ],
  },
  {
    title: 'Community',

    links: [
      { label: 'Contact', href: 'mailto:contact@yourdomain.com', target: '_blank' },
      {
        label: 'Linked In',
        href: 'https://www.linkedin.com/company/yourcompany',
        target: '_blank',
      },
      { label: 'Slack', href: 'https://yourdomain.slack.com', target: '_blank' },
      { label: 'Discord', href: 'https://discord.gg/2TFw8rZD', target: '_blank' },
      { label: 'Blog', href: '/blog', target: '_blank' },
      { label: 'GitHub', href: 'https://github.com/jho951', target: '_blank' },
    ],
  },
  {
    title: 'Download',

    links: [
      {
        label: 'iPhone',
        href: 'https://apps.apple.com/app/id0000000000',
        target: '_blank',
      },
      {
        label: 'iPad',
        href: 'https://apps.apple.com/app/id0000000000',
        target: '_blank',
      },
      {
        label: 'Craft for Android',
        href: 'https://play.google.com/store/apps/details?id=com.yourcompany.craft',
        target: '_blank',
      },
      {
        label: 'Craft for Mac',
        href: 'https://yourdomain.com/download/mac',
        target: '_blank',
      },
      {
        label: 'Craft for Windows',
        href: 'https://yourdomain.com/download/windows',
        target: '_blank',
      },
    ],
  },

  {
    title: 'Legal',

    links: [
      { label: 'Privacy', href: '/legal/privacy', target: '_blank' },
      { label: 'Terms', href: '/legal/terms', target: '_blank' },
      { label: 'Security', href: '/legal/security', target: '_blank' },
      { label: 'ESG', href: '/legal/esg' },
      { label: 'Responsible Disclosure', href: '/legal/responsible-disclosure' },
    ],
  },
  {
    title: 'Company',

    links: [
      { label: 'About', href: '/about' },

      { label: 'Brand Assets', href: '/brand-assets' },
      { label: 'Careers', href: '/careers', target: '_blank' },
    ],
  },
];

export { HEADER_EXCLUDED_PATHS, FOOTER_EXCLUDED_PATHS, NAV_LINK, FOOTER_LINK, SNS_LINK };
