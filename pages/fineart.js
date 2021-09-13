import Image from "next/image";

const fineArtPics = [
  {
    imgLoc: "/color-leaves.png",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Untitled",
    imgDescription: "Watercolor. 2011",
    altText: "rainbow watercolor leaves",
  },
  {
    imgLoc: "/hazel-drawing.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Pen Portrait",
    imgDescription: "Pen on paper. 2013",
    altText: "pen portrait drawing of friend",
  },
  {
    imgLoc: "/dylan-painting.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Dylan",
    imgDescription: "Acrylic on Board. 2014",
    altText: "portrait painting on board",
  },
  {
    imgLoc: "/kristian-painting.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Kristian",
    imgDescription: "Acrylic on Board. 2011",
    altText: "portrait painting on board of man",
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="gallery-container fineart-gallery-container">
          {fineArtPics.map((pic) => (
            <div key={pic.imgLoc} className="project-container fineart-styles">
              <div
                style={{ height: pic.imgHeight, width: pic.imgWidth }}
                className="project-img-container"
              >
                <Image
                  alt={pic.altText}
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
