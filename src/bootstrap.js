import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";
import ReactBreakpoints from "react-breakpoints"
import { RemoveScrollBar } from 'react-remove-scroll-bar'

const createStoreWithMiddleware = applyMiddleware()(createStore);

const breakpoints = {
    mobile: 320,
    mobileLandscape: 480,
    tablet: 768,
    tabletLandscape: 1024,
    desktop: 1200,
    desktopLarge: 1500,
    desktopWide: 1920,
}

import "./style/main.scss";

function main() {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
            <ReactBreakpoints breakpoints={breakpoints}>
                <RemoveScrollBar />
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ReactBreakpoints>
        </Provider>,
        document.querySelector(".app-wrapper")
    );
}

document.addEventListener("DOMContentLoaded", main);
