import { useEffect, useRef } from 'react';
import Header from '../header/Header';
import AdBanner from '../../common/banner/AdBanner';
import { useElementHeight } from '../../../hooks/useElementHeight';
export default function HeaderWrapper() {
    const adRef = useRef(null);
    const adHeight = useElementHeight(adRef);
    useEffect(() => {
        document.documentElement.style.setProperty('--header-offset', `${adHeight}px`);
    }, [adHeight]);
    return (<>
      <AdBanner ref={adRef}/>
      <Header adOffset={adHeight}/>
    </>);
}
