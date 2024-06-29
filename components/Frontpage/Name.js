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
  background-color: var(--blue-lt);
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

const Span = styled.span`
  width: ${(props) => `${props.dot.size}`};
  height: ${(props) => ` ${props.dot.size}`};
  border-radius: ${(props) => ` ${props.dot.size}`};
  backface-visibility: hidden;
  position: absolute;
  animation-name: move;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  filter: blur(100px);
  ${(props) => `color: ${props.dot.color};`}
  ${(props) => `background-color: ${props.dot.color};`}
    ${(props) => `left: ${props.dot.left};`}
    ${(props) => `top: ${props.dot.top};`}
    ${(props) => `transform-origin: ${props.dot.transformOrigin};`}
    ${(props) => `box-shadow: ${props.dot.boxShadow};`}
    ${(props) => `animation-duration: ${props.dot.animationDuration};`}

    @keyframes move {
    100% {
      transform: translate3d(0, 0, 1px) rotate(360deg);
    }
  }
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

const LaptopGif = styled.img`
  /* background-color: red; */
  position: absolute;
  top: -10%;
  right: 2%;
  width: 31%;
  height: auto;
  z-index: 2;
`;

const BlankScreen = styled.div`
  background-color: #c8c8c8;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 3;
  transition: 0.5s all ease;
  opacity: ${(props) => ` ${!props.showGif ? '1' : '.2'}`};
`;
function Name() {
  const [styles, setStyles] = useState([]);
  const [showGif, setShowGif] = useState(false);

  const numDots = 20;
  const animationDuration = '6s';
  const colors = ['#6F73D2', '#564E1F', '#EE4266', '#ffacac'];
  const particleSize = '20vmin';

  useEffect(() => {
    let newSpans = [];
    for (let index = 0; index < numDots; index++) {
      // const element = array[index];
      const x = Math.random() > 0.5 ? -1 : 1;

      let newDotData = {
        num: index,
        color: colors[Math.floor(Math.random() * 4)],
        size: `${Math.floor(Math.random() * 20)}dvw`,
        top: `${Math.floor(Math.random() * 100)}%`,
        left: `${Math.floor(Math.random() * 100)}%`,
        transformOrigin: `${Math.floor(Math.random() * 50)}vw ${Math.floor(
          Math.random() * 50,
        )}vh`,
        boxShadow: `${x * 200}px 0 20vmin currentColor`,
        animationDuration: `${Math.floor(Math.random() * 3) * 2}s`,
      };

      newSpans.push(newDotData);
    }
    setStyles(newSpans);
  }, []);

  return (
    <>
      <ImageContainer>
        <LaptopScreen
          style={{
            maskImage: `url(${laptopscreen.src})`,
          }}
        >
          <BlankScreen showGif={showGif} />
          <LaptopGif src={self.src} />
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
