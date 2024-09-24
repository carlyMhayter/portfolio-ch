import Head from 'next/head';
import PageLayout from '../components/PageLayout';
import styled from 'styled-components';
import copy from '../public/copy.svg';
import check from '../public/check.svg';
import exLink from '../public/exLink.svg';

import { useState } from 'react';
const ContactContainer = styled.div`
  /* border: 1px solid lime; */
  width: 100%;
  height: calc(100% - 150px);
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: start;
  justify-content: center;
  top: 150px;
  overflow-y: scroll;

  @media only screen and (min-width: 640px) {
    top: 0px;
    height: 100%;
    align-items: center;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  position: relative;
  /* overflow: hidden; */
  flex-direction: column;
  /* min-height: 700px; */
  height: fit-content;
  top: 150px;
  align-items: center;
  font-size: 1rem;
  @media only screen and (min-width: 640px) {
    top: auto;
  }

  a {
    border: 1px solid var(--ltyellow);
    /* background-color: var(--ltyellow); */
    background-color: whitesmoke;
    width: 300px;
    line-height: 1rem;
    padding: 0.5rem 0;
    padding-right: 2rem;

    text-align: center;
    margin-bottom: 0.5rem;
    border-radius: 5px;
    color: var(--olive);
    transition: 0.5s all ease;
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: white;
    }
  }
`;

const ContactText = styled.p`
  color: var(--blue);
  font-weight: 600;
  margin-bottom: 1rem;
`;
const CopyButton = styled.button`
  border: 1px solid var(--ltyellow);
  /* background-color: var(--ltyellow); */
  background-color: whitesmoke;
  font-size: 1rem;
  line-height: 1rem;
  width: 300px;
  padding: 0.5rem 0;
  text-align: center;
  margin-bottom: 0.5rem;
  padding-right: 2rem;
  border-radius: 5px;
  color: var(--olive);
  transition: 0.5s all ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: white;
  }
  * {
    transition: 0.5s all ease;
  }
  .hide {
    opacity: 0;
  }
  .show {
    opacity: 1;
  }
`;

const DoneIcon = styled.img`
  height: auto;
  width: 20px;
  position: absolute;
  right: 1rem;
  margin-left: 0.5rem;
`;

const CopyIcon = styled.img`
  height: auto;
  width: 20px;
  position: absolute;
  right: 1rem;
  margin-left: 0.5rem;
`;

function Home() {
  const [copied, setCopied] = useState(false);

  return (
    <>
      <Head>
        <title>Contact - Carly Hayter</title>
      </Head>
      <PageLayout fullHeight>
        <ContactContainer>
          <InnerContainer>
            <ContactText>Contact me at:</ContactText>
            <CopyButton
              id="carly-email"
              onClick={() => {
                setCopied(true);
                navigator.clipboard.writeText('carlyhayter@gmail.com');
              }}
            >
              carlyhayter@gmail.com{' '}
              <CopyIcon
                src={copy.src}
                className={`${copied ? `hide` : `show`}`}
              />
              <DoneIcon
                src={check.src}
                className={`${copied ? `show` : `hide`}`}
              />
            </CopyButton>
            <a
              href="https://www.linkedin.com/in/carly-hayter-ab1a8853/"
              target="_blank"
            >
              LinkedIn
              <DoneIcon src={exLink.src} />
            </a>
          </InnerContainer>
        </ContactContainer>
      </PageLayout>
    </>
  );
}

export default Home;
