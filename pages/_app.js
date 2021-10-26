import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/navbar.css";
import "../styles/about.css";
import "../styles/work.css";
import "../styles/homePage.css";
import "../styles/galleryPage.css";
import "../styles/fineart.css";
import "../styles/web.css";

import "font-awesome/css/font-awesome.css";

import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
