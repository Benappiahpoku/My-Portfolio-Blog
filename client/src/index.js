import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

const onRedirectCallback = (appState) => {
  window.location.assign(appState?.returnTo || "/admin");
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-60yyy3jqiys5xvnx.us.auth0.com"
      clientId="aqJX0oFKeuiVebVaxklg5k06CpKtpJGd"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
