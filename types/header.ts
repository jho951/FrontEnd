interface HeaderProps {
  adOffset: number;
}

type HeaderMenuOpenProps = {
  isOpen: boolean;
  onClick: () => void;
};

interface HeaderAuthLink {
  id: number;
  href: string;
  label: string;
}

interface HeaderNavLink {
  id: number;
  href: string;
  label: string;
  children?: HeaderNavChild[];
}

interface HeaderNavChild {
  href: string;
  label: string;
}

export type { HeaderProps, HeaderMenuOpenProps, HeaderAuthLink, HeaderNavLink, HeaderNavChild };
