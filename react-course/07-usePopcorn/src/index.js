import React from "react";
import ReactDOM from "react-dom/client";
import StarElement from "./StarElement";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarElement maxRatings={10} />
  </React.StrictMode>,
);
