const Home = () => {
  return (
    <>
      <div className="page-content">
        <div id="bio-container">
          <div id="bio-text-container">
            <p className="bio-text hello-text"> Hello! </p>
            <p className="bio-text">
              I am a designer and web developer based in Encinitas CA.
            </p>
            <p className="bio-text">I make efficient, beautiful websites.</p>
            <p className="bio-text">
              I am familiar with a variety of technologies, including React and
              Next.js.
            </p>
            <p className="bio-text">Check out my portfolio on my work page!</p>
          </div>
          <img id="self-img" src="./self-cropped3.jpg" />
        </div>
      </div>
    </>
  );
};
export default Home;
