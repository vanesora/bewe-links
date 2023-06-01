import React from "react";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Navigator from "./navigation";
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navigator />
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
