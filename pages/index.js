import React, { useEffect } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Name from '../components/Frontpage/Name';
import PageLayout from '../components/PageLayout';

const OuterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const InnerContainer = styled.div`
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  position: relative;
  margin: 0 auto;
  margin-top: 1rem;
  max-width: 1200px;
`;

export default function Home() {
  const BallOutmostContainer = styled.div`
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

  const BallContainer = styled.div`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    /* top: -10%; */
    top: 50%;

    height: calc(24px * 0.55);
    width: calc(24px * 0.55);
    @media only screen and (min-width: 480px) {
      height: calc(24px * 0.6);
      width: calc(24px * 0.6);
    }
    @media only screen and (min-width: 640px) {
      height: calc(24px * 0.65);
      width: calc(24px * 0.65);
    }
    @media only screen and (min-width: 768px) {
      height: calc(24px * 0.7);
      width: calc(24px * 0.7);
    }
    @media only screen and (min-width: 1024px) {
      height: calc(24px * 0.75);
      width: calc(24px * 0.75);
    }
    @media only screen and (min-width: 1280px) {
      height: calc(24px * 0.8);
      width: calc(24px * 0.8);
    }
    @media only screen and (min-width: 1536px) {
      height: calc(24px * 0.9);
      width: calc(24px * 0.9);
    }

    @media only screen and (min-width: 2000px) {
      height: 24px;
      width: 24px;
    }

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
  `;

  const spinArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const Ball = styled.div`
    background-color: var(--hotpink);
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    height: calc(24px * 0.55);
    width: calc(24px * 0.55);
    border-radius: calc(24px * 0.55);

    @media only screen and (min-width: 480px) {
      height: calc(24px * 0.6);
      width: calc(24px * 0.6);
      border-radius: calc(24px * 0.6);
    }
    @media only screen and (min-width: 640px) {
      height: calc(24px * 0.65);
      width: calc(24px * 0.65);
      border-radius: calc(24px * 0.65);
    }
    @media only screen and (min-width: 768px) {
      height: calc(24px * 0.7);
      width: calc(24px * 0.7);
      border-radius: calc(24px * 0.7);
    }
    @media only screen and (min-width: 1024px) {
      height: calc(24px * 0.75);
      width: calc(24px * 0.75);
      border-radius: calc(24px * 0.75);
    }
    @media only screen and (min-width: 1280px) {
      height: calc(24px * 0.8);
      width: calc(24px * 0.8);
      border-radius: calc(24px * 0.8);
    }
    @media only screen and (min-width: 1536px) {
      height: calc(24px * 0.9);
      width: calc(24px * 0.9);
      border-radius: calc(24px * 0.9);
    }

    @media only screen and (min-width: 2000px) {
      height: 24px;
      width: 24px;
      border-radius: 24px;
    }
  `;

  const Spinner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    transition: 0.5s all ease;
    opacity: 0;

    &.animated {
      animation: show 10s 0s infinite;

      @keyframes show {
        1% {
          opacity: 0;
        }
        29% {
          opacity: 0;
        }
        30% {
          opacity: 1;
        }
        35% {
          opacity: 0;
        }
        49% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        55% {
          opacity: 0;
        }
        69% {
          opacity: 0;
        }
        70% {
          opacity: 1;
        }

        75% {
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
    }
  `;
  const SpinLine = styled.div`
    display: block;
    position: absolute;
    transform-origin: center;
    top: -50%;
    left: 50%;
    width: 3px;
    /* height: 48px; */
    border-radius: 3px;

    ${(props) => `transform: rotate(${props.num * 30 - 30}deg);`}
    background-image: radial-gradient(circle at center,
      transparent 50%,

      var(--hotpink) 60%,
      var(--hotpink) 80%,

    transparent 85%
  );

    transition: 0.5s all ease;
    animation: shine 0.5s 0s infinite;

    height: calc(48px * 0.55);
    @keyframes shine {
      0% {
        height: calc(48px * 0.55);
      }
      50% {
        height: calc(120px * 0.55);
        top: -165%;
      }
      100% {
        height: calc(48px * 0.55);
      }
    }

    @media only screen and (min-width: 480px) {
      height: calc(48px * 0.6);
      @keyframes shine {
        0% {
          height: calc(48px * 0.6);
        }
        50% {
          height: calc(120px * 0.6);
          top: -165%;
        }
        100% {
          height: calc(48px * 0.6);
        }
      }
    }
    @media only screen and (min-width: 640px) {
      height: calc(48px * 0.65);
      @keyframes shine {
        0% {
          height: calc(48px * 0.65);
        }
        50% {
          height: calc(120px * 0.65);
          top: -175%;
        }
        100% {
          height: calc(48px * 0.65);
        }
      }
    }
    @media only screen and (min-width: 768px) {
      height: calc(48px * 0.7);
      @keyframes shine {
        0% {
          height: calc(48px * 0.7);
        }
        50% {
          height: calc(120px * 0.7);
          top: -185%;
        }
        100% {
          height: calc(48px * 0.7);
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      height: calc(48px * 0.75);
      @keyframes shine {
        0% {
          height: calc(48px * 0.75);
        }
        50% {
          height: calc(120px * 0.75);
          top: -195%;
        }
        100% {
          height: calc(48px * 0.75);
        }
      }
    }
    @media only screen and (min-width: 1280px) {
      height: calc(48px * 0.8);
      @keyframes shine {
        0% {
          height: calc(48px * 0.8);
        }
        50% {
          height: calc(120px * 0.8);
          top: -200%;
        }
        100% {
          height: calc(48px * 0.8);
        }
      }
    }
    @media only screen and (min-width: 1536px) {
      height: calc(48px * 0.9);
      @keyframes shine {
        0% {
          height: calc(48px * 0.9);
        }
        50% {
          height: calc(120px * 0.9);
          top: -200%;
        }
        100% {
          height: calc(48px * 0.9);
        }
      }
    }

    @media only screen and (min-width: 2000px) {
      height: 48px;
      @keyframes shine {
        0% {
          height: 48px;
        }
        50% {
          height: 120px;
          top: -200%;
        }
        100% {
          height: 48px;
        }
      }
    }
  `;

  useEffect(() => {
    // const ball = document.getElementById('ball');
    const nameImage = document.getElementById('NameImage');
    // const spinner = document.getElementById('spinner');

    // ball.classList.add('animated');
    nameImage.classList.add('animated');
    // spinner.classList.add('animated'); 4
  }, []);

  return (
    <>
      <Head>
        <title>Carly Hayter</title>
      </Head>
      <PageLayout fullHeight={true}>
        <Name />
      </PageLayout>
    </>
  );
}
