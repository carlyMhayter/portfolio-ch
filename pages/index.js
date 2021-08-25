import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="page-content">
        <div className="hero-content">
          <img id="hero-illustration" src="./swiss-army.svg" />
          <img id="hero-big-text" src="./front-page-text-3line-70s.svg" />
          {/* <img id="hero-big-text2" src="./front-page-text-3line-70s.svg" />
          <img id="hero-big-text3" src="./front-page-text-3line-rainbow.svg" /> */}

          <div className="hero-med-text">
            <p>You might even say, a jack of all trades.</p>
          </div>
        </div>
      </div>

      <div className="content"></div>
    </>
  );
}
