/**
 * google adsense 아이디
 */
const ADSENSE_SLOT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;
const ADSENSE_CLIENT_ID = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID;

/**
 * google adsense 기본 설정
 */
const DEFAULT_AD_STYLE: React.CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100px',
};

const DEFAULT_AD_FORMAT = 'auto';

export { ADSENSE_SLOT_ID, ADSENSE_CLIENT_ID, DEFAULT_AD_STYLE, DEFAULT_AD_FORMAT };
