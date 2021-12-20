import Image from "next/image";
const classString = "project-img-container fineart-img-container";

const fineArtPics = [
  {
    imgLoc: "/male-figure1.jpg",
    imgWidth: "300px",
    imgHeight: "500px",
    imgTitle: "Male Figure from Life",
    imgDescription: "Charcoal on newsprint, 2021. 2.5hr pose.",
    altText: "male figure drawing",
    sizeClass: classString + "-long",
  },
  {
    imgLoc: "/color-leaves.png",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Untitled",
    imgDescription: "Watercolor. 2011",
    altText: "rainbow watercolor leaves",
    sizeClass: classString + "-med",
  },
  {
    imgLoc: "/hazel-drawing.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Pen Portrait",
    imgDescription: "Pen on paper. 2013",
    altText: "pen portrait drawing of friend",
    sizeClass: classString + "-med",
  },
  {
    imgLoc: "/dylan-painting.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Dylan",
    imgDescription: "Acrylic on Board. 2014",
    altText: "portrait painting on board",
    sizeClass: classString + "-med",
  },
  {
    imgLoc: "/kristian-painting.jpg",
    imgWidth: "300px",
    imgHeight: "400px",
    imgTitle: "Kristian",
    imgDescription: "Acrylic on Board. 2011",
    altText: "portrait painting on board of man",
    sizeClass: classString + "-med",
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content fineart-page-content">
        <div className="gallery-container fineart-gallery-container">
          {fineArtPics.map((pic) => (
            <div
              key={pic.imgLoc}
              className="project-container project-container-fineart "
            >
              <div className={pic.sizeClass}>
                <Image
                  alt={pic.altText}
                  className="project-img"
                  src={pic.imgLoc}
                  layout="fill"
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
