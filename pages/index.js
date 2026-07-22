import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Name from '../components/Frontpage/Name';
import PageLayout from '../components/PageLayout';

export default function Home() {
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
