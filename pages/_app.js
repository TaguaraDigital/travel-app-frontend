import Layout from "../components/Layout";
import "../styles/globals.scss";
import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}

export default MyApp;
