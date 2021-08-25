import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="page-content">
        <div className="hero-content">
          <Image id="hero-illustration" src="./swiss-army.svg" />
          <Image id="hero-big-text" src="./front-page-text-3line-70s.svg" />

          <div className="hero-med-text">
            <p>You might even say, a jack of all trades.</p>
          </div>
        </div>
      </div>

      <div className="content"></div>
    </>
  );
}
