import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import mask from '../../public/carlyMaskInverse.svg';
import laptop from '../../public/laptop.svg';
import laptopscreen from '../../public/laptopscreen.svg';
import image from '../../public/carrlyname.jpg';
import self from '../../public/videos/selfVid3.gif';
import { Laptop } from '@mui/icons-material';

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: fit-content;
  /* border: 1px solid red; */
  overflow: hidden;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
  /* background-color: var(--blue-lt); */
`;

const BokehContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
  background-color: var(--blue);
`;

const ImageThing = styled.img`
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
`;
const LaptopThing = styled.img`
  width: 100%;
  height: auto;
  display: block;
  opacity: 1;
  position: absolute;
`;

const LaptopScreen = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
`;

const BlankScreen = styled.div`
  /* background-color: #c8c8c8; */
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  background: var(--beige);
  animation: color 10s infinite;

  @keyframes color {
    1% {
      opacity: 1;
    }
    10% {
      opacity: 1;
    }
    20% {
      opacity: 1;
    }
    30% {
      opacity: 1;
    }
    40% {
      opacity: 1;
    }
    50% {
      opacity: 1;
    }
    65% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    80% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`;

const ColorScreen = styled.div`
  /* background-color: #c8c8c8; */
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
  background: var(--olive);
`;

function Name() {
  return (
    <>
      <ImageContainer>
        {/* <BallContainer>
          <Ball />
        </BallContainer> */}
        <LaptopScreen
          style={{
            maskImage: `url(${laptopscreen.src})`,
          }}
        >
            <BlankScreen />
            <ColorScreen />
        </LaptopScreen>
        <LaptopThing src={laptop.src} />
        <BokehContainer style={{ maskImage: `url(${mask.src})` }} />
        <ImageThing src={image.src} />
      </ImageContainer>
    </>
  );
}

export default Name;
