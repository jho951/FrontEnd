// types/global.d.ts (또는 layout.tsx 포함 상단)
declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdsbygoogleWindow = Window & {
  adsbygoogle: unknown[];
};

(window as AdsbygoogleWindow).adsbygoogle = (window as AdsbygoogleWindow).adsbygoogle || [];

(window as AdsbygoogleWindow).adsbygoogle.push({});
