import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "store";
import { Theme } from "theme";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from "react-apollo";
import client from "utils/client";
import App from "./feature/app";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <ThemeProvider theme={Theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
