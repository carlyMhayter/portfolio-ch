import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/mobile.css";
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
