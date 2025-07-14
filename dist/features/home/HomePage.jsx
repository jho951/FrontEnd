'use client';
export default function HomePage({ lang }) {
    return (<main>
      <h1>{lang === 'ko' ? '홈페이지' : 'Home Page'}</h1>
      <p>{lang === 'ko' ? '어서 오세요!' : 'Welcome!'}</p>
    </main>);
}
