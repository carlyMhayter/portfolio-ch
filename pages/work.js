import Image from 'next/image';
import Link from 'next/link';
import ComputerIcon from '@mui/icons-material/Computer';
import BrushIcon from '@mui/icons-material/Brush';

function Home() {
  return (
    <div className="page-content">
      <div className="work-container">
        <Link href="./fineart">
          <div className="fineart-container container-tags">
            <BrushIcon fontSize="medium" color="inherit" />
            <p className="fineart-text tag-text">Fine Art</p>
          </div>
        </Link>
        <Link href="./web">
          <div className="web-container container-tags">
            <ComputerIcon fontSize="medium" color="inherit" />
            <p className="web-text tag-text">Web</p>
          </div>
        </Link>

        <a
          href="/HayterCarly_Resume_Nov2022.pdf"
          download
          className="resume-container"
        >
          Click to download my resume.
        </a>
      </div>
    </div>
  );
}
export default Home;
