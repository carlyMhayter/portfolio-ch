const webExamples = [
  {
    imgLoc: "./ndy-logo.svg",
    imgWidth: "300px",
    imgHeight: "300px",
    siteTitle: "Never Die Young Tribute Band",
    siteDescription:
      "Full graphic design services and custom website built with React in Next.js.",
    linkToSite: "https://neverdieyoung.net",
  },
  {
    sitePic: "./color-leaves.png",
    imgWidth: "450px",
    imgHeight: "600px",
    siteTitle: "Untitled",
    siteDescription: "Watercolor. 2011",
    linkToSite: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="gallery-container">
          {webExamples.map((thing) => (
            <div key={thing.sitePic} className="project-container web-project">
              <div className="project-img-container">
                <img
                  className="project-img"
                  src={thing.imgLoc}
                  height={thing.imgHeight}
                  width={thing.imgWidth}
                />
              </div>
              <div className="project-text-container">
                <p className="project-title site-title">{thing.siteTitle}</p>
                <p className="project-description">{thing.siteDescription}</p>
                <a className="project-link" href={thing.linkToSite}>
                  Click here to view site
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
