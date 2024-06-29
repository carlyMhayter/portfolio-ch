import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import FloatingMenu from '../components/FloatingMenu';
import styled from 'styled-components';
import Name from '../components/Frontpage/Name';
const OuterContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  position: absolute;
  /* border: 1px solid grey; */
`;

const InnerContainer = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  /* background-color: blue; */
  max-width: 1200px;
  /* border: 1px solid grey; */
`;

export default function Home() {
  const linkArray = [
    { name: 'Home', href: '' },
    { name: 'About Me', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: 'https://carllitabobita.com/' },
  ];

  return (
    <>
      <Head>
        <title>Carly Hayter</title>
      </Head>
      <OuterContainer>
        <InnerContainer>
          <FloatingMenu links={linkArray} />
          <Name />
        </InnerContainer>
      </OuterContainer>
    </>
  );
}
