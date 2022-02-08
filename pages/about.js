import Image from 'next/image';

function Home() {
  return (
    <div className="page-content page-content-about">
      <div id="bio-container">
        <div id="bio-text-container">
          <p id="bubble1" className="bio-text hello-text">
            Hello!
          </p>
          <p className="question-bio-text">WHO AM I:</p>
          <p id="bubble2" className="bio-text">
            I am a designer and web developer based in Encinitas CA.
          </p>
          <p className="question-bio-text">WHAT DO I DO?:</p>

          <p id="bubble3" className="bio-text">
            I love to make React applications and solve challenging problems.
          </p>
          <p className="question-bio-text">HOW DID I GET HERE?:</p>
          <p id="bubble4" className="bio-text">
            I got a BS in Molecular Biology, but have expanded my love of
            scientific problem-solving and experimentation into a career in web
            development.
          </p>
        </div>
        <div id="self-img">
          <Image
            src="/self-cropped-hat-small.jpg"
            alt="self portrait of the designer"
            layout="fill"
          />
        </div>
        <div id="palm-tree">
          <Image
            src="/palm-tree-color.svg"
            alt="hand drawn design of palm tree"
            layout="fill"
          />
        </div>

        <div className="blocking" />
      </div>
    </div>
  );
}
export default Home;
