import React from "react";
import ReactDOM from "react-dom";
import Portfolio from "./Portfolio";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Portfolio />, document.getElementById("root"));
registerServiceWorker();
