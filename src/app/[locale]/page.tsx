export default function Home({ params }: { params: { locale: string } }) {
  return <div>{params.locale === 'ko' ? '안녕하세요!' : 'Hello!'}</div>;
}
