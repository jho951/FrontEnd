import { FooterLink } from '@/types/footer/footer';

export interface FooterColumnProps {
  title: string;
  links: string[];
}

export type FooterSection = {
  title: string;
  links: FooterLink[];
};
