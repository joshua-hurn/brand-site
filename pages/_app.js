import { useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome } from '@fortawesome/pro-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.scss';

library.add(faHome);

function Application({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return <Component {...pageProps} />
}

export default Application