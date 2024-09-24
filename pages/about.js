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
  height: calc(100% - 150px);
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  top: 150px;
  overflow-y: scroll;

  @media only screen and (min-width: 640px) {
    top: 0px;
    height: 100%;
  }
  .self-portrait {
    mask-position: center top;
    mask-size: contain;
    mask-repeat: no-repeat;
    z-index: 2;

    @media only screen and (min-width: 480px) {
      background-color: red;
    }
    @media only screen and (min-width: 640px) {
      background-color: orange;
    }
    @media only screen and (min-width: 768px) {
      background-color: yellow;
    }
    @media only screen and (min-width: 1024px) {
      background-color: lime;
    }
    @media only screen and (min-width: 1280px) {
      background-color: blue;
    }
    @media only screen and (min-width: 1536px) {
      background-color: purple;
    }

    @media only screen and (min-width: 2000px) {
      background-color: black;
    }
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
  position: relative;
  /* overflow: hidden; */
  flex-direction: column-reverse;
  /* min-height: 700px; */
  height: fit-content;
  top: 150px;
  @media only screen and (min-width: 640px) {
    flex-direction: row;
    top: auto;
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
                src={image.src}
                alt="self portrait of the designer"
                // width={300}
                // height={375}
                fill
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAGxIUFxQRGxcWFx4cGyAoQisoJSUoUTo9MEJgVWVkX1VdW2p4mYFqcZBzW12FtYaQnqOrratngLzJuqbHmairpP/bAEMBHB4eKCMoTisrTqRuXW6kpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpKSkpP/AABEIApgCFwMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAAAQIDBQQG/8QAGRABAQEBAQEAAAAAAAAAAAAAAAERAhID/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//EABcRAQEBAQAAAAAAAAAAAAAAAAABEUH/2gAMAwEAAhEDEQA/APWAVlAQEqVagJUWoIiACAAgAgAKgAiIqAIqKAACooKsRYCqioqqiiiKiCVKtSisVmtVmisVz6dK59Ax0510rnQYrNarFUQARYsSLERY1GY1AVUUUVFBAARFQEAUQABUUAAAAR+gABEVASotQErK1BEBAEVAAAEVAABERUARUUAAFRQVYiwFipFRVVFFEVEEqVazRWazWqxRWa59N1joHOsVusUGKxW6xVEAEWLGY1ERY1GY1AVUUUAAABEVARFRQAAABQAABH6BFQBABKlWsglRagiIqAIAAIAAAioAioIgIoAAoAK1GVBqKkVFUAUAQSs1qs0VmsVusUVisdN1z6BisVuufQMVmtVmqIioIsajMWINRqMxYDSooAACKgCCCiKioAAAAogCgCPfBAEVASpVrNArK1BEBAAQAAAEABAEVBBAUBFAVAGlRQWKkVFVUBVQEVKlWs0GazWqxRWa59N1joGK59N1joGKzWqxVEAEWLGY1EGosZjUBVRQUQAABEVBUBBABQVAFAAAEe+CAIqAiVWaBUKggggAICoAAICoAICCCAoAAKigqoqDUVlRVVAVRBFSpVrNBKxWqxRWa59N1joGK59N1joGKzWqxVEAEWLEWINRqMxYDSsqCgAIAqAgCAAIKiiKAqAKICPfBEBAURKrNAZVKIIIAIAqAACAqCAAgCAqAICqigqosQaWMrBVVBFVAFSpVrNBKxWqxRWa59N1joGK51usUGKzWqxVEAEVYkWINRqMxYDSsqCgAIqCoCAIAAgqKIoCoAogI99AQEEUEolBEqpREQAEAAQBRAAEAQAEBUBAFVAGljKxFaWIsBVQRVQBUqVazQZrNarFFZrn03WKDFc63WKDFZq1mqICCNRYzGog1GozFgNKzFBQAEVBRBAEAAQVFEUBUAUQEe8IIogioJRKAggCCCAICiAKggKgAIIACKKICKrKg0sZWIrSsqDQiooIClZq1mglYrVZorFYrdc6DHTFb6c+gZrFarFUBAGosZixEbixmNQGorKgoAogAgIAggKgKiiAKACiAj3RBFEEVBBAKhUAQQRUEBRAFEABAAQAQQFEFRVZUGlZiorSstAqsqiqggpUpUoM1mtViis1zrdYoMdOfTfTn0DNYrVYqgIA1GoxGoiNRqMxYDSpFQUQVQEAQQAQAEFRRFBRAFEBHuiCKIIqCCAVBAEEEVAAEAUQABABABAAEFFVAGorKxBqNMRoFVlUVUEFKlKlBKxWqxRWax01WOgY6c+m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"
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
