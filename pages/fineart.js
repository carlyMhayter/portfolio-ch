const fineArtPics = [
  {
    imgLoc: "./color-leaves.png",
    imgWidth: "450px",
    imgHeight: "600px",
    imgTitle: "Untitled",
    imgDescription: "Watercolor. 2011",
  },
  {
    imgLoc: "./hazel-drawing.jpg",
    imgWidth: "450px",
    imgHeight: "600px",
    imgTitle: "Portrait of Friend",
    imgDescription: "Pen on paper. 2013",
  },
  {
    imgLoc: "./dylan-painting.jpg",
    imgWidth: "450px",
    imgHeight: "600px",
    imgTitle: "Portrait",
    imgDescription:
      "This is a picture of me that my boyfriend took. He took it in Encinitas.",
  },
  {
    imgLoc: "./kristian-painting.jpg",
    imgWidth: "450px",
    imgHeight: "600px",
    imgTitle: "Portrait",
    imgDescription:
      "This is a picture of me that my boyfriend took. He took it in Encinitas.",
  },
  {
    imgLoc: "./self-cropped3.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Portrait",
    imgDescription:
      "This is a picture of me that my boyfriend took. He took it in Encinitas.",
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="gallery-container">
          {fineArtPics.map((pic) => (
            <div className="project-container">
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
