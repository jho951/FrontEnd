import { Locale } from '@/types';

export default function HomePage({ lang }: { lang: Locale }) {
  return (
    <main className="responsive-main">
      <h1>{lang === 'ko' ? '홈페이지' : 'Home Page'}</h1>
      <p>{lang === 'ko' ? '어서 오세요!' : 'Welcome!'}</p>
    </main>
  );
}
