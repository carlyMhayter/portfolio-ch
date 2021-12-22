import "../styles/globals.css";
import "../styles/pages.css";
import "../styles/navbar.css";
import "../styles/about.css";
import "../styles/work.css";
import "../styles/homePage.css";
import "../styles/galleryPage.css";
import "../styles/fineart.css";
import "../styles/web.css";
import { Router, useRouter } from "next/router";
import { initGA, logPageView } from "../utils/analytics";

import "font-awesome/css/font-awesome.css";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }) {
  const myRouter = useRouter();

  useEffect(() => {
    initGA();
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!myRouter.asPath.includes("?")) {
      logPageView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    myRouter.events.on("routeChangeComplete", logPageView);
    return () => {
      myRouter.events.off("routeChangeComplete", logPageView);
    };
  }, [myRouter.events]);

  return (
    <>
      <NavBar />

      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
