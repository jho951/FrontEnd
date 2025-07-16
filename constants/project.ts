// ✅ 환경 변수 (필수 값)
const TITLE = process.env.NEXT_PUBLIC_TITLE!;
const DESCRIPTION = process.env.NEXT_PUBLIC_DESCRIPTION!;
const COPY = process.env.NEXT_PUBLIC_COPY!;
const PROJECT_URL = process.env.NEXT_PUBLIC_SITE!;

// ✅ Node 환경
const NODE_ENV = process.env.NODE_ENV;

// ✅ 앱 내부 설정 상수
const SCROLL_DELTA = 5;
const MOBILE_BREAKPOINT = 700;

export { TITLE, DESCRIPTION, COPY, PROJECT_URL, NODE_ENV, SCROLL_DELTA, MOBILE_BREAKPOINT };
