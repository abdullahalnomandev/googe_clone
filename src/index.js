import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ResultsContext } from "./context/ResultsContext";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ResultsContext>
        <App />
      </ResultsContext>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
