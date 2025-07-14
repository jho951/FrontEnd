import { useEffect } from 'react';
import { pushAds } from '../types';
import { ADSENSE_CLIENT_ID } from '../constants';
function useAdsense({ slotId = '1234567890', responsive = true, format = 'auto', }) {
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        pushAds({});
    }, []);
    const adProps = {
        className: 'adsbygoogle',
        style: { display: 'block', width: '100%', height: '100px' },
        'data-ad-client': ADSENSE_CLIENT_ID,
        'data-ad-slot': slotId,
        'data-ad-format': format,
        'data-full-width-responsive': responsive ? 'true' : 'false',
    };
    return { adProps };
}
export { useAdsense };
