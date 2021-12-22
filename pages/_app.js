import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/navbar.css";
import "../styles/about.css";
import "../styles/work.css";
import "../styles/homePage.css";
import "../styles/galleryPage.css";
import "../styles/fineart.css";
import "../styles/web.css";
import ReactGA from "react-ga";

import "font-awesome/css/font-awesome.css";

import NavBar from "../components/NavBar";

ReactGA.initialize("UA-100854465-2");

function MyApp({ Component, pageProps }) {
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
