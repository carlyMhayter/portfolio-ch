import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
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

    31% {
      background-color: var(--pinkBrown);
    }

    51% {
      background-color: var(--yellow);
    }

    71% {
      background-color: var(--green);
    }

    100% {
      background-color: var(--blue);
    }
  }
`;

const VisuallyHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

function Name() {
  const nameImageRef = useRef(null);

  useEffect(() => {
    nameImageRef.current.classList.add('animated');
  }, []);

  return (
    <ImageContainer>
      <VisuallyHidden>Carly Hayter</VisuallyHidden>
      <NameImage
        id="NameImage"
        ref={nameImageRef}
        style={{ maskImage: `url(${mask.src})` }}
        aria-hidden="true"
      />
      <Image
        src={image}
        alt=""
        width={1190}
        height={815}
        style={{ width: '100%', height: 'auto', display: 'block', opacity: 0 }}
        priority
      />
    </ImageContainer>
  );
}

export default Name;
