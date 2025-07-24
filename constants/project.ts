// ✅ 환경 변수 (필수 값)
const TITLE = process.env.NEXT_PUBLIC_TITLE!;
const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION!;
const COPY = process.env.NEXT_PUBLIC_COPY!;
const PROJECT_URL = process.env.NEXT_PUBLIC_SITE || 'http://localhost:3000';

// ✅ Node 환경
const NODE_ENV = process.env.NODE_ENV;

// ✅ 앱 내부 설정 상수
const SCROLL_DELTA = 5;
const MOBILE_BREAKPOINT = 700;

const DIGITS: Record<string, string[]> = {
  '4': ['1001', '1001', '1001', '1111', '0001', '0001', '0001'],
  '0': ['0110', '1001', '1001', '1001', '1001', '1001', '0110'],
};

export { TITLE, DESCRIPTION, COPY, PROJECT_URL, NODE_ENV, SCROLL_DELTA, MOBILE_BREAKPOINT, DIGITS };
