const MENU_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring' as const,
      stiffness: 300,
      damping: 20,
    },
  }),
};

const SCROLL_DELTA = 5;
const MOBILE_BREAKPOINT = 700;
const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;
const ADSENSE_SLOT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;
const NODE_ENV = process.env.NODE_ENV;

export {
  MENU_VARIANTS,
  SCROLL_DELTA,
  MOBILE_BREAKPOINT,
  ADSENSE_CLIENT_ID,
  ADSENSE_SLOT_ID,
  NODE_ENV,
};
