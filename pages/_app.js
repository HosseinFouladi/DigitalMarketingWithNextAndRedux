
import { makeStore, wrapper } from "../redux/redux-setting/store";
import ReactNotification from 'react-notifications-component';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import{PersistGate}from 'redux-persist/integration/react';
import { useStore } from "react-redux";
import {Provider}from 'react-redux';
import { Store,persistore} from "../redux/redux-setting/store";
import styles from '../styles/Home.module.css';

config.autoAddCss = false;
function MyApp({ Component, pageProps }) {
  const store=useStore((state)=>state)
  return (<div>

    <PersistGate persistor={store.__persistor} loading='null'>
          <ReactNotification  />
          <Component {...pageProps} />
</PersistGate>
  
   
  </div>)
}
export default wrapper.withRedux(MyApp);
