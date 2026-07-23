import Image from 'next/image';
import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import image from '../public/self-cropped-hat-small.jpg';
import mask from '../public/dotsblack.svg';
import dots from '../public/blueborder.svg';
import dots2 from '../public/blueborder2.svg';

const AboutContainer = styled.div`
  /* border: 1px solid lime; */
  width: 100%;
  height: calc(100% - 125px);
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  top: 150px;
  overflow-y: scroll;
  /* background-image: linear-gradient(
    to bottom,
    var(--ltgreen) 10%,
    transparent 40%
  ); */
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
  display: flex;
  position: absolute;
  inset: 0;
  /* overflow: hidden; */
  flex-direction: column-reverse;
  /* min-height: 700px; */
  /* background-color: red; */
  padding-top: 100px;
  height: fit-content;
  /* top: 250px; */
  @media only screen and (min-width: 640px) {
    flex-direction: row;
    top: 50%;
    transform: translate(0%, -50%);
  }
`;

const IntroContainer = styled.div`
  padding: 0.25rem 1rem;
  /* width: 300px; */
  margin-bottom: 1rem;
  text-align: right;
  width: fit-content;
  /* align-self: flex-end; */
  /* box-shadow: 20px 15px 0px 0px var(--pinkBrown); */
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
  width: 300px;
  height: 375px;
  /* top: 150px; */

  z-index: 2;
  mask-position: center top;
  mask-size: contain;
  mask-repeat: no-repeat;
  margin: 0 auto;
  @media only screen and (min-width: 640px) {
    top: -20px;
    width: 400px;
    height: 475px;
  }
`;

const DotsContainer = styled.img`
  position: absolute;
  width: 300px;
  height: 375px;
  top: 0px;
  z-index: 3;

  color: #fc8b83;
  @media only screen and (min-width: 640px) {
    top: -10px;
    right: -10px;
    width: 400px;
    height: 475px;
  }
`;

const DotsContainer2 = styled.img`
  position: absolute;
  width: 300px;
  height: 375px;
  top: -30px;
  right: -35px;
  z-index: 1;

  @media only screen and (min-width: 640px) {
    top: 10px;
    right: 10px;
    width: 400px;
    height: 475px;
  }
`;

function Home() {
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
                style={{ maskImage: `url(${mask.src})` }}
                className="self-portrait"
                src={image}
                alt="self portrait of the designer"
                fill
                placeholder="blur"
              />{' '}
              {/* <DotsContainer alt="dots border" src={dots.src} /> */}
              <DotsContainer2 alt="dots border" src={dots2.src} />
            </ImageContainer>
            {/* <img
              className="palm-tree"
              src="/palm-tree-color.svg"
              alt="hand drawn design of palm tree"
            /> */}
          </InnerContainer>
        </AboutContainer>
        {/* <Image
          src="/palm-tree-color.svg"
          alt="hand drawn design of palm tree"
          layout="fill"
        /> */}
      </PageLayout>
    </>
  );
}
export default Home;
