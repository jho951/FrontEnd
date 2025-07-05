function getAdsByGoogle(): AdsByGoogle {
  return (window.adsbygoogle = window.adsbygoogle || []);
}

const pushAds = (config: Record<string, any>) => {
  const ads = (window.adsbygoogle ||= []);
  ads.push(config);
};

type AdsByGoogle = Array<Record<string, any>>;

export { getAdsByGoogle, pushAds };
export type { AdsByGoogle };
