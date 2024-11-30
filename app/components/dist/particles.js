"use client";
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
exports.__esModule = true;
var react_1 = require("react");
var mouse_1 = require("@/util/mouse");
function Particles(_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.quantity, quantity = _c === void 0 ? 30 : _c, _d = _a.staticity, staticity = _d === void 0 ? 50 : _d, _e = _a.ease, ease = _e === void 0 ? 50 : _e, _f = _a.refresh, refresh = _f === void 0 ? false : _f;
    var canvasRef = react_1.useRef(null);
    var canvasContainerRef = react_1.useRef(null);
    var context = react_1.useRef(null);
    var circles = react_1.useRef([]);
    var mousePosition = mouse_1.useMousePosition();
    var mouse = react_1.useRef({ x: 0, y: 0 });
    var canvasSize = react_1.useRef({ w: 0, h: 0 });
    var dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    react_1.useEffect(function () {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }
        initCanvas();
        animate();
        window.addEventListener("resize", initCanvas);
        return function () {
            window.removeEventListener("resize", initCanvas);
        };
    }, []);
    react_1.useEffect(function () {
        onMouseMove();
    }, [mousePosition.x, mousePosition.y]);
    react_1.useEffect(function () {
        initCanvas();
    }, [refresh]);
    var initCanvas = function () {
        resizeCanvas();
        drawParticles();
    };
    var onMouseMove = function () {
        if (canvasRef.current) {
            var rect = canvasRef.current.getBoundingClientRect();
            var _a = canvasSize.current, w = _a.w, h = _a.h;
            var x = mousePosition.x - rect.left - w / 2;
            var y = mousePosition.y - rect.top - h / 2;
            var inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
            }
        }
    };
    var resizeCanvas = function () {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            circles.current.length = 0;
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;
            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;
            canvasRef.current.style.width = canvasSize.current.w + "px";
            canvasRef.current.style.height = canvasSize.current.h + "px";
            context.current.scale(dpr, dpr);
        }
    };
    var circleParams = function () {
        var x = Math.floor(Math.random() * canvasSize.current.w);
        var y = Math.floor(Math.random() * canvasSize.current.h);
        var translateX = 0;
        var translateY = 0;
        var size = Math.floor(Math.random() * 2) + 0.1;
        var alpha = 0;
        var targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));
        var dx = (Math.random() - 0.5) * 0.2;
        var dy = (Math.random() - 0.5) * 0.2;
        var magnetism = 0.1 + Math.random() * 4;
        return {
            x: x,
            y: y,
            translateX: translateX,
            translateY: translateY,
            size: size,
            alpha: alpha,
            targetAlpha: targetAlpha,
            dx: dx,
            dy: dy,
            magnetism: magnetism
        };
    };
    var drawCircle = function (circle, update) {
        if (update === void 0) { update = false; }
        if (context.current) {
            var x = circle.x, y = circle.y, translateX = circle.translateX, translateY = circle.translateY, size = circle.size, alpha = circle.alpha;
            context.current.translate(translateX, translateY);
            context.current.beginPath();
            context.current.arc(x, y, size, 0, 2 * Math.PI);
            context.current.fillStyle = "rgba(255, 255, 255, " + alpha + ")";
            context.current.fill();
            context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
            if (!update) {
                circles.current.push(circle);
            }
        }
    };
    var clearContext = function () {
        if (context.current) {
            context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);
        }
    };
    var drawParticles = function () {
        clearContext();
        var particleCount = quantity;
        for (var i = 0; i < particleCount; i++) {
            var circle = circleParams();
            drawCircle(circle);
        }
    };
    var remapValue = function (value, start1, end1, start2, end2) {
        var remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
        return remapped > 0 ? remapped : 0;
    };
    var animate = function () {
        clearContext();
        circles.current.forEach(function (circle, i) {
            // Handle the alpha value
            var edge = [
                circle.x + circle.translateX - circle.size,
                canvasSize.current.w - circle.x - circle.translateX - circle.size,
                circle.y + circle.translateY - circle.size,
                canvasSize.current.h - circle.y - circle.translateY - circle.size,
            ];
            var closestEdge = edge.reduce(function (a, b) { return Math.min(a, b); });
            var remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));
            if (remapClosestEdge > 1) {
                circle.alpha += 0.02;
                if (circle.alpha > circle.targetAlpha) {
                    circle.alpha = circle.targetAlpha;
                }
            }
            else {
                circle.alpha = circle.targetAlpha * remapClosestEdge;
            }
            circle.x += circle.dx;
            circle.y += circle.dy;
            circle.translateX +=
                (mouse.current.x / (staticity / circle.magnetism) - circle.translateX) /
                    ease;
            circle.translateY +=
                (mouse.current.y / (staticity / circle.magnetism) - circle.translateY) /
                    ease;
            // circle gets out of the canvas
            if (circle.x < -circle.size ||
                circle.x > canvasSize.current.w + circle.size ||
                circle.y < -circle.size ||
                circle.y > canvasSize.current.h + circle.size) {
                // remove the circle from the array
                circles.current.splice(i, 1);
                // create a new circle
                var newCircle = circleParams();
                drawCircle(newCircle);
                // update the circle position
            }
            else {
                drawCircle(__assign(__assign({}, circle), { x: circle.x, y: circle.y, translateX: circle.translateX, translateY: circle.translateY, alpha: circle.alpha }), true);
            }
        });
        window.requestAnimationFrame(animate);
    };
    return (react_1["default"].createElement("div", { className: className, ref: canvasContainerRef, "aria-hidden": "true" },
        react_1["default"].createElement("canvas", { ref: canvasRef })));
}
exports["default"] = Particles;
