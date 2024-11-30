"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var UnityGame = function () {
    react_1.useEffect(function () {
        var loaderUrl = "/CalculationPuzzle/Build/CalculationPuzzle.loader.js";
        var config = {
            dataUrl: "/CalculationPuzzle/Build/CalculationPuzzle.data",
            frameworkUrl: "/CalculationPuzzle/Build/CalculationPuzzle.framework.js",
            codeUrl: "/CalculationPuzzle/Build/CalculationPuzzle.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "DefaultCompany",
            productName: "CalculationPuzzle",
            productVersion: "1.0",
            showBanner: function (msg, type) {
                if (type === "error") {
                    alert("Error: " + msg);
                }
                else {
                    console.log(type + ": " + msg);
                }
            }
        };
        var script = document.createElement("script");
        script.src = loaderUrl;
        script.onload = function () {
            window.createUnityInstance(document.querySelector("#unity-canvas"), config)
                .then(function (unityInstance) {
                console.log("Unity instance loaded:", unityInstance);
            })["catch"](function (error) {
                console.error("Error loading Unity instance:", error);
            });
        };
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, []);
    return (React.createElement("div", { id: "unity-container", className: "unity-desktop", style: { position: "relative", width: "100%", height: "100vh" } },
        React.createElement("canvas", { id: "unity-canvas", style: {
                width: "100%",
                height: "80%",
                display: "block"
            } }),
        React.createElement("div", { id: "unity-loading-bar", style: { position: "absolute", top: 0, left: 0, width: "100%" } },
            React.createElement("div", { id: "unity-progress-bar-empty", style: { background: "#555", height: "4px", position: "relative" } },
                React.createElement("div", { id: "unity-progress-bar-full", style: { background: "#4caf50", height: "100%", width: "0%" } }))),
        React.createElement("div", { id: "unity-warning", style: { color: "red", textAlign: "center", padding: "10px" } }),
        React.createElement("div", { id: "unity-footer", style: { textAlign: "center", padding: "10px" } },
            React.createElement("button", { id: "unity-fullscreen-button", onClick: function () {
                    var canvas = document.querySelector("#unity-canvas");
                    if (canvas.requestFullscreen)
                        canvas.requestFullscreen();
                }, className: "inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" }, "Fullscreen"))));
};
exports["default"] = UnityGame;
