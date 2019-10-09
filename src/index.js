import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ParallaxProvider } from 'react-scroll-parallax';

import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

function AppContainer() {

  return (
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AppContainer />, rootElement);
