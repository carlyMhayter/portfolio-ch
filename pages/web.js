import Head from 'next/head';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import Image from 'next/image';
import styled from 'styled-components';
import arrow from '../public/arrow.svg';
import closeX from '../public/x.svg';
import { webWork } from '../data/data';

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
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  transition: all ease 0.5s;
  position: relative;
  border: 0px;
  cursor: pointer;
  /* box-shadow: 2px 2px 0px 0px var(--ltyellow); */
  /* ${(props) =>
    props.isSelected
      ? '  align-items: flex-start;'
      : '  align-items: center;'} */
  @media only screen and (min-width: 640px) {
    .underlineTitle {
      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: '';
        display: block;
        height: 3px; //
        left: 50%;
        opacity: 0;
        border-radius: 2px;
        position: relative;

        background: linear-gradient(to right, white, var(--yellow), white);

        /* background: linear-gradient(to right, var(--blue-ltr), var(--vvLtGrey)); // */
        transition:
          width 0.3s ease 0s,
          left 0.3s ease 0s,
          opacity 0.2s ease;
        width: 0;
      }
    }

    &:hover {
      transform: translate(0.25rem, 0rem);

      .underlineTitle {
        &:after {
          width: 100%;
          left: 0;
          opacity: 1;
        }
      }
    }
  }

  &:hover {
    transform: translate(0.25rem, 0rem);
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

const ImageContainer = styled.div`
  height: 290px;
  width: 100%;
  min-width: 250px;
  position: relative;
  background-position: center;
  background-size: cover;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
  /* border: 1px solid blue; */

  @media only screen and (min-width: 640px) {
    width: 30%;
  }
`;

const TextContainer = styled.div`
  /* border: 1px solid red; */
  /* background-color: pink; */
  width: 100%;
  height: 290px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 640px) {
    width: 100%;
  }
`;
const SiteDetails = styled.div`
  /* background-color: lavender; */
  width: 100%;
  text-align: left;
`;
const SiteDetail = styled.p`
  font-size: 0.85rem;
  color: var(--olive);
  font-weight: 800;
  letter-spacing: 0.03em;
  /* border-bottom: 1px solid var(--ltpink); */

  span {
    color: var(--blue);
    font-weight: 500;
    padding-bottom: 0em;
    margin-right: 0.25em;
  }

  @media only screen and (min-width: 640px) {
  }
  /* border-bottom: 2px solid yellow; */
`;
const SiteTitle = styled.div`
  font-size: 1.5rem;
  color: var(--olive);
  text-decoration: underline;
  text-decoration-color: var(--ltyellow);
  line-height: 1em;
  padding-top: 0.5em;

  @media only screen and (min-width: 640px) {
    text-decoration: none;
    padding-right: 20dvw;
    text-align: center;
    padding-top: 0.5em;
    /* line-height: 1.5em; */
  }
  /* border-bottom: 2px solid yellow; */
`;
const SiteDescription = styled.div`
  font-size: 1rem;
  color: var(--olive);
  text-align: center;
  padding-top: 0.5em;

  @media only screen and (min-width: 640px) {
    padding-right: 20dvw;
  }
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
  top: 50%;
  right: 0px;
  transform: translate(0%, -50%);
  height: auto;
  width: 20dvw;
  position: absolute;
  display: none;
  @media only screen and (min-width: 640px) {
    display: block;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  background: radial-gradient(white, rgba(255, 255, 255, 0.95));
  transition: 0.5s all ease;
  ${(props) => (props.clickedInto ? 'z-index: 50;' : 'z-index: -1;')}
  ${(props) => (props.showModal ? 'opacity: 1;' : 'opacity: 0;')}
`;

const ModalInner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  /* border: 1px solid red; */
  overflow-y: scroll;
  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

const CloseButton = styled.button`
  position: fixed;
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
  img {
    width: 40px;
    height: auto;
  }
`;

const ModalInfoContainer = styled.div`
  position: absolute;
  /* border: 1px solid blue; */
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
const ModalImagesContainer = styled.div`
  position: absolute;
  /* border: 1px solid blue; */
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

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;
ModalImage;
function Home() {
  const [clickedInto, setClickedInto] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('');
  const [selectedData, setSelectedData] = useState({});

  useEffect(() => {
    if (clickedInto) {
      const data = webWork.filter((site) => site.slug === selected)[0];
      setSelectedData(data);

      document.body.style.overflow = 'hidden';

      // console.log('data', data);
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    } else {
      document.body.style.overflow = 'auto';

      setTimeout(() => {
        setShowModal(false);
      }, 0);
    }
  }, [clickedInto]);
  console.log('selectedData', selectedData);
  console.log(typeof selectedData.images);
  console.log('selectedData.images', selectedData.images);

  console.log(typeof []);
  return (
    <>
      <Head>
        <title>Web - Carly Hayter</title>
      </Head>
      <PageLayout>
        <ProjectsOuterContainer>
          {webWork.map((site, index) => (
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
              <TextContainer>
                <SiteDetails>
                  <SiteDetail>
                    <span>CLIENT:</span>
                    {site.siteClient}
                  </SiteDetail>
                  <SiteDetail>
                    <span>YEAR:</span> {site.year ? site.year : '***'}
                  </SiteDetail>
                </SiteDetails>
                <SiteTitle className={'underlineTitle'}>
                  {site.projectName}
                </SiteTitle>
                <SiteDescription className={'underlineTitle'}>
                  {site.siteTitle}
                </SiteDescription>
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
              <img src={closeX.src} alt="close button" />
            </CloseContainer>
          </CloseButton>{' '}
          <ModalImagesContainer>
            {selectedData.images &&
              selectedData.images.map(
                (image) => (
                  <>
                    <ModalImage src={image.imgLoc} alt={image.imgAlt} />{' '}
                  </>
                ),
                // <ModalImage>{image}</ModalImage>
              )}
          </ModalImagesContainer>
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
