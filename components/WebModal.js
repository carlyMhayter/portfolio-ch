import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import {
  Dialog,
  DialogHeading,
  DialogDescription,
  DialogDismiss,
} from '@ariakit/react';
import closeX from '../public/x.svg';
import ts from '../public/icons/ts.png';
import nextjs from '../public/icons/nextjs-icon.svg';
import vercel from '../public/icons/vercel.svg';
import gatsby from '../public/icons/Gatsby_Monogram.png';
import redux from '../public/icons/redux.png';
import netlify from '../public/icons/netlify.png';
import wordpress from '../public/icons/Wordpress-Logo.svg';
import stripe from '../public/icons/stripe.svg';
import auth0 from '../public/icons/auth0.svg';
import react from '../public/icons/React-icon.svg.png';
import strapi from '../public/icons/strapi.png';
import figma from '../public/icons/figma.png';

const StyledDialog = styled(Dialog)`
  position: fixed;
  inset: 0;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
  background: radial-gradient(white, rgba(255, 255, 255, 0.95));
  z-index: 50;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  display: flex;
  flex-direction: column;
`;

const ModalInner = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: auto;

  @media only screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

const CloseButton = styled(DialogDismiss)`
  position: fixed;
  top: 1rem;
  right: 1rem;
  border: 0;
  height: 50px;
  width: 50px;
  z-index: 51;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40px;
    height: auto;
  }
`;

const ModalInfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
  padding: 1rem;

  @media only screen and (min-width: 640px) {
    width: calc(100% - 2rem);
    padding: 2rem;
  }
`;

const ModalImagesContainer = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
  padding: 1rem;

  @media only screen and (min-width: 640px) {
    width: calc(100% - 2rem);
    height: calc(100% - 2rem);
    padding: 2rem;
  }
`;

const ModalTitle = styled(DialogHeading)`
  font-size: 1.5rem;
  color: var(--olive);
  text-decoration: underline;
  text-decoration-color: var(--ltyellow);
  line-height: 1em;
  padding-top: 0.5em;
  text-align: center;
  width: 90dvw;
  position: relative;
  background-image: radial-gradient(white, rgba(255, 255, 255, 0.8));
  top: 1em;
  right: 0.5em;
  margin: 0;

  @media only screen and (min-width: 640px) {
    text-align: left;
    width: auto;
  }
`;

const ModalDescription = styled(DialogDescription)`
  font-size: 1rem;
  color: var(--olive);
  text-align: center;
  padding-top: 0.5em;
  padding-bottom: 0.5rem;
  margin: 0;

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

const SiteTech = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 0.5rem;
  padding-top: 2rem;

  @media only screen and (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
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

const ModalBullets = styled.ul`
  list-style-type: disc;
`;

const ModalBullet = styled.li`
  color: gray;
  padding-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

function WebModal({ selectedData, open, onClose }) {
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
    figma: figma.src,
  };

  const titleRef = useRef(null);

  useEffect(() => {
    if (open && titleRef.current) {
      titleRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [open]);

  return (
    <StyledDialog open={open} onClose={onClose}>
      <ModalInner>
        <CloseButton aria-label="Close project details">
          <Image
            src={closeX}
            alt=""
            width={40}
            height={40}
            style={{ width: '40px', height: 'auto' }}
          />
        </CloseButton>

        <ModalImagesContainer>
          {selectedData.images?.map((image, idx) => (
            <Image
              key={`${selectedData.slug}-img-${idx}`}
              src={image.imgLoc}
              alt={image.imgAlt}
              width={image.width || 1200}
              height={image.height || 700}
              style={{
                width: '100%',
                height: 'auto',
                paddingBottom: '0.5rem',
              }}
              sizes="(max-width: 640px) 90vw, 40vw"
            />
          ))}
        </ModalImagesContainer>

        <ModalInfoContainer>
          <div ref={titleRef}>
            <ModalTitle>{selectedData.projectName}</ModalTitle>
            <ModalDescription>{selectedData.siteTitle}</ModalDescription>
          </div>

          <SiteTech>
            {selectedData.keyTech?.map((item) => (
              <SiteTechItem key={`${selectedData.slug}-tech-${item}`}>
                <Image
                  alt=""
                  src={icons[item]}
                  width={20}
                  height={20}
                  style={{
                    marginBottom: '6px',
                    marginLeft: '4px',
                    width: '20px',
                    height: 'auto',
                  }}
                />
                <p>{item}</p>
              </SiteTechItem>
            ))}
          </SiteTech>

          <SiteInfo>{selectedData.siteDescription}</SiteInfo>

          <ModalBullets>
            {selectedData.bullets?.map((bullet, idx) => (
              <ModalBullet key={`${selectedData.slug}-bullet-${idx}`}>
                {bullet}
              </ModalBullet>
            ))}
          </ModalBullets>
        </ModalInfoContainer>
      </ModalInner>
    </StyledDialog>
  );
}

export default WebModal;
