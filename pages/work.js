import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div className="page-content">
      <div className="work-container">
        <div className="fineart-container container-tags">
          <Link href="./fineart">
            <a>
              <div className="fineart-text tag-text">Fine Art</div>
              <div className="fineart-logo brush-top">
                <Image
                  src="/brush-drawing2.svg"
                  alt="hand drawn paint brush drawing"
                  layout="fill"
                />
              </div>
            </a>
          </Link>
        </div>

        <div className="web-container container-tags">
          <Link href="./web">
            <a>
              <div className="web-text tag-text">Web</div>
              <div className="web-logo">
                <Image
                  src="/laptop-drawing-lines-1.svg"
                  alt="hand drawn laptop"
                  layout="fill"
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
