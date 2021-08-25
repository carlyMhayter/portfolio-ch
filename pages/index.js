import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="page-content">
        <div className="hero-content">
          <div id="hero-illustration">
            <Image src="/swiss-army.svg" layout="fill" alt="hero page text" />
          </div>
          <div id="hero-big-text">
            <Image
              src="/front-page-text-3line-70s.svg"
              layout="fill"
              alt="hero page smaller text"
            />
          </div>
          <div className="hero-med-text">
            <p>You might even say, a jack of all trades.</p>
          </div>
        </div>
      </div>

      <div className="content"></div>
    </>
  );
}
