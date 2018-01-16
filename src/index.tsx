import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./Main";

const rootNodeId: string = "root";

function component(id: string | null) {
    const element = document.createElement("div");
    if (id !== null) {
        element.id = id;
    }
    return element;
}

document.body.appendChild(component(rootNodeId));

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.getElementById(rootNodeId));
