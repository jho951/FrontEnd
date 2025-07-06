export {};

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, any>>;
  }
}

type AdsenseSlotOptions = {
  slotId?: string;
  responsive?: boolean;
  format?: string;
};

interface AdBannerProps {
  slotId?: string;
  height?: string | number;
  width?: string | number;
  className?: string;
}

function getAdsByGoogle(): AdsByGoogle {
  return (window.adsbygoogle = window.adsbygoogle || []);
}

const pushAds = (config: Record<string, any>) => {
  const ads = (window.adsbygoogle ||= []);
  ads.push(config);
};

type AdsByGoogle = Array<Record<string, any>>;

export { getAdsByGoogle, pushAds };
export type { AdsByGoogle, AdsenseSlotOptions, AdBannerProps };
