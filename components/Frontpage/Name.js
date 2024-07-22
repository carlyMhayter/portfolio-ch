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
  /* border: 1px solid red; */
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
  /* background-color: red; */
  position: absolute;
  mask-size: contain;
  mask-repeat: no-repeat;
  mask-position: center center;
`;

const BlankScreen = styled.div`
  background-color: #c8c8c8;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  transition: 0.5s all ease;
  /* background: linear-gradient(
    124deg,
    #ff2400,
    #e81d1d,
    #e8b71d,
    #e3e81d,
    #1de840,
    #1ddde8,
    #2b1de8,
    #dd00f3,
    #dd00f3
  );
  background-size: 1800% 1800%;
  -webkit-animation: rainbow 18s ease infinite;
  -z-animation: rainbow 18s ease infinite;
  -o-animation: rainbow 18s ease infinite;
  animation: rainbow 18s ease infinite; */

  /* background: linear-gradient(
    124deg,
    #564e1f,
    #e4e6c3,
    #acb2f9,
    #6f73d2,
    #ee4266,
    #f7f7f2
  ); */

  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);

  background-size: 200% 200%;
  -webkit-animation: rainbow 10s ease infinite;

  animation: rainbow 10s ease infinite;

  @-webkit-keyframes rainbow {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 100%;
    }
  }
`;

const Ball = styled.div`
  background-color: red;
  height: 24px;
  width: 24px;
`;
function Name() {
  return (
    <>
      <ImageContainer>
        <LaptopScreen
          style={{
            maskImage: `url(${laptopscreen.src})`,
          }}
        >
            <BlankScreen />
        </LaptopScreen>
        <LaptopThing src={laptop.src} />
        <BokehContainer style={{ maskImage: `url(${mask.src})` }}>
          {/* {' '}
          {styles.length !== 0 &&
            styles.map((dot) => (
              <>
                <Span dot={dot} />
              </>
            ))} */}
        </BokehContainer>
        <ImageThing src={image.src} />
      </ImageContainer>
      {/* <MaskDiv  />
      <Background>
  
      </Background> */}
    </>
  );
}

export default Name;
