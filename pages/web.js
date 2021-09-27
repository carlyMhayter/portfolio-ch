import Image from "next/image";

const webExamples = [
  {
    imgLoc: "/NDY-screenshot-blue.jpg",
    imgWidth: "350px",
    imgHeight: "300px",
    imgAlt: "never die young screenshot of logo",
    siteTitle: "Custom Website + Graphic Design",
    siteClient: "Never Die Young Tribute Band, 2021",
    siteDescription:
      "Full graphic design services and custom website built with React in Next.js.",
    linkToSite: "https://neverdieyoung.net",
  },
  {
    imgLoc: "/seqScreenshot-blue.jpg",
    imgWidth: "350px",
    imgHeight: "300px",
    imgAlt: "never die young screenshot of logo",
    siteTitle: "Sequencing Lab Instrument Statuses",
    siteClient: "Omniome Inc., 2020",
    siteDescription:
      "Page built to supervise DNA sequencing remotely for biotech company. Custom Webpack set-up and configuration.",
    linkToSite: "https://neverdieyoung.net",
  },
];

const Home = () => {
  return (
    <>
      <div className="page-content">
        <div className="gallery-container">
          {webExamples.map((thing) => (
            <div
              key={thing.sitePic}
              className="project-container web-project"
              style={{
                backgroundImage: `url(${thing.imgLoc})`,
              }}
            >
              {/* <div
                className="project-img-container web-img-container"
              >
                <Image
                  alt={thing.imgAlt}
                  className="project-img"
                  src={thing.imgLoc}
                  layout="fill"
                />
              </div> */}
              <div className="project-text-container">
                <p className="project-title site-title">{thing.siteTitle}</p>
                <p className="project-client">{thing.siteClient}</p>
                <p className="project-description">{thing.siteDescription}</p>
                <a className="project-link" href={thing.linkToSite}>
                  View site
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
