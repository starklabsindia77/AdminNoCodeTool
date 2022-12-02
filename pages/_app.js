import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import MainLayout from "../components/MainLayout";
import store from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Auth0Provider
        domain="shivamdg.us.auth0.com"
        clientId="SNhWWLoK9FSh2TVLJ4OxiA0W1KtR9un6"
        redirectUri="http://localhost:3000/"
      >
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Auth0Provider>
    </Provider>
  );
}

export default MyApp;
