import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-content">
      <div className="homepage-text-container">
        <h1 className="homepage-text-name">Carly Hayter</h1>
        <div className="hero-text-minor-container">
          <p className="hero-text-minor">Front End Engineer</p>
          <p className="hero-text-minor">+</p>
          <p className="hero-text-minor">Problem Solver</p>
        </div>
        <div className="logo-container">
          <div className="logo-container-inner">
            <Image
              src="/Unofficial_JavaScript_logo_2.svg.png"
              alt="javascript logo"
              layout="fill"
            />
          </div>
          <div className="logo-container-inner">
            <Image
              src="/React-icon.svg.png"
              alt="javascript logo"
              layout="fill"
            />
          </div>
          <div className="logo-container-inner">
            <Image
              src="/Wordpress-Logo.svg"
              alt="wordpress logo"
              layout="fill"
            />
          </div>
        </div>
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
  );
}
