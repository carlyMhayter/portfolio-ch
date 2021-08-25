const fineArtPics = [
  {
    imgLoc: "./color-leaves.png",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Untitled",
    imgDescription: "Watercolor. 2011",
  },
  {
    imgLoc: "./hazel-drawing.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Portrait of Friend",
    imgDescription: "Pen on paper. 2013",
  },
  {
    imgLoc: "./dylan-painting.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Dylan",
    imgDescription: "Acrylic on Board. 2014",
  },
  {
    imgLoc: "./kristian-painting.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Kristian",
    imgDescription: "Acrylic on Board. 2011",
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="gallery-container fineart-gallery-container">
          {fineArtPics.map((pic) => (
            <div key={pic.imgLoc} className="project-container fineart-styles">
              <div className="project-img-container">
                <img
                  className="project-img"
                  src={pic.imgLoc}
                  height={pic.imgHeight}
                  width={pic.imgWidth}
                />
              </div>
              <div className="project-text-container">
                <p className="project-title">{pic.imgTitle}</p>
                <p className="project-description">{pic.imgDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
