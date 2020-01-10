import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import App from "./components/App";
import reducers from "./reducers";
import "./styles/main.css";
import thunk from "redux-thunk";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
