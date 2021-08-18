import { useRouter } from "next/router";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="work-container">
          <div className="fineart-container">
            <Link href="./fineart">
              <a>
                <div className="fineart-text">FINE ART</div>
                <div className="fineart-img">
                  <img src="./brush-drawing1.svg" className="fineart-logo" />
                </div>
              </a>
            </Link>
          </div>
          <div className="web-container">
            <Link href="./web">
              <a>
                <div className="web-img">
                  <img src="./laptop-drawing-lines.svg" className="web-logo" />
                </div>
                <div className="web-text">WEB</div>
              </a>
            </Link>
          </div>
        </div>
      </div>{" "}
    </>
  );
};
export default Home;
