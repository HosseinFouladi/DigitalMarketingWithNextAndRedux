
import { wrapper } from "../redux/redux-setting/store";
import ReactNotification from 'react-notifications-component';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
config.autoAddCss = false;
/**import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' */

function MyApp({ Component, pageProps }) {
  return (<div>
     <ReactNotification />
    <Component {...pageProps} />
  </div>)
}
export default wrapper.withRedux(MyApp);
