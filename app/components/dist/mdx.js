"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.Mdx = void 0;
// @ts-nocheck
var React = require("react");
var image_1 = require("next/image");
var link_1 = require("next/link");
var hooks_1 = require("next-contentlayer/hooks");
function clsx() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(Boolean).join(" ");
}
var components = {
    h1: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("h1", __assign({ className: clsx("mt-2 scroll-m-20 text-4xl font-bold tracking-tight", className) }, props)));
    },
    h2: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("h2", __assign({ className: clsx("mt-10 scroll-m-20 border-b border-b-zinc-800 pb-1 text-3xl font-semibold tracking-tight first:mt-0", className) }, props)));
    },
    h3: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("h3", __assign({ className: clsx("mt-8 scroll-m-20 text-2xl font-semibold tracking-tight", className) }, props)));
    },
    h4: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("h4", __assign({ className: clsx("mt-8 scroll-m-20 text-xl font-semibold tracking-tight", className) }, props)));
    },
    h5: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("h5", __assign({ className: clsx("mt-8 scroll-m-20 text-lg font-semibold tracking-tight", className) }, props)));
    },
    h6: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("h6", __assign({ className: clsx("mt-8 scroll-m-20 text-base font-semibold tracking-tight", className) }, props)));
    },
    a: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement(link_1["default"], __assign({ className: clsx("font-medium text-zinc-900 underline underline-offset-4", className) }, props)));
    },
    p: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("p", __assign({ className: clsx("leading-7 [&:not(:first-child)]:mt-6", className) }, props)));
    },
    ul: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("ul", __assign({ className: clsx("my-6 ml-6 list-disc", className) }, props)));
    },
    ol: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("ol", __assign({ className: clsx("my-6 ml-6 list-decimal", className) }, props)));
    },
    li: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("li", __assign({ className: clsx("mt-2", className) }, props)));
    },
    blockquote: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("blockquote", __assign({ className: clsx("mt-6 border-l-2 border-zinc-300 pl-6 italic text-zinc-800 [&>*]:text-zinc-600", className) }, props)));
    },
    img: function (_a) {
        var className = _a.className, alt = _a.alt, props = __rest(_a, ["className", "alt"]);
        return (
        // eslint-disable-next-line @next/next/no-img-element
        React.createElement("img", __assign({ className: clsx("rounded-md border border-zinc-200", className), alt: alt }, props)));
    },
    hr: function (_a) {
        var props = __rest(_a, []);
        return (React.createElement("hr", __assign({ className: "my-4 border-zinc-200 md:my-8" }, props)));
    },
    table: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("div", { className: "w-full my-6 overflow-y-auto" },
            React.createElement("table", __assign({ className: clsx("w-full", className) }, props))));
    },
    tr: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("tr", __assign({ className: clsx("m-0 border-t border-zinc-300 p-0 even:bg-zinc-100", className) }, props)));
    },
    th: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("th", __assign({ className: clsx("border border-zinc-200 px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right", className) }, props)));
    },
    td: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("td", __assign({ className: clsx("border border-zinc-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right", className) }, props)));
    },
    pre: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("pre", __assign({ className: clsx("mt-6 mb-4 overflow-x-auto rounded-lg bg-zinc-900 py-4", className) }, props)));
    },
    code: function (_a) {
        var className = _a.className, props = __rest(_a, ["className"]);
        return (React.createElement("code", __assign({ className: clsx("relative rounded border bg-zinc-300 bg-opacity-25 py-[0.2rem] px-[0.3rem] font-mono text-sm text-zinc-600", className) }, props)));
    },
    Image: image_1["default"]
};
function Mdx(_a) {
    var code = _a.code;
    var Component = hooks_1.useMDXComponent(code);
    return (React.createElement("div", { className: "mdx" },
        React.createElement(Component, { components: components })));
}
exports.Mdx = Mdx;
