import 'font-awesome/css/font-awesome.css';
import { useRouter } from 'next/router';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import '../styles/about.scss';
import '../styles/fineart.scss';
import '../styles/galleryPage.scss';
import '../styles/globals.scss';
import '../styles/homePage.scss';
import '../styles/navbar.scss';
import '../styles/pages.scss';
import '../styles/web.scss';
import '../styles/work.scss';
import { initGA, logPageView } from '../utils/analytics';

function MyApp({ Component, pageProps }) {
  const myRouter = useRouter();

  useEffect(() => {
    initGA();
    // `routeChangeComplete` won't run for the first page load unless the query string is
    // hydrated later on, so here we log a page view if this is the first render and
    // there's no query string
    if (!myRouter.asPath.includes('?')) {
      logPageView();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Listen for page changes after a navigation or when the query changes
    myRouter.events.on('routeChangeComplete', logPageView);
    return () => {
      myRouter.events.off('routeChangeComplete', logPageView);
    };
  }, [myRouter.events]);

  return (
    <>
      <NavBar />

      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
