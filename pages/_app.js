import { makeStore, wrapper } from "../redux/redux-setting/store";
import ReactNotification from "react-notifications-component";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/globals.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { PersistGate } from "redux-persist/integration/react";
import { useDispatch, useStore } from "react-redux";
import { Provider } from "react-redux";
import { Store, persistore } from "../redux/redux-setting/store";
import styles from "../styles/Home.module.css";
import CircularIndeterminate from "../components/material-ui/Spinner";
import SpinnerContainer from "../components/material-ui/SpinnerContainer";
import {
  insertAllCategories,
  insertAllProducts,
} from "../redux/actions/ProductActions";
import categories from "../data/Categories.json";
import products from "../data/Products.json";
import { useEffect } from "react";
import nProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
config.autoAddCss = false;

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(insertAllCategories(categories));
    dispatch(insertAllProducts(products));
  }, []);
  const store = useStore((state) => state);
  return (
    <div>
      <PersistGate persistor={store.__persistor} loading={<SpinnerContainer />}>
        <ReactNotification />
        <Component {...pageProps} />
      </PersistGate>
    </div>
  );
}
export default wrapper.withRedux(MyApp);
