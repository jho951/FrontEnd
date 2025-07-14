type Locale = 'en' | 'ko';

type Messages = {
  header: {
    home: string;
    blog: string;
  };
  home: {
    title: string;
    description: string;
  };
};

export type { Locale, Messages };
