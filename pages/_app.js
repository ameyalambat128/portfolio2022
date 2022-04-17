import "../styles/globals.css";
import ScrollObserver from "../utils/scroll-observer";

function MyApp({ Component, pageProps }) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />;
    </ScrollObserver>
  );
}

export default MyApp;
