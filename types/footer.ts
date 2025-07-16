import { IconName } from '@/types/icon';

type FooterLink = {
  label: string;
  href: string;
  target?: '_blank' | '_parent';
};

interface FooterColumnProps {
  title: string;
  links: string[];
}

type FooterSection = {
  title: string;
  links: FooterLink[];
};

interface FooterSnsLink {
  name: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

export type { FooterLink, FooterColumnProps, FooterSection, FooterSnsLink };
