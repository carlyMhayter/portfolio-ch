import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="page-content">
        <div className="hero-content">
          <p id="first-name" className="hero-my-name">
            Carly
          </p>
          <p id="last-name" className="hero-my-name">
            Hayter
          </p>

          <div className="hero-text-1">
            <p>
              <i className="fa fa-check-square-o" aria-hidden="true"></i>
              performant web design
            </p>
            <p>
              <i className="fa fa-check-square-o" aria-hidden="true"></i>clean
              graphic design
            </p>
            <p>
              <i className="fa fa-check-square-o" aria-hidden="true"></i>modern
              ui/ux
            </p>
          </div>
          <div id="hero-illustration">
            <Image
              src="/swiss-army-color.svg"
              layout="fill"
              alt="hero page text"
            />
          </div>

          <div className="hand-drawing">
            <Image
              src="/hand.svg"
              layout="fill"
              alt="hand drawing"
              className="actual-hand-img"
            />
          </div>
          {/* <div className="hero-med-text">
            <p>Web development that is sharp, fresh, and clean</p>
          </div> */}
          <div className="hero-button-container">
            <button className="button hero-button"> resume </button>
            <button className="button hero-button"> web </button>
            <button className="button hero-button"> fine art </button>
          </div>
          {/* <div className="smoke-drawing">
            {" "}
            <Image src="/smoke.svg" alt="smoke svg" layout="fill" />
          </div> */}
        </div>
      </div>

      <div className="content"></div>
    </>
  );
}
