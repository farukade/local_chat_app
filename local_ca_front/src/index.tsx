import React from "react";
import ReactDOM from "react-dom/client";

// Global Styles
import "./index.css";
import "./assets/stylesheet/custom.css";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Notify from "./services/Notify";

// Bring Redux to the whole application
import { Provider } from "react-redux";
import { store } from "./redux/App/store";

Notify.notifications.subscribe((alert) => alert instanceof Function && alert());

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
