import 'font-awesome/css/font-awesome.css';
import { PropTypes } from 'prop-types';
import { useEffect } from 'react';
import '../styles/globals.scss';
import GlobalStyles from '../styles/GlobalStyles';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
