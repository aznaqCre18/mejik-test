import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { ContextProvider } from "./context/context";

const client = new ApolloClient({
  uri: "https://mejikacademy1588499516927.microgen.mejik.id/graphql",
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ContextProvider>
        <App />
      </ContextProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
