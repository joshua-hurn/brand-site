import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';

function Application({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.css");
  }, []);

  return <Component {...pageProps} />
}

export default Application;