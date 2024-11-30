"use client";
"use strict";
exports.__esModule = true;
exports.Analytics = void 0;
function Analytics() {
    var token = process.env.NEXT_PUBLIC_BEAM_TOKEN;
    if (!token) {
        return null;
    }
    return (React.createElement("script", { src: "https://beamanalytics.b-cdn.net/beam.min.js", "data-token": token, async: true }));
}
exports.Analytics = Analytics;
