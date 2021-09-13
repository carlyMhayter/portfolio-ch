import Image from "next/image";

const webExamples = [
  {
    imgLoc: "/NDY-screenshot.png",
    imgWidth: "350px",
    imgHeight: "300px",
    imgAlt: "never die young screenshot of logo",
    siteTitle: "Never Die Young Tribute Band",
    siteDescription:
      "Full graphic design services and custom website built with React in Next.js.",
    linkToSite: "https://neverdieyoung.net",
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="gallery-container">
          {webExamples.map((thing) => (
            <div key={thing.sitePic} className="project-container web-project">
              <div
                style={{ height: thing.imgHeight, width: thing.imgWidth }}
                className="project-img-container"
              >
                <Image
                  alt={thing.imgAlt}
                  className="project-img"
                  src={thing.imgLoc}
                  layout="fill"
                />
              </div>
              <div className="project-text-container">
                <p className="project-title site-title">{thing.siteTitle}</p>
                <p className="project-description">{thing.siteDescription}</p>
                <a className="project-link" href={thing.linkToSite}>
                  Click here to view
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Home;
