"use client";
"use strict";
exports.__esModule = true;
exports.Navigation = void 0;
var link_1 = require("next/link");
var react_1 = require("react");
var image_1 = require("next/image");
exports.Navigation = function () {
    var ref = react_1.useRef(null);
    var _a = react_1.useState(true), isIntersecting = _a[0], setIntersecting = _a[1];
    react_1.useEffect(function () {
        if (!ref.current)
            return;
        var observer = new IntersectionObserver(function (_a) {
            var entry = _a[0];
            return setIntersecting(entry.isIntersecting);
        });
        observer.observe(ref.current);
        return function () { return observer.disconnect(); };
    }, []);
    return (react_1["default"].createElement("header", { ref: ref },
        react_1["default"].createElement("div", { className: "fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  " + (isIntersecting
                ? "bg-zinc-900/0 border-transparent"
                : "bg-zinc-900/500  border-zinc-800 ") },
            react_1["default"].createElement("div", { className: "container flex flex-row-reverse items-center justify-between p-6 mx-auto" },
                react_1["default"].createElement("div", { className: "flex justify-between gap-8" },
                    react_1["default"].createElement(link_1["default"], { href: "/projects", className: "duration-200 text-zinc-400 hover:text-zinc-100" }, "Products"),
                    react_1["default"].createElement(link_1["default"], { href: "/about", className: "duration-200 text-zinc-400 hover:text-zinc-100" }, "About")),
                react_1["default"].createElement(link_1["default"], { href: "/", className: "duration-200 text-zinc-300 hover:text-zinc-100" },
                    react_1["default"].createElement(image_1["default"], { src: "/issei3.png", alt: "Back to Home", width: 40, height: 40, className: "hover:opacity-80" }))))));
};
