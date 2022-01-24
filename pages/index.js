import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="page-content page-content-hero">
        <div className="hero-content">
          <div className="laptop-hero">
            <Image
              src="/laptop-drawing-lines-2.svg"
              alt="hand drawn laptop hero"
              layout="fill"
            />
          </div>
          <div className="name-illustration-container">
            <Image
              src="/name-pixels.svg"
              layout="fill"
              alt="pixelated carly hayter"
            />
          </div>
          <div className="hero-text-1">
            <p className="hero-text-2 hero-text-1-inner">
              <i className="fa fa-check" aria-hidden="true" />
              Web Developer
            </p>
            <p className="hero-text-3  hero-text-1-inner">
              <i className="fa fa-check" aria-hidden="true" />
              Designer
            </p>
            <p className="hero-text-4 hero-text-1-inner">
              <i className="fa fa-check" aria-hidden="true" />
              Problem Solver
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
            <Link href="/resume">
              <a className="button hero-button" id="hero-button-1" href="./">
                resume{' '}
              </a>
            </Link>
            <Link href="/web">
              <a className="button hero-button" id="hero-button-2" href="./web">
                web
              </a>
            </Link>
            <Link href="/fineart">
              <a className="button hero-button" id="hero-button-3">
                fine art
              </a>
            </Link>
          </div>
        </div>
      </div>

      <div className="content" />
    </>
  );
}
