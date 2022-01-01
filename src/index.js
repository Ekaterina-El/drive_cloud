// React
import React from "react";
import ReactDOM from "react-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
