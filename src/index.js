import React from "react";
import ReactDOM from "react-dom";

import App from "App";
import client from "./apollo";
import { ApolloProvider } from "@apollo/react-hooks";

console.log(client);

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
