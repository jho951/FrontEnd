interface FooterColumnProps {
  title: string;
  links: string[];
}

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
  external: boolean;
}

interface FooterNavProps {
  title: string;
  links: { label: string; href: string }[];
  external?: boolean;
}

export type { FooterColumnProps, FooterLink, FooterSection, FooterNavProps };
