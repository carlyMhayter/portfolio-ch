import Image from 'next/image';
import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import artData from '../data/artData';

const FineArtContainer = styled.div`
  padding-top: 7rem;
  display: grid;
  width: 100%;
  margin: 0 auto;
  align-items: start;
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
`;

const ProjectTextContainer = styled.div`
  height: fit-content;
  width: 100%;
  background: white;
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
`;

function FineArtPage() {
  return (
    <>
      <Head>
        <title>Fine Art - Carly Hayter</title>
      </Head>
      <PageLayout>
        <FineArtContainer>
          {artData.map((pic) => (
            <ProjectContainer key={pic.imgLoc}>
              <Image
                src={pic.imgLoc}
                alt={pic.altText}
                width={pic.width}
                height={pic.height}
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '0.5rem',
                  display: 'block',
                }}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

export default FineArtPage;
