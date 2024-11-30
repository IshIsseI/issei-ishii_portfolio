"use client";
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Card = void 0;
var framer_motion_1 = require("framer-motion");
exports.Card = function (_a) {
    var children = _a.children;
    var mouseX = framer_motion_1.useSpring(0, { stiffness: 500, damping: 100 });
    var mouseY = framer_motion_1.useSpring(0, { stiffness: 500, damping: 100 });
    function onMouseMove(_a) {
        var currentTarget = _a.currentTarget, clientX = _a.clientX, clientY = _a.clientY;
        var _b = currentTarget.getBoundingClientRect(), left = _b.left, top = _b.top;
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }
    var maskImage = framer_motion_1.useMotionTemplate(templateObject_1 || (templateObject_1 = __makeTemplateObject(["radial-gradient(240px at ", "px ", "px, white, transparent)"], ["radial-gradient(240px at ", "px ", "px, white, transparent)"])), mouseX, mouseY);
    var style = { maskImage: maskImage, WebkitMaskImage: maskImage };
    return (React.createElement("div", { onMouseMove: onMouseMove, className: "overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 " },
        React.createElement("div", { className: "pointer-events-none" },
            React.createElement("div", { className: "absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]" }),
            React.createElement(framer_motion_1.motion.div, { className: "absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 ", style: style }),
            React.createElement(framer_motion_1.motion.div, { className: "absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100", style: style })),
        children));
};
var templateObject_1;
