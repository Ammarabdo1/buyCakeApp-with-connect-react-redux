import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";//! provider to connect the store with all application
import store from "./redux/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
