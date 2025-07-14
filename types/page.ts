export type PageProps = {
  params: {
    lang: string;
  };
};

export type LayoutProps = {
  children: React.ReactNode;
  params: { lang: string };
};

export type ErrorProps = {
  error: Error;
  reset: () => void;
};
