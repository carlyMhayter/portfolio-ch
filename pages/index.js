import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="page-content">
        <div className="hero-content">
          <div className="laptop-hero">
            <Image
              src="/laptop-drawing-lines-2.svg"
              alt="hand drawn laptop hero"
              layout="fill"
            />
          </div>
          <div class="name-illustration-container">
            <Image src="/name-pixels.svg" layout="fill" />
          </div>
          <div className="name-container">
            <p id="first-name" className="hero-my-name">
              Carly
            </p>
            <p id="last-name" className="hero-my-name">
              Hayter
            </p>
          </div>
          <div className="hero-text-1">
            <p className="hero-text-2 hero-text-1-inner">
              <i className="fa fa-check" aria-hidden="true"></i>
              Web Developer
            </p>
            <p className="hero-text-3  hero-text-1-inner">
              <i className="fa fa-check" aria-hidden="true"></i>Designer
            </p>
            <p className="hero-text-4 hero-text-1-inner">
              <i className="fa fa-check" aria-hidden="true"></i>Problem Solver
            </p>
          </div>
          <div className="hand-drawing">
            <Image
              src="/hand.svg"
              layout="fill"
              alt="hand drawing"
              className="actual-hand-img"
            />
          </div>
          <div className="hero-button-container">
            <button className="button hero-button" id="hero-button-1">
              resume
            </button>
            <button className="button hero-button" id="hero-button-2">
              web
            </button>
            <button className="button hero-button" id="hero-button-3">
              fine art
            </button>
          </div>
          {/* <div className="dot2"></div> */}
          {/* <div className="dot"></div> */}
        </div>
      </div>

      <div className="content"></div>
    </>
  );
}
