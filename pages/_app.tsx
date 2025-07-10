import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { Provider } from "react-redux";
import { store } from "../src/store";
import "antd/dist/reset.css";
import { useEffect } from "react";
import MainLayout from "../src/components/layouts/MainLayout";

const MyApp = ({ Component, pageProps, ...props }: AppProps) => {
  useEffect(() => {
    console.log(props.router.pathname, "component in _app");
  }, []);

  return (
    <Provider store={store}>
      {props.router.pathname === "/" ? (
        <MainLayout>
          <Component />
        </MainLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </Provider>
  );
};

export default MyApp;
