type HeaderProps = {
  adRef?: React.RefObject<HTMLDivElement | null>;
};

type HeaderMenuOpenProps = {
  isOpen: boolean;
  onClick: () => void;
};

export type { HeaderProps, HeaderMenuOpenProps };
