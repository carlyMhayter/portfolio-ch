import Image from 'next/image';

function Home() {
  return (
    <div className="page-content page-content-about">
      <div id="bio-container">
        <div id="bio-text-container">
          <p id="bubble1" className="hello-text">
            Nice to meet you.
          </p>
          <p id="bubble2" className="bio-text">
            My name is Carly, and I love to build things.
          </p>

          <p id="bubble3" className="bio-text">
            I love to use React to create elegant solutions to todays demands of
            the web. The internet is such a big part of our lives, and I am
            fascinated by the way small changes in code can transform a users
            experience.
          </p>
          <p id="bubble4" className="bio-text">
            I have leveraged my training in molecular biology and scientific
            problem-solving and experimentation into a career in web
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
