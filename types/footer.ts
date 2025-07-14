import { IconName } from './icon';

interface FooterColumnProps {
  title: string;
  links: string[];
}

type FooterLink = {
  label: string;
  href: string;
  target?: '_blank' | '_parent';
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

export interface SnsLink {
  name: string;
  href: string;
  icon: IconName;
  external?: boolean;
}

export type { FooterColumnProps, FooterLink, FooterSection };
