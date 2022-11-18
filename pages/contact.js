import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

function Home() {
  return (
    <div className="page-content">
      <div className="form-content-container">
        <h1 id="contact-info-header">Contact </h1>
        <div className="manual-contact">
          <p className="contact-p">Email me:</p>
          <a
            href="mailto:carlyhayter@gmail.com"
            className="manual-contact-button"
            id="carly-email"
          >
            carlyhayter@gmail.com
          </a>
        </div>
        <div className="manual-contact">
          <Tooltip title="Open in new window" placement="bottom">
            <Button
              id="carly-linkedIn"
              variant="text"
              className="manual-contact-button"
            >
              <a
                href="https://www.linkedin.com/in/carly-hayter-ab1a8853/"
                target="_blank"
              >
                LinkedIn
              </a>
              <OpenInNewIcon className="manual-contact-icon" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Home;
