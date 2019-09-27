import * as React from "react";
import Navigation from "./Navigation/Navigation";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/Reducers";
import axios from "axios";

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);

const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
