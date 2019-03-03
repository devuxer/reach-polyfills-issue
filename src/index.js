import { navigate } from "@reach/router";
import React from "react";
import ReactDOM from "react-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

function App() {
    return (
        <>
            <p>Hello React!</p>
            <button
                onClick={() => {
                    navigateRelativeToRoot("/");
                }}
            >
                Activate Lasers
            </button>
        </>
    );
}

function navigateRelativeToRoot(relativeUrl) {
    const baseDirectoryName = "";
    const url = baseDirectoryName + relativeUrl;
    navigate(url);
}
