import Head from 'next/head';

const webExamples = [
  {
    imgLoc: '/perpetual-screenshot.png',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'screenshot of https://www.perpetualflame.net/',
    siteTitle: 'Custom Website',
    siteClient: 'Perpetual Flame Ministries',
    siteDescription:
      'Managed software development for an independent record label with over $400K in annual revenue, designing and implementing a custom Next.js website in Typescript in under 2 business days.',
    linkToSite: 'https://www.perpetualflame.net/',
  },
  {
    imgLoc: '/NDY-screenshot.png',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'never die young screenshot of logo',
    siteTitle: 'Custom Website + Graphic Design',
    siteClient: 'Never Die Young Tribute Band, 2021',
    siteDescription:
      'Full graphic design services and custom website built with React in Next.js.',
    linkToSite: 'https://neverdieyoung.net',
  },
  {
    imgLoc: '/seqScreenshot.png',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'never die young screenshot of logo',
    siteTitle: 'Sequencing Lab Instrument Statuses',
    siteClient: 'Omniome Inc., 2020',
    siteDescription:
      'Page built to supervise DNA sequencing remotely for biotech company. Custom Webpack set-up and configuration.',
    linkToSite: 'https://seq-lab-status.vercel.app',
  },
  {
    imgLoc: '/palette_screen.jpg',
    imgWidth: '350px',
    imgHeight: '300px',
    imgAlt: 'screenshot of palette site',
    siteTitle: 'Color AI Palette Generator',
    siteClient: 'Carly Hayter, 2021',
    siteDescription:
      "A fun color palette generator with infinite scoll functionality. Created with Imagga's Color AI API, and Unsplash.",
    linkToSite: 'https://infinite-scroll-pi.vercel.app/',
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>Web - Carly Hayter</title>
      </Head>
      <div className="page-content web-page-content">
        <div className="gallery-container web-gallery">
          {webExamples.map((thing) => (
            <div
              key={thing.sitePic}
              className="web-project"
              style={{
                backgroundImage: `url(${thing.imgLoc})`,
              }}
            >
              <div className="project-background-overlay">
                <div className="project-inner-container">
                  <div className="project-text-container">
                    <p className="project-title site-title">
                      {thing.siteTitle}
                    </p>
                    <p className="project-client">{thing.siteClient}</p>
                    <p className="project-description web-description ">
                      {thing.siteDescription}
                    </p>
                    <a className="project-link" href={thing.linkToSite}>
                      View site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Home;
