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

  &.animated {
    animation: color 10s 0s infinite;
    @keyframes color {
      0% {
        background-color: white;
      }
      /* 9% {
        background-color: white;
      }
      10% {
        background-color: red;
      }
      19% {
        background-color: red;
      }

      20% {
        background-color: orange;
      } */
      29% {
        background-color: white;
      }
      30% {
        background-color: yellow;
      }
      /* 39% {
        background-color: yellow;
      }
      40% {
        background-color: green;
      } */
      49% {
        background-color: yellow;
      }
      50% {
        background-color: blue;
      }
      /* 59% {
        background-color: blue;
      }
      60% {
        background-color: purple;
      } */
      69% {
        background-color: blue;
      }
      70% {
        background-color: pink;
      }
      /* 79% {
        background-color: pink;
      } */
      /* 80% {
        background-color: lime;
      }
      89% {
        background-color: lime;
      }
      90% {
        background-color: aliceblue;
      } */

      /* 99% {
        background-color: aliceblue;
      } */
      100% {
        background-color: white;
      }
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
            <BlankScreen id="screen" />
        </LaptopScreen>
        <LaptopThing src={laptop.src} />
        <BokehContainer style={{ maskImage: `url(${mask.src})` }} />
        <ImageThing src={image.src} />
      </ImageContainer>
    </>
  );
}

export default Name;
