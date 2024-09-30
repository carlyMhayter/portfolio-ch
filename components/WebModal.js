import React from 'react';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import PageLayout from '../components/PageLayout';
import Image from 'next/image';
import styled from 'styled-components';
import arrow from '../public/arrow.svg';
import closeX from '../public/x.svg';
import { webWork } from '../data/data';
import react from '../public/icons/React-icon.svg.png';
import vercel from '../public/icons/vercel.svg';
import wordpress from '../public/icons/Wordpress-Logo.svg';
import gatsby from '../public/icons/Gatsby_Monogram.png';
import ts from '../public/icons/ts.png';
import auth0 from '../public/icons/auth0.svg';
import nextjs from '../public/icons/nextjs-icon.svg';
import netlify from '../public/icons/netlify.png';
import strapi from '../public/icons/strapi.png';
import stripe from '../public/icons/stripe.svg';
import redux from '../public/icons/redux.png';

const ModalTitle = styled.div`
  font-size: 1.5rem;
  color: var(--olive);
  text-decoration: underline;
  text-decoration-color: var(--yellow);
  line-height: 1em;
  padding-top: 0.5em;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: var(--ltyellow);
  width: 90dvw;
  position: relative;
  background-image: radial-gradient(white, rgba(255, 255, 255, 0.8));
  top: 1em;
  right: 0.5em;

  @media only screen and (min-width: 640px) {
    text-align: left;
    /* width: 40dvw; */
    width: auto;
    /* padding-top: 0.5em;
    width: 40dvw;
    right: 2em; */
    /* position: fixed; */

    /* line-height: 1.5em; */
  }
  /* border-bottom: 2px solid yellow; */
`;

const ModalDescription = styled.div`
  font-size: 1rem;
  color: var(--olive);
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5rem;

  @media only screen and (min-width: 640px) {
    padding-right: 20dvw;
    padding-bottom: 1rem;
    text-align: left;
  }
`;

const SiteInfo = styled.div`
  width: 100%;
  color: var(--darkYellow);
  padding-bottom: 1em;
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
  width: calc(100%);
  height: fit-content;
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
  padding: 1rem;

  @media only screen and (min-width: 640px) {
    width: calc(100% - 2rem);
    /* height: calc(100% - 2rem); */
    padding: 2rem;
  }
`;
const ModalImagesContainer = styled.div`
  position: absolute;
  width: calc(100%);
  height: fit-content;
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
  padding: 1rem;

  * {
    padding-bottom: 0.5rem;
  }

  @media only screen and (min-width: 640px) {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    padding: 2rem;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: auto;
`;

const SiteTech = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 0.5rem;
  padding-top: 2rem;
  @media only screen and (min-width: 480px) {
  }
  @media only screen and (min-width: 640px) {
    /* padding-top: 6rem; */
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (min-width: 1280px) {
  }
  @media only screen and (min-width: 1536px) {
  }

  @media only screen and (min-width: 2000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const SiteTechItem = styled.div`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: start;
  line-height: 20px;
  margin-bottom: 6px;
  color: var(--olive);
  text-transform: uppercase;
  font-size: 0.75em;
  font-weight: 400;
  letter-spacing: 1px;
  p {
    margin-bottom: 6px;
    margin-left: 4px;
  }
`;
const SiteTechIcon = styled.img`
  height: 20px;
  width: 20px;
`;

const ModalBullets = styled.ul`
  list-style-type: disc;
`;

const ModalBullet = styled.li`
  color: gray;
  padding-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

function WebModal({
  selectedData,
  clickedInto,
  setClickedInto,
  setSelected,
  showModal,
}) {
  const icons = {
    typescript: ts.src,
    nextjs: nextjs.src,
    vercel: vercel.src,
    gatsby: gatsby.src,
    redux: redux.src,
    netlify: netlify.src,
    wordpress: wordpress.src,
    stripe: stripe.src,
    auth0: auth0.src,
    react: react.src,
    strapi: strapi.src,
  };
  return (
    <ModalContainer clickedInto={clickedInto} showModal={showModal}>
      <ModalInner id="modal-inner">
        <CloseButton
          onClick={() => {
            setClickedInto(false);
            setSelected('');
          }}
        >
          <CloseContainer>
            <img src={closeX.src} alt="close button" />
          </CloseContainer>
        </CloseButton>
        <ModalImagesContainer>
          {selectedData.images &&
            selectedData.images.map((image) => (
              <>
                <ModalImage src={image.imgLoc} alt={image.imgAlt} />{' '}
              </>
            ))}
        </ModalImagesContainer>
        <ModalInfoContainer>
          <ModalTitle id="modal-title">
            {selectedData.projectName}{' '}
            <ModalDescription>{selectedData.siteTitle}</ModalDescription>
          </ModalTitle>
          <SiteTech>
            {selectedData.keyTech &&
              selectedData.keyTech.length !== 0 &&
              selectedData.keyTech.map((item) => (
                <SiteTechItem>
                  <SiteTechIcon alt="icon" src={icons[`${item}`]} />
                  <p>{item}</p>
                </SiteTechItem>
              ))}
          </SiteTech>
          <SiteInfo>{selectedData.siteDescription}</SiteInfo>
          <ModalBullets>
            {selectedData.bullets &&
              selectedData.bullets.map((bullet) => (
                <ModalBullet>{bullet}</ModalBullet>
              ))}
          </ModalBullets>
        </ModalInfoContainer>
      </ModalInner>
    </ModalContainer>
  );
}

export default WebModal;
