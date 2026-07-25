import Image from 'next/image';
import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import image from '../public/self-cropped-hat-small.jpg';

// Next.js 14 imports SVGs from public/ as string URLs, not objects with .src
const maskUrl = '/dotsblack.svg';
const dots2Url = '/blueborder2.svg';

const AboutContainer = styled.div`
  width: 100%;
  height: calc(100% - 125px);
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  /* top: 150px; */
  overflow-y: scroll;

  border-radius: 10px;
  @media only screen and (min-width: 640px) {
    top: 0px;
    height: 100%;
    background-image: none;
  }
  .self-portrait {
    mask-position: center top;
    mask-size: contain;
    mask-repeat: no-repeat;
    z-index: 2;
  }

  .palm-tree {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100dvh;
    width: 600px;
    transform: translate(-50%, -50%);
    z-index: 1;
  }
`;

const InnerContainer = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 1rem;
  /* padding-top: 14rem; */
  height: fit-content;
  align-items: center;
  @media only screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 1rem;
  }
`;

const IntroContainer = styled.div`
  padding: 0.25rem 1rem;
  margin-bottom: 1rem;
  text-align: right;
  width: fit-content;
  z-index: 10;
  margin: 0 auto;
  color: var(--olive);

  position: relative;
  border-radius: 10px;
  /* color: var(--deSatRed); */
  /* font-style: italic; */
  font-weight: 600;
  @media only screen and (min-width: 640px) {
    /* width: 400px; */
  }
`;

const TextContainer = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  /* background-color: pink; */
  z-index: 3;
  margin: 0 auto;

  @media only screen and (min-width: 480px) {
    /* background-color: red; */
    width: 320px;
  }
  @media only screen and (min-width: 640px) {
    /* background-color: orange; */
    width: 290px;
  }

  @media only screen and (min-width: 768px) {
    /* background-color: yellow; */
    width: 325px;
  }
  @media only screen and (min-width: 1024px) {
    /* background-color: lime; */
    width: 350px;
  }
  @media only screen and (min-width: 1280px) {
    /* background-color: blue; */
    width: 375px;
  }
  @media only screen and (min-width: 1536px) {
    /* background-color: purple; */
    width: 375px;
  }

  @media only screen and (min-width: 2000px) {
    /* background-color: black; */
    width: 400px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  z-index: 2;
  mask-position: center top;
  mask-size: contain;
  mask-repeat: no-repeat;
  margin: 0 auto;

  @media only screen and (min-width: 640px) {
    top: -20px;
    width: 100%;
    max-width: 400px;
    height: auto;
  }
`;

function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Carly Hayter</title>
      </Head>
      <PageLayout fullHeight>
        <AboutContainer>
          <InnerContainer>
            <TextContainer>
              <IntroContainer> Nice to meet you!</IntroContainer>
              My name is Carly, and I love to build things.
              <br /> <br />
              I love to use React to create elegant solutions to todays demands
              of the web. The internet is such a big part of our lives, and I am
              fascinated by the way small changes in code can transform a users
              experience.
              <br />
              <br />I have leveraged my training in molecular biology and
              scientific problem-solving and experimentation into a career in
              web development.
            </TextContainer>
            <ImageContainer>
              <Image
                className="self-portrait"
                src={image}
                alt="self portrait of the designer"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{
                  maskImage: `url(${maskUrl})`,
                  width: '100%',
                  height: 'auto',
                  zIndex: 10,
                  top: '200px',
                }}
                placeholder="blur"
              />
              <Image
                className="dots container"
                src={dots2Url}
                alt="dots border"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                fill
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '-20px',
                  left: 'auto',
                  zIndex: -1,
                }}
              />
            </ImageContainer>
          </InnerContainer>
        </AboutContainer>
      </PageLayout>
    </>
  );
}
export default AboutPage;
