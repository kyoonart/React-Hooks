import React from "react";
import ReactDOM from "react-dom";
import App from "./Demo";
import App2 from "./Demo2.js";
import App3 from "./router";
ReactDOM.render(
    <div>
        <App />
        <App2 />
        <App3 />
    </div>,
    document.getElementById("root")
);
