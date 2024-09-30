import Image from 'next/image';
import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import artData from '../data/artData';

const FineArtContainer = styled.div`
  /* border: 1px solid lime; */
  padding-top: 7rem;
  display: grid;
  width: 100%;
  margin: 0 auto;
  /* display: flex;
  flex-direction: column;*/
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr;
  @media only screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    max-width: 1200px;
  }

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
    max-width: 1200px;
  }
`;

const ProjectContainer = styled.div`
  height: fit-content;
  width: 100%;
  background: white;
  padding: 1rem;
  margin: 1rem 0rem;
  border-radius: 1rem;

  .project-image {
    width: calc(100dvw - 4rem);
    margin: 0 auto;
    display: block;
    border-radius: 0.5rem;
    @media only screen and (min-width: 480px) {
      background-color: red;
    }
    @media only screen and (min-width: 640px) {
      background-color: orange;
      margin: 0 auto;
      width: calc(50dvw - 3.5rem);
    }
    @media only screen and (min-width: 768px) {
      background-color: yellow;
    }
    @media only screen and (min-width: 1024px) {
      background-color: lime;
      width: calc(400px - 2.5rem);
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
`;
const ProjectTextContainer = styled.div`
  height: fit-content;
  width: 100%;
  background: white;
  /* padding: 1rem; */
  margin-top: 1rem;
  border-radius: 1rem;

  p:first-of-type {
    font-weight: 600;
  }
`;

const ProjectText = styled.p`
  height: fit-content;
  width: 100%;
  background: white;
  padding-bottom: 1rem;
  text-align: center;
  /* @media only screen and (min-width: 480px) {
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
  } */
`;

function Home() {
  return (
    <>
      <Head>
        <title>Fine Art - Carly Hayter</title>
      </Head>
      <PageLayout>
        <FineArtContainer>
          {artData.map((pic) => (
            <ProjectContainer
              key={pic.imgLoc}
              // data-aos="fade-up"
              // className="project-container project-container-fineart "
            >
              <img
                alt={pic.altText}
                className="project-image"
                src={pic.imgLoc}
              />
              <ProjectTextContainer>
                <ProjectText>{pic.imgTitle}</ProjectText>
                <ProjectText>{pic.imgDescription}</ProjectText>
              </ProjectTextContainer>
            </ProjectContainer>
          ))}
        </FineArtContainer>
      </PageLayout>
    </>
  );
}
export default Home;
