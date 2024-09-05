import Head from 'next/head';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import Image from 'next/image';
import styled from 'styled-components';
import arrow from '../public/arrow.svg';
import closeX from '../public/x.svg';

const webExamples = [
  {
    slug: 'perpetual',
    imgLoc: '/perpetual-screenshot.png',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'screenshot of https://www.perpetualflame.net/',
    siteTitle: 'Custom Website',
    siteClient: 'Perpetual Flame Ministries',
    siteDescription:
      'Managed software development for an independent record label with over $400K in annual revenue, designing and implementing a custom Next.js website in Typescript in under 2 business days.',
    linkToSite: 'https://www.perpetualflame.net/',
  },
  {
    slug: 'ndy',
    imgLoc: '/NDY-screenshot.png',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'never die young screenshot of logo',
    siteTitle: 'Custom Website + Graphic Design',
    siteClient: 'Never Die Young Tribute Band, 2021',
    siteDescription:
      'Full graphic design services and custom website built with React in Next.js.',
    linkToSite: 'https://neverdieyoung.net',
  },
  {
    slug: 'seq',
    imgLoc: '/seqScreenshot.png',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'never die young screenshot of logo',
    siteTitle: 'Sequencing Lab Instrument Statuses',
    siteClient: 'Omniome Inc., 2020',
    siteDescription:
      'Page built to supervise DNA sequencing remotely for biotech company. Custom Webpack set-up and configuration.',
    linkToSite: 'https://seq-lab-status.vercel.app',
  },
  {
    slug: 'palette',
    imgLoc: '/palette_screen.jpg',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'screenshot of palette site',
    siteTitle: 'Color AI Palette Generator',
    siteClient: 'Carly Hayter, 2021',
    siteDescription:
      "A fun color palette generator with infinite scoll functionality. Created with Imagga's Color AI API, and Unsplash.",
    linkToSite: 'https://infinite-scroll-pi.vercel.app/',
  },
];

const ProjectsOuterContainer = styled.div`
  height: 100%;
  width: 100%;
  /* background-color: pink; */
  padding-top: 7rem;
`;

const ProjectContainer = styled.button`
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  transition: all ease 0.5s;
  border: 0px;
  cursor: pointer;
  /* ${(props) =>
    props.isSelected
      ? '  align-items: flex-start;'
      : '  align-items: center;'} */
  &:hover {
    transform: translate(0.25rem, 0rem);
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;

const ImageContainer = styled.div`
  height: 300px;
  width: 30%;
  position: relative;
  background-position: center;
  background-size: cover;
`;

const TextContainer = styled.div`
  /* border: 1px solid red; */
  width: 40%;
  padding: 1rem;
`;
const SiteTitle = styled.div`
  font-size: 1.5rem;
  color: var(--olive);
  /* border-bottom: 2px solid yellow; */
`;
const SiteDescription = styled.div`
  font-size: 1rem;
  color: var(--olive);
`;
const SiteInfo = styled.div`
  /* height: 600px; */
  width: 100%;
  color: gray;
  /* ${(props) => (props.isSelected ? '   height: 600px;' : 'height: 1px;')} */
`;

const ArrowContainer = styled.div`
  /* border: 1px solid blue; */
  height: 100%;
  max-height: 300px;

  width: 30%;
  position: relative;
  padding-right: 2rem;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  background-color: white;
  transition: 0.5s all ease;
  ${(props) => (props.clickedInto ? 'z-index: 50;' : 'z-index: -1;')}
  ${(props) => (props.showModal ? 'opacity: 1;' : 'opacity: 0;')}
`;

const ModalInner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 0;
  height: 50px;
  width: 50px;
  z-index: 51;
  background-color: transparent;
`;

const CloseContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const ModalInfoContainer = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
  padding: 2rem;
  /* overflow-y: scroll; */
  /* border: 1px solid var(--yellow); */

  * {
    padding-bottom: 0.5rem;
  }
`;
function Home() {
  const [clickedInto, setClickedInto] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('');
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    if (clickedInto) {
      const data = webExamples.filter((site) => site.slug === selected)[0];
      setSelectedData(data);
      // console.log('data', data);
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    } else {
      setTimeout(() => {
        setShowModal(false);
      }, 0);
    }
  }, [clickedInto]);

  return (
    <>
      <Head>
        <title>Web - Carly Hayter</title>
      </Head>
      <PageLayout>
        <ProjectsOuterContainer>
          {webExamples.map((site, index) => (
            <ProjectContainer
              id={`slug-${site.slug}`}
              key={`${Date.now}-${index}`}
              isSelected={selected === site.slug}
              onClick={() => {
                setClickedInto(true);
                setSelected(site.slug);
              }}
            >
              <ImageContainer
                style={{ backgroundImage: `url(${site.imgLoc})` }}
              />
              {/* <Image src={site.imgLoc} layout="fill" />
              </ImageContainer> */}
              <TextContainer>
                <SiteTitle>{site.siteClient}</SiteTitle>
                <SiteDescription>{site.siteTitle}</SiteDescription>
                <SiteInfo isSelected={selected === site.slug}></SiteInfo>
              </TextContainer>
              <ArrowContainer isSelected={selected === site.slug}>
                <img src={arrow.src} alt="right pointing arrow" />
              </ArrowContainer>
            </ProjectContainer>
          ))}
        </ProjectsOuterContainer>
      </PageLayout>
      <ModalContainer clickedInto={clickedInto} showModal={showModal}>
        <ModalInner>
          <CloseButton
            onClick={() => {
              setClickedInto(false);
              setSelected('');
            }}
          >
            <CloseContainer>
              <Image src={closeX.src} layout="fill" alt="close button" />
            </CloseContainer>
          </CloseButton>
          <ModalInfoContainer>
            <SiteTitle>{selectedData.siteClient}</SiteTitle>
            <SiteDescription>{selectedData.siteTitle}</SiteDescription>
            <SiteInfo>{selectedData.siteDescription}</SiteInfo>
          </ModalInfoContainer>
        </ModalInner>
      </ModalContainer>
    </>
  );
}
export default Home;

// <div className="page-content web-page-content">
//   <div className="gallery-container web-gallery">
//     {webExamples.map((thing) => (
//       <div
//         key={thing.sitePic}
//         className="web-project"
//         style={{
//           backgroundImage: `url(${thing.imgLoc})`,
//         }}
//       >
//         <div className="project-background-overlay">
//           <div className="project-inner-container">
//             <div className="project-text-container">
//               <p className="project-title site-title">{thing.siteTitle}</p>
//               <p className="project-client">{thing.siteClient}</p>
//               <p className="project-description web-description ">
//                 {thing.siteDescription}
//               </p>
//               <a className="project-link" href={thing.linkToSite}>
//                 View site
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>;
