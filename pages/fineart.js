import Image from 'next/image';
import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import { artData } from '../data/artData';
const classString = 'project-img-container fineart-img-container';

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
    }
    @media only screen and (min-width: 1280px) {
      background-color: blue;
      width: calc(600px - 2.5rem);
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
      {/* <div className="page-content fineart-page-content">
        <div className="gallery-container fineart-gallery-container">
          {fineArtPics.map((pic) => (
            <div
              key={pic.imgLoc}
              className="project-container project-container-fineart "
            >
              <div className={pic.sizeClass}>
                <Image
                  alt={pic.altText}
                  className="project-img"
                  src={pic.imgLoc}
                  layout="fill"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAGsAawMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAEBQACAwEGB//EAB0QAQADAQEAAwEAAAAAAAAAAAABAgMhMQQREkH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A9miICMNm4baQC39Svqt565WeijMhMeBMpFVn7gFkRBHJ8CbCrTwHtIA9fWLTWesfsR6JEQVyfAe9vRWk/VS/e3oML265W3WOl+uUv0UxysMztwtyuNysApFK2dm3BFdJ4C2sI0sB2sAbWzH9O62YfpWXrERyfEaY724W/Iv6N3t6V/It6AbS/XKX6w1v1Sl+o0a43HZXKsbjsrAPrZ2bcYVstNlRXSwHawjSwHewyG2uw/abXD/tUe7VvP1CzPSeI0D+RPpV8m3pl8ifSr5M+gXbW6rnbqu09UznqNwzwsYZWLMJMMpEGVtxabcZVni0zxUZ6WAb2GaSA3kZA72DfptvIWZ6rNfRmWvjVnr4jZfv/Sr5P9Nt49LPkR6BTtHVM46I1r1Sleo1BWED8geNR2UAIr47KVjjswqB9PAO4/SAO8DJZuFmOjdoDTVWa+hqaeLq38RsBvHpbvHpptHpdvHoFuleq0r1vevXKV6jTbGo3OA2UDM4BpWHZhasJMKgbSAW0D9IBbQMlu0MPyL1hh9Ky90rbxZy3iNg9i/aPTDYv2AFeOuVjq1/XK+o0JygXnAXIXmDaISUh2VQPoC2HaAthkBrDD6EasFR/9k=
                "
                />
              </div>
              <div className="project-text-container">
                <p className="project-title">{pic.imgTitle}</p>
                <p className="project-description">{pic.imgDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>{' '} */}
    </>
  );
}
export default Home;
