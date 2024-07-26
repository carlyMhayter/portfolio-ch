import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import Head from 'next/head';
import FloatingMenu from '../components/FloatingMenu';
import styled from 'styled-components';
import Name from '../components/Frontpage/Name';
const OuterContainer = styled.div`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  position: absolute;
  /* border: 1px solid grey; */
`;

const InnerContainer = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  /* background-color: blue; */
  max-width: 1200px;
  /* border: 1px solid grey; */
`;

export default function Home() {
  const linkArray = [
    { name: 'Home', href: '' },
    { name: 'About Me', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: 'https://carllitabobita.com/' },
  ];

  const BallContainer = styled.div`
    position: absolute;
    /* background-color: pink; */
    width: 100dvw;
    height: 100dvh;
    z-index: 39;
    overflow: hidden;
  `;
  const BallInnerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
  `;

  const Ball = styled.div`
    background-color: var(--hotpink);
    height: 24px;
    width: 24px;
    border-radius: 24px;
    /* transform: translate(-50%, -50%);
    left: 50%;
    top: -10%; */
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: -10%;

    &.animated {
      animation: move 10s 0s infinite;

      @keyframes move {
        1% {
          top: -10%;
        }
        10% {
        }
        30% {
          top: 50%;
        }
        40% {
          top: 40%;
        }
        50% {
          top: 50%;
        }
        60% {
          top: 33%;
        }
        70% {
          top: 50%;
        }

        90% {
          top: -10%;
        }
        100% {
          top: -10%;
        }
      }
    }

    /* mobile styling */
  `;

  useEffect(() => {
    const ball = document.getElementById('ball');
    const screen = document.getElementById('screen');
    ball.classList.add('animated');
    screen.classList.add('animated');
  }, []);

  return (
    <>
      <Head>
        <title>Carly Hayter</title>
      </Head>
      <OuterContainer>
        <InnerContainer>
          <FloatingMenu links={linkArray} />
          <Name />
        </InnerContainer>
      </OuterContainer>
      <BallContainer>
        <BallInnerContainer>
          <Ball id="ball" className="animation" />
        </BallInnerContainer>
      </BallContainer>
    </>
  );
}
