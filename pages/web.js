import Head from 'next/head';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import arrow from '../public/arrow.svg';
import { webWork } from '../data/data';
import WebModal from '../components/WebModal';

const ProjectsOuterContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 7rem;
`;

const ProjectContainer = styled(Link)`
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
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  @media only screen and (min-width: 640px) {
    .underlineTitle {
      &:after {
        background: none repeat scroll 0 0 transparent;
        bottom: -3px;
        content: '';
        display: block;
        height: 3px;
        left: 50%;
        opacity: 0;
        border-radius: 2px;
        position: relative;
        background: linear-gradient(to right, white, var(--yellow), white);
        transition:
          width 0.3s ease 0s,
          left 0.3s ease 0s,
          opacity 0.2s ease;
        width: 0;
      }
    }

    &:hover {
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
    transform: translate(0rem, 0.25rem);
  }

  &:last-of-type {
    margin-bottom: 3rem;
  }

  @media only screen and (min-width: 640px) {
    flex-direction: row;
    &:hover {
      transform: translate(0.25rem, 0rem);
    }
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

  @media only screen and (min-width: 640px) {
    width: 30%;
  }
`;

const TextContainer = styled.div`
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
  width: 100%;
  text-align: left;
`;

const SiteDetail = styled.p`
  font-size: 0.85rem;
  color: var(--darkYellow);
  font-weight: 500;
  letter-spacing: 0.03em;

  span {
    color: var(--olive);
    font-weight: 500;
    padding-bottom: 0em;
    margin-right: 0.25em;
  }
`;

const SiteTitle = styled.div`
  font-size: 1.5rem;
  color: var(--olive);
  text-decoration: underline;
  text-decoration-color: var(--ltyellow);
  line-height: 1em;
  padding-top: 0.5em;
  text-align: center;

  @media only screen and (min-width: 640px) {
    text-decoration: none;
    padding-right: 20dvw;
    text-align: center;
    padding-top: 0.5em;
  }
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
  width: 100%;
  color: var(--darkYellow);
  padding-bottom: 1em;
`;

const ArrowContainer = styled.div`
  display: none;

  @media only screen and (min-width: 640px) {
    display: block;
    height: 100%;
    top: 50%;
    right: 2em;
    transform: translate(0%, -50%);
    height: auto;
    width: 20dvw;
    max-width: 300px;
    position: absolute;
  }
`;

function WebPage() {
  const router = useRouter();
  const selected = router.query.project || '';

  const selectedData = useMemo(
    () => webWork.find((site) => site.slug === selected) || {},
    [selected],
  );

  const isOpen = Boolean(selected);

  const handleClose = () => {
    router.push('/web', undefined, { shallow: true });
  };

  return (
    <>
      <Head>
        <title>Web - Carly Hayter</title>
      </Head>
      <PageLayout>
        <ProjectsOuterContainer>
          {webWork.map((site) => (
            <ProjectContainer
              key={site.slug}
              href={`/web?project=${site.slug}`}
              scroll={false}
              id={`slug-${site.slug}`}
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
                <SiteTitle className="underlineTitle">
                  {site.projectName}
                </SiteTitle>
                <SiteDescription className="underlineTitle">
                  {site.siteTitle}
                </SiteDescription>
                <SiteInfo></SiteInfo>
              </TextContainer>
              <ArrowContainer>
                <img src={arrow.src} alt="right pointing arrow" />
              </ArrowContainer>
            </ProjectContainer>
          ))}
        </ProjectsOuterContainer>
      </PageLayout>
      <WebModal
        selectedData={selectedData}
        open={isOpen}
        onClose={handleClose}
      />
    </>
  );
}

export default WebPage;
