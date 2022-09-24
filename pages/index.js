import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-content">
      <div className="homepage-center-column">
        <div className="homepage-text-container">
          <h1 className="homepage-text-name">Carly Hayter</h1>

          <div className="hero-text-minor-container">
            <p className="hero-text-minor">
              <i className="fa fa-check" aria-hidden="true" />
              Web Developer
            </p>
            <p className="hero-text-minor">
              <i className="fa fa-check" aria-hidden="true" />
              Designer
            </p>
            <p className="hero-text-minor">
              <i className="fa fa-check" aria-hidden="true" />
              Problem Solver
            </p>
          </div>
        </div>
        <div className="laptop-buttons-column">
          <div className="laptop-hand-svg">
            <Image
              src="/laptop-hand.svg"
              layout="fill"
              alt="drawing of hand drawing on a laptop"
            />
          </div>{' '}
          <div className="homepage-button-container">
            <Link href="/web">
              <a className="homepage-button button" href="./web">
                web design
              </a>
            </Link>
            <Link href="/fineart">
              <a className="homepage-button button">fine art</a>
            </Link>
          </div>{' '}
        </div>
      </div>
    </div>
  );
}
