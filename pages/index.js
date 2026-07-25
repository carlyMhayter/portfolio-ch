import Head from 'next/head';
import Name from '../components/Frontpage/Name';
import PageLayout from '../components/PageLayout';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Carly Hayter</title>
      </Head>
      <PageLayout fullHeight>
        <Name />
      </PageLayout>
    </>
  );
}
