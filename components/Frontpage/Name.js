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
const gif1 =
  'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGgxeGJ2MGY2aW4waHV4MGd2M2F0eWV2cnFvN20zMnlycTRwcDUwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nmke0CSrymd9e/giphy.webp';
const gif2 =
  'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGRiZm9kY3B0djV6N2JrZW9hMzF0a2tsbTE1ZGE2MzR0YThvczNnZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jS2YNIz8bPi2kaaV1E/giphy.webp';
const gif3 =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHNoOXhuY3VqcG95a2d1NXAwdjdodjhna2RjODJvZ2c4b3JsNGZ6YSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TxVVB6PfWMjE4/giphy.webp';

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
  /* background-image: url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGgxeGJ2MGY2aW4waHV4MGd2M2F0eWV2cnFvN20zMnlycTRwcDUwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/nmke0CSrymd9e/giphy.webp'); */
  background-position: top right;
  background-size: 600px 600px;
  background-color: white;

  &.animated {
    animation: color 10s 0s infinite;
    @keyframes color {
      0% {
      }
      29% {
        background-image: none;
      }
      30% {
        /* background-color: yellow; */
        background-image: url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHBvZTlycjEzajEwM3RiYXp0a3F4azQyNWJldG9qYjd4bWF3NXM3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6EhOYMhOTANYgHMk/giphy.webp');
      }

      49% {
        /* background-color: yellow; */
        background-image: url('https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHBvZTlycjEzajEwM3RiYXp0a3F4azQyNWJldG9qYjd4bWF3NXM3NyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6EhOYMhOTANYgHMk/giphy.webp');
      }
      50% {
        /* background-color: blue; */
        background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmduYzdud3JhOTg3eWZ5dXl4d2l2M3pycjY4NWJ6eWs2cGJyYXNqMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F6X3Dtcump4Yg/giphy.webp');
      }

      69% {
        /* background-color: blue; */
        background-image: url('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmduYzdud3JhOTg3eWZ5dXl4d2l2M3pycjY4NWJ6eWs2cGJyYXNqMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/F6X3Dtcump4Yg/giphy.webp');
      }
      70% {
        /* background-color: pink; */
        background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmVtdm40aDJrZjBvOWx2ZWw1bHBvNHN1ZDI5ZGxxcXdkNGh2eGhwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT4uQhMsTra3MOR7fa/giphy.webp');
      }
      99% {
        background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmVtdm40aDJrZjBvOWx2ZWw1bHBvNHN1ZDI5ZGxxcXdkNGh2eGhwdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT4uQhMsTra3MOR7fa/giphy.webp');
      }

      100% {
        background-image: none;
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
          <BlankScreen id="screen" gif1={gif1} gif2={gif2} gif3={gif3} />
        </LaptopScreen>
        <LaptopThing src={laptop.src} />
        <BokehContainer style={{ maskImage: `url(${mask.src})` }} />
        <ImageThing src={image.src} />
      </ImageContainer>
    </>
  );
}

export default Name;
