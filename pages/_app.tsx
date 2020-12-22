import type { AppProps } from "next/app";

import Layout from "../components/Layout";

import "../styles/globals.css";
import "react-datepicker/dist/react-datepicker.css";

const App: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
