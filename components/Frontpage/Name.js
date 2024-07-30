import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mask from '../../public/name2.svg';
import image from '../../public/carrlyname.jpg';

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: fit-content;
  overflow: hidden;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
  max-width: 1000px;
`;

const NameImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mask-size: cover;
  mask-repeat: no-repeat;
  mask-position: center center;
  background-color: var(--blue);
  opacity: 1;
  background-position: center center;
  background-size: cover;
  animation: color 10s 0s infinite;

  @keyframes color {
    1% {
      background-color: var(--blue);
    }
    30% {
      background-color: var(--blue);
    }
    31% {
      background-color: var(--pinkBrown);
    }
    35% {
      background-color: var(--pinkBrown);
    }
    50% {
      background-color: var(--pinkBrown);
    }
    51% {
      background-color: var(--yellow);
    }
    55% {
      background-color: var(--yellow);
    }
    70% {
      background-color: var(--yellow);
    }
    71% {
      background-color: var(--green);
    }
    75% {
      background-color: var(--blue);
    }
    100% {
      background-color: var(--blue);
    }
  }
`;

const ImageThing = styled.img`
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
`;

function Name() {
  return (
    <>
      <ImageContainer>
        <NameImage id="NameImage" style={{ maskImage: `url(${mask.src})` }} />
        <ImageThing src={image.src} />
      </ImageContainer>
    </>
  );
}

export default Name;
