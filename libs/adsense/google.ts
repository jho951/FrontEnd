import { AdsByGoogle, AdsbygoogleConfig } from '@/types';

/**
 * `window.adsbygoogle` 전역 배열을 안전하게 가져옵니다.
 * 존재하지 않을 경우 빈 배열로 초기화합니다.
 *
 * @returns {AdsByGoogle} Google AdSense 광고 설정 객체 배열
 *
 * @example
 * const ads = getAdsByGoogle();
 */
function getAdsByGoogle(): AdsByGoogle {
  return (window.adsbygoogle = (window.adsbygoogle || []) as AdsByGoogle);
}

/**
 * Google AdSense 광고 설정 객체를 전역 큐에 추가합니다.
 *
 * @param {AdsbygoogleConfig} config - 추가할 광고 설정 객체
 *
 * @example
 * pushAds({
 *   google_ad_client: 'ca-pub-123456789',
 *   enable_page_level_ads: true,
 * });
 */
function pushAds(config: AdsbygoogleConfig) {
  const ads = (window.adsbygoogle ||= []);
  ads.push(config);
}

export { getAdsByGoogle, pushAds };
