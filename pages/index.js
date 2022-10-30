import Link from 'next/link';

export default function Home() {
  return (
    <div className="page-content">
      <div className="homepage-text-container">
        <h1 className="homepage-text-name">Carly Hayter</h1>
        <div className="hero-text-minor-container">
          <p className="hero-text-minor">Front End Engineer</p>
          <p className="hero-text-minor">React</p>
          <p className="hero-text-minor">Problem Solver</p>
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
