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

  const BallContainer = styled.div`
    position: absolute;
    background-color: pink;
    width: 100dvw;
    height: 100dvh;
    z-index: 39;
    overflow: hidden;
  `;
  const BallInnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const Ball = styled.div`
    background-color: var(--hotpink);
    height: 24px;
    width: 24px;
    border-radius: 24px;
    animation: move 5s infinite;
    /* transform: translate(-50%, -50%);
    left: 50%;
    top: -10%; */
    position: absolute;
    transform: translate(-50%, -50%);

    @keyframes move {
      1% {
        left: 50%;
        top: -10%;
        transform: translate(-50%, -50%);
      }

      50% {
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }

      100% {
        left: 80%;
        top: 110%;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }

    /* offset-path: path(
      'M1131,707c-39-691-376-277-376-277,3.64-33.94,5.41-63.7,5.75-89.8,1.57-122.37-135.12-197.2-236.59-128.77-162.72,109.73-165.16,324.57-165.16,324.57,0,0,41-300-45-327-53.81-16.89-80,87-80,87,0,0-6.13,69.75,27,69s21-68,21-68c0,0-46-90-78-138s-75.5-41.5-75.5-41.5'
    );
    animation: move 10s infinite;

    @keyframes move {
      1% {
        offset-distance: 100%;
        opacity: 0;
      }
      20% {
        offset-distance: 100%;
        opacity: 1;
      }

      80% {
        opacity: 1;
        offset-distance: 1%;
      }

      100% {
        opacity: 0;
        offset-distance: 1%;
      }
    } */
  `;
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
      <BallContainer>
        <BallInnerContainer>
          <Ball />
        </BallInnerContainer>
      </BallContainer>
    </>
  );
}
