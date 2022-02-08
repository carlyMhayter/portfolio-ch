import FormContact from '../components/FormContact';
import ClipboardJS from 'clipboard';
import Button from '@mui/material/Button';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Tooltip from '@mui/material/Tooltip';

console.log(ClipboardJS);
// const clipboard = new ClipboardJS('.btn');

function Home() {
  return (
    <div className="page-content">
      <div className="form-content-container">
        <h1 id="contact-info-header">Contact </h1>
        <div className="manual-contact">
          <p className="manual-contact-button" id="carly-email">
            carlyhayter@gmail.com
          </p>

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
        <FormContact />
      </div>
    </div>
  );
}

export default Home;
