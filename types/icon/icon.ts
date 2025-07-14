/**
 * 아이콘 이름 목록 (아이콘 객체와 동기화됨)
 */
const iconKeys = {
  logo: null,
  sun: null,
  moon: null,
  arrow: null,
  rss: null,
  gitHub: null,
  globe: null,
} as const;

/**
 * 아이콘 이름 유니온 타입
 */
export type IconName = keyof typeof iconKeys;
