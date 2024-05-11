import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

const onRedirectCallback = (appState) => {
  window.location.assign(appState?.returnTo || "/admin");
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-60yyy3jqiys5xvnx.us.auth0.com"
      clientId="aqJX0oFKeuiVebVaxklg5k06CpKtpJGd"
      onRedirectCallback={onRedirectCallback}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
