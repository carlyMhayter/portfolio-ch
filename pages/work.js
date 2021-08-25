import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="work-container">
          <div className="fineart-container container-tags">
            <Link href="./fineart">
              <a>
                <div className="fineart-text tag-text">FINE ART</div>
                <div className="fineart-img">
                  <Image
                    src="./brush-drawing2.svg"
                    className="fineart-logo brush-top"
                    alt="hand drawn paint brush drawing"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="web-container container-tags">
            <Link href="./web">
              <a>
                <div className="web-img">
                  <Image
                    src="./laptop-drawing-lines-1.svg"
                    className="web-logo"
                    alt="hand drawn laptop"
                  />
                </div>
                <div className="web-text tag-text">WEB</div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
