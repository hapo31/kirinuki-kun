import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import AppRoot from "./container/AppRoot";
import YoutubePlayerReducer from "./reducers/YoutubePlayerReducer";

const store = createStore(YoutubePlayerReducer);

const App = (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

render(App, document.getElementById("app"));
