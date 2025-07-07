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

export { MENU_VARIANTS, SCROLL_DELTA, MOBILE_BREAKPOINT };
