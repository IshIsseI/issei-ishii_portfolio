"use client";

import { useEffect } from "react";

const UnityGame: React.FC = () => {
  useEffect(() => {
    const loaderUrl = "/CalculationPuzzle/Build/CalculationPuzzle.loader.js";
    const config = {
      dataUrl: "/CalculationPuzzle/Build/CalculationPuzzle.data",
      frameworkUrl: "/CalculationPuzzle/Build/CalculationPuzzle.framework.js",
      codeUrl: "/CalculationPuzzle/Build/CalculationPuzzle.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "CalculationPuzzle",
      productVersion: "1.0",
      showBanner: (msg: string, type: string) => {
        if (type === "error") {
          alert(`Error: ${msg}`);
        } else {
          console.log(`${type}: ${msg}`);
        }
      },
    };

    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      (window as any).createUnityInstance(
        document.querySelector("#unity-canvas") as HTMLCanvasElement,
        config
      )
        .then((unityInstance: any) => {
          console.log("Unity instance loaded:", unityInstance);
        })
        .catch((error: Error) => {
          console.error("Error loading Unity instance:", error);
        });
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="unity-container" className="unity-desktop" style={{ position: "relative", width: "100%", height: "100vh" }}>
      <canvas
        id="unity-canvas"
        style={{
          width: "100%",
          height:"80%",
          display: "block",
        }}
      />
      <div id="unity-loading-bar" style={{ position: "absolute", top: 0, left: 0, width: "100%" }}>
        <div id="unity-progress-bar-empty" style={{ background: "#555", height: "4px", position: "relative" }}>
          <div id="unity-progress-bar-full" style={{ background: "#4caf50", height: "100%", width: "0%" }} />
        </div>
      </div>
      <div id="unity-warning" style={{ color: "red", textAlign: "center", padding: "10px" }}></div>
      <div id="unity-footer" style={{ textAlign: "center", padding: "10px" }}>
        <button
          id="unity-fullscreen-button"
          onClick={() => {
            const canvas = document.querySelector("#unity-canvas") as HTMLCanvasElement;
            if (canvas.requestFullscreen) canvas.requestFullscreen();
          }}
          className="inline-flex items-center px-6 py-3 text-lg font-semibold text-white bg-zinc-900 rounded-lg shadow-md hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
};

export default UnityGame;