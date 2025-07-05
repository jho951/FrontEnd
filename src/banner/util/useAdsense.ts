import { useEffect } from 'react';
import { pushAds } from '@/banner/type/adType';

const useAdsense = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') pushAds({});
  }, []);
};

export { useAdsense };
