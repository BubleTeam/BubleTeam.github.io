(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [849], {
        8045: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function o(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try { for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0); } catch (s) { l = !0, i = s } finally { try { a || null == n.return || n.return() } finally { if (l) throw i } }
                        return o
                    }
                }(e, t) || l(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }

            function a(e) { return function(e) { if (Array.isArray(e)) return r(e) }(e) || function(e) { if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e) }(e) || l(e) || function() { throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }() }

            function l(e, t) { if (e) { if ("string" === typeof e) return r(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0 } }
            t.default = function(e) {
                var t = e.src,
                    n = e.sizes,
                    r = e.unoptimized,
                    a = void 0 !== r && r,
                    l = e.priority,
                    d = void 0 !== l && l,
                    m = e.loading,
                    h = e.lazyBoundary,
                    y = void 0 === h ? "200px" : h,
                    w = e.className,
                    x = e.quality,
                    E = e.width,
                    k = e.height,
                    C = e.objectFit,
                    S = e.objectPosition,
                    T = e.onLoadingComplete,
                    N = e.loader,
                    _ = void 0 === N ? L : N,
                    R = e.placeholder,
                    j = void 0 === R ? "empty" : R,
                    I = e.blurDataURL,
                    M = function(e, t) {
                        if (null == e) return {};
                        var n, r, i = function(e, t) {
                            if (null == e) return {};
                            var n, r, i = {},
                                o = Object.keys(e);
                            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i
                        }(e, t);
                        if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]) }
                        return i
                    }(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]),
                    z = n ? "responsive" : "intrinsic";
                "layout" in M && (M.layout && (z = M.layout), delete M.layout);
                var P = "";
                if (function(e) { return "object" === typeof e && (b(e) || function(e) { return void 0 !== e.src }(e)) }(t)) { var $ = b(t) ? t.default : t; if (!$.src) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify($))); if (I = I || $.blurDataURL, P = $.src, (!z || "fill" !== z) && (k = k || $.height, E = E || $.width, !$.height || !$.width)) throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify($))) }
                t = "string" === typeof t ? t : P;
                var H = O(E),
                    D = O(k),
                    W = O(x),
                    F = !d && ("lazy" === m || "undefined" === typeof m);
                (t.startsWith("data:") || t.startsWith("blob:")) && (a = !0, F = !1);
                g.has(t) && (F = !1);
                0;
                var V, U = o(f.useIntersection({ rootMargin: y, disabled: !F }), 2),
                    q = U[0],
                    B = U[1],
                    G = !F || B,
                    Z = { boxSizing: "border-box", display: "block", overflow: "hidden", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 },
                    Y = { boxSizing: "border-box", display: "block", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 },
                    X = !1,
                    K = { position: "absolute", top: 0, left: 0, bottom: 0, right: 0, boxSizing: "border-box", padding: 0, border: "none", margin: "auto", display: "block", width: 0, height: 0, minWidth: "100%", maxWidth: "100%", minHeight: "100%", maxHeight: "100%", objectFit: C, objectPosition: S },
                    J = "blur" === j ? { filter: "blur(20px)", backgroundSize: C || "cover", backgroundImage: 'url("'.concat(I, '")'), backgroundPosition: S || "0% 0%" } : {};
                if ("fill" === z) Z.display = "block", Z.position = "absolute", Z.top = 0, Z.left = 0, Z.bottom = 0, Z.right = 0;
                else if ("undefined" !== typeof H && "undefined" !== typeof D) {
                    var Q = D / H,
                        ee = isNaN(Q) ? "100%" : "".concat(100 * Q, "%");
                    "responsive" === z ? (Z.display = "block", Z.position = "relative", X = !0, Y.paddingTop = ee) : "intrinsic" === z ? (Z.display = "inline-block", Z.position = "relative", Z.maxWidth = "100%", X = !0, Y.maxWidth = "100%", V = '<svg width="'.concat(H, '" height="').concat(D, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === z && (Z.display = "inline-block", Z.position = "relative", Z.width = H, Z.height = D)
                } else 0;
                var te = { src: v, srcSet: void 0, sizes: void 0 };
                G && (te = A({ src: t, unoptimized: a, layout: z, width: H, quality: W, sizes: n, loader: _ }));
                var ne = t;
                0;
                var re;
                0;
                var ie = (i(re = {}, "imagesrcset", te.srcSet), i(re, "imagesizes", te.sizes), re);
                return s.default.createElement("span", { style: Z }, X ? s.default.createElement("span", { style: Y }, V ? s.default.createElement("img", { style: { display: "block", maxWidth: "100%", width: "initial", height: "initial", background: "none", opacity: 1, border: 0, margin: 0, padding: 0 }, alt: "", "aria-hidden": !0, src: "data:image/svg+xml;base64,".concat(u.toBase64(V)) }) : null) : null, s.default.createElement("img", Object.assign({}, M, te, {
                    decoding: "async",
                    "data-nimg": z,
                    className: w,
                    ref: function(e) {
                        q(e),
                            function(e, t, n, r, i) {
                                if (!e) return;
                                var o = function() {
                                    e.src !== v && ("decode" in e ? e.decode() : Promise.resolve()).catch((function() {})).then((function() {
                                        if ("blur" === r && (e.style.filter = "", e.style.backgroundSize = "", e.style.backgroundImage = "", e.style.backgroundPosition = ""), g.add(t), i) {
                                            var n = e.naturalWidth,
                                                o = e.naturalHeight;
                                            i({ naturalWidth: n, naturalHeight: o })
                                        }
                                    }))
                                };
                                e.complete ? o() : e.onload = o
                            }(e, ne, 0, j, T)
                    },
                    style: p({}, K, J)
                })), F && s.default.createElement("noscript", null, s.default.createElement("img", Object.assign({}, M, A({ src: t, unoptimized: a, layout: z, width: H, quality: W, sizes: n, loader: _ }), { decoding: "async", "data-nimg": z, style: K, className: w, loading: m || "lazy" }))), d ? s.default.createElement(c.default, null, s.default.createElement("link", Object.assign({ key: "__nimg-" + te.src + te.srcSet + te.sizes, rel: "preload", as: "image", href: te.srcSet ? void 0 : te.src }, ie))) : null)
            };
            var s = h(n(7294)),
                c = h(n(5443)),
                u = n(6978),
                d = n(5809),
                f = n(7190);

            function m(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }

            function h(e) { return e && e.__esModule ? e : { default: e } }

            function p(e) {
                for (var t = arguments, n = function(n) {
                        var r = null != t[n] ? t[n] : {},
                            i = Object.keys(r);
                        "function" === typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(r).filter((function(e) { return Object.getOwnPropertyDescriptor(r, e).enumerable })))), i.forEach((function(t) { m(e, t, r[t]) }))
                    }, r = 1; r < arguments.length; r++) n(r);
                return e
            }
            var g = new Set,
                v = (new Map, "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
            var y = new Map([
                ["default", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width,
                        i = e.quality;
                    0;
                    return "".concat(t, "?url=").concat(encodeURIComponent(n), "&w=").concat(r, "&q=").concat(i || 75)
                }],
                ["imgix", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width,
                        i = e.quality,
                        o = new URL("".concat(t).concat(T(n))),
                        a = o.searchParams;
                    a.set("auto", a.get("auto") || "format"), a.set("fit", a.get("fit") || "max"), a.set("w", a.get("w") || r.toString()), i && a.set("q", i.toString());
                    return o.href
                }],
                ["cloudinary", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width,
                        i = e.quality,
                        o = ["f_auto", "c_limit", "w_" + r, "q_" + (i || "auto")].join(",") + "/";
                    return "".concat(t).concat(o).concat(T(n))
                }],
                ["akamai", function(e) {
                    var t = e.root,
                        n = e.src,
                        r = e.width;
                    return "".concat(t).concat(T(n), "?imwidth=").concat(r)
                }],
                ["custom", function(e) { var t = e.src; throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader") }]
            ]);

            function b(e) { return void 0 !== e.default }
            var w = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image/", loader: "custom" } || d.imageConfigDefault,
                x = w.deviceSizes,
                E = w.imageSizes,
                k = w.loader,
                C = w.path,
                S = (w.domains, a(x).concat(a(E)));

            function A(e) {
                var t = e.src,
                    n = e.unoptimized,
                    r = e.layout,
                    i = e.width,
                    o = e.quality,
                    l = e.sizes,
                    s = e.loader;
                if (n) return { src: t, srcSet: void 0, sizes: void 0 };
                var c = function(e, t, n) { if (n && ("fill" === t || "responsive" === t)) { for (var r, i = /(^|\s)(1?\d?\d)vw/g, o = []; r = i.exec(n); r) o.push(parseInt(r[2])); if (o.length) { var l, s = .01 * (l = Math).min.apply(l, a(o)); return { widths: S.filter((function(e) { return e >= x[0] * s })), kind: "w" } } return { widths: S, kind: "w" } } return "number" !== typeof e || "fill" === t || "responsive" === t ? { widths: x, kind: "w" } : { widths: a(new Set([e, 2 * e].map((function(e) { return S.find((function(t) { return t >= e })) || S[S.length - 1] })))), kind: "x" } }(i, r, l),
                    u = c.widths,
                    d = c.kind,
                    f = u.length - 1;
                return { sizes: l || "w" !== d ? l : "100vw", srcSet: u.map((function(e, n) { return "".concat(s({ src: t, quality: o, width: e }), " ").concat("w" === d ? e : n + 1).concat(d) })).join(", "), src: s({ src: t, quality: o, width: u[f] }) }
            }

            function O(e) { return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0 }

            function L(e) { var t = y.get(k); if (t) return t(p({ root: C }, e)); throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "), ". Received: ").concat(k)) }

            function T(e) { return "/" === e[0] ? e.slice(1) : e }
            x.sort((function(e, t) { return e - t })), S.sort((function(e, t) { return e - t }))
        },
        7190: function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function i(e, t) {
                return function(e) { if (Array.isArray(e)) return e }(e) || function(e, t) {
                    var n = null == e ? null : "undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                    if (null != n) {
                        var r, i, o = [],
                            a = !0,
                            l = !1;
                        try { for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0); } catch (s) { l = !0, i = s } finally { try { a || null == n.return || n.return() } finally { if (l) throw i } }
                        return o
                    }
                }(e, t) || function(e, t) { if (!e) return; if ("string" === typeof e) return r(e, t); var n = Object.prototype.toString.call(e).slice(8, -1); "Object" === n && e.constructor && (n = e.constructor.name); if ("Map" === n || "Set" === n) return Array.from(n); if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return r(e, t) }(e, t) || function() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") }()
            }
            Object.defineProperty(t, "__esModule", { value: !0 }), t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !l,
                    r = o.useRef(),
                    c = i(o.useState(!1), 2),
                    u = c[0],
                    d = c[1],
                    f = o.useCallback((function(e) {
                        r.current && (r.current(), r.current = void 0), n || u || e && e.tagName && (r.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = s.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        i = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return s.set(t, n = { id: t, observer: i, elements: r }), n
                                }(n),
                                i = r.id,
                                o = r.observer,
                                a = r.elements;
                            return a.set(e, t), o.observe(e),
                                function() { a.delete(e), o.unobserve(e), 0 === a.size && (o.disconnect(), s.delete(i)) }
                        }(e, (function(e) { return e && d(e) }), { rootMargin: t }))
                    }), [n, t, u]);
                return o.useEffect((function() { if (!l && !u) { var e = a.requestIdleCallback((function() { return d(!0) })); return function() { return a.cancelIdleCallback(e) } } }), [u]), [f, u]
            };
            var o = n(7294),
                a = n(9311),
                l = "undefined" !== typeof IntersectionObserver;
            var s = new Map
        },
        6978: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.toBase64 = function(e) { return window.btoa(e) }
        },
        5809: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.imageConfigDefault = t.VALID_LOADERS = void 0;
            t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
            t.imageConfigDefault = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", domains: [], disableStaticImages: !1, minimumCacheTTL: 60, formats: ["image/webp"] }
        },
        9008: function(e, t, n) { e.exports = n(5443) },
        5675: function(e, t, n) { e.exports = n(8045) },
        2703: function(e, t, n) {
            "use strict";
            var r = n(414);

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, n, i, o, a) { if (a !== r) { var l = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"); throw l.name = "Invariant Violation", l } }

                function t() { return e }
                e.isRequired = e;
                var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: t, element: e, elementType: e, instanceOf: t, node: e, objectOf: t, oneOf: t, oneOfType: t, shape: t, exact: t, checkPropTypes: o, resetWarningCache: i };
                return n.PropTypes = n, n
            }
        },
        5697: function(e, t, n) { e.exports = n(2703)() },
        414: function(e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        9798: function(e, t, n) {
            "use strict";
            n.d(t, { k: function() { return Wn } });
            var r = n(7294),
                i = n(3935);
            "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof n.g ? n.g : "undefined" != typeof self && self,
                function() {
                    function e(e) {
                        var t = !0,
                            n = !1,
                            r = null,
                            i = { text: !0, search: !0, url: !0, tel: !0, email: !0, password: !0, number: !0, date: !0, month: !0, week: !0, time: !0, datetime: !0, "datetime-local": !0 };

                        function o(e) { return !!(e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList) }

                        function a(e) { e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", "")) }

                        function l(e) { t = !1 }

                        function s() { document.addEventListener("mousemove", c), document.addEventListener("mousedown", c), document.addEventListener("mouseup", c), document.addEventListener("pointermove", c), document.addEventListener("pointerdown", c), document.addEventListener("pointerup", c), document.addEventListener("touchmove", c), document.addEventListener("touchstart", c), document.addEventListener("touchend", c) }

                        function c(e) { e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", c), document.removeEventListener("mousedown", c), document.removeEventListener("mouseup", c), document.removeEventListener("pointermove", c), document.removeEventListener("pointerdown", c), document.removeEventListener("pointerup", c), document.removeEventListener("touchmove", c), document.removeEventListener("touchstart", c), document.removeEventListener("touchend", c)) }
                        document.addEventListener("keydown", (function(n) { n.metaKey || n.altKey || n.ctrlKey || (o(e.activeElement) && a(e.activeElement), t = !0) }), !0), document.addEventListener("mousedown", l, !0), document.addEventListener("pointerdown", l, !0), document.addEventListener("touchstart", l, !0), document.addEventListener("visibilitychange", (function(e) { "hidden" === document.visibilityState && (n && (t = !0), s()) }), !0), s(), e.addEventListener("focus", (function(e) {
                            o(e.target) && (t || function(e) {
                                var t = e.type,
                                    n = e.tagName;
                                return !("INPUT" !== n || !i[t] || e.readOnly) || "TEXTAREA" === n && !e.readOnly || !!e.isContentEditable
                            }(e.target)) && a(e.target)
                        }), !0), e.addEventListener("blur", (function(e) { o(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (n = !0, window.clearTimeout(r), r = window.setTimeout((function() { n = !1 }), 100), function(e) { e.hasAttribute("data-focus-visible-added") && (e.classList.remove("focus-visible"), e.removeAttribute("data-focus-visible-added")) }(e.target)) }), !0), e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && e.host ? e.host.setAttribute("data-js-focus-visible", "") : e.nodeType === Node.DOCUMENT_NODE && (document.documentElement.classList.add("js-focus-visible"), document.documentElement.setAttribute("data-js-focus-visible", ""))
                    }
                    if ("undefined" != typeof window && "undefined" != typeof document) {
                        var t;
                        window.applyFocusVisiblePolyfill = e;
                        try { t = new CustomEvent("focus-visible-polyfill-ready") } catch (e) {
                            (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
                        }
                        window.dispatchEvent(t)
                    }
                    "undefined" != typeof document && e(document)
                }();
            var o = r.createContext({}),
                a = function(e) {
                    var t = e.cardHeight;
                    void 0 === t && (t = 200);
                    var n = e.cardLess;
                    void 0 === n && (n = !1);
                    var i = e.flipLayout,
                        a = e.items;
                    void 0 === a && (a = []);
                    var l = Object.assign({}, { borderLessCards: !1, cardLess: !1, disableAutoScrollOnClick: !1, disableClickOnCircle: !1, fontSizes: { cardSubtitle: "0.85rem", cardText: "0.8rem", cardTitle: "1rem" }, lineWidth: 3, mode: "VERTICAL_ALTERNATING", scrollable: { scrollbar: !1 }, showAllCardsHorizontal: !1, timelineCircleDimension: 16, useReadMore: !0 }, Object.assign({}, e, { activeItemIndex: i ? (null == a ? void 0 : a.length) - 1 : 0, cardHeight: n ? t || 80 : t })),
                        s = e.children;
                    return r.createElement(o.Provider, { value: l }, s)
                },
                l = function() { return r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-left" }, r.createElement("polyline", { points: "15 18 9 12 15 6" })) },
                s = function() { return r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevron-right" }, r.createElement("polyline", { points: "9 18 15 12 9 6" })) },
                c = function() { return r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevrons-left" }, r.createElement("polyline", { points: "11 17 6 12 11 7" }), r.createElement("polyline", { points: "18 17 13 12 18 7" })) },
                u = function() { return r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-chevrons-right" }, r.createElement("polyline", { points: "13 17 18 12 13 7" }), r.createElement("polyline", { points: "6 17 11 12 6 7" })) },
                d = function() { return r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, r.createElement("polygon", { points: "5 3 19 12 5 21 5 3" })) };

            function f() { return (f = Object.assign || function(e) { for (var t = arguments, n = 1; n < arguments.length; n++) { var r = t[n]; for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]) } return e }).apply(this, arguments) }

            function m(e) { var t = Object.create(null); return function(n) { return void 0 === t[n] && (t[n] = e(n)), t[n] } }
            var h = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
                p = m((function(e) { return h.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91 })),
                g = function() {
                    function e(e) {
                        var t = this;
                        this._insertTag = function(e) {
                            var n;
                            n = 0 === t.tags.length ? t.insertionPoint ? t.insertionPoint.nextSibling : t.prepend ? t.container.firstChild : t.before : t.tags[t.tags.length - 1].nextSibling, t.container.insertBefore(e, n), t.tags.push(e)
                        }, this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.prepend = e.prepend, this.insertionPoint = e.insertionPoint, this.before = null
                    }
                    var t = e.prototype;
                    return t.hydrate = function(e) { e.forEach(this._insertTag) }, t.insert = function(e) {
                        this.ctr % (this.isSpeedy ? 65e3 : 1) == 0 && this._insertTag(function(e) { var t = document.createElement("style"); return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t }(this));
                        var t = this.tags[this.tags.length - 1];
                        if (this.isSpeedy) {
                            var n = function(e) {
                                if (e.sheet) return e.sheet;
                                for (var t = 0; t < document.styleSheets.length; t++)
                                    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                            }(t);
                            try { n.insertRule(e, n.cssRules.length) } catch (t) {}
                        } else t.appendChild(document.createTextNode(e));
                        this.ctr++
                    }, t.flush = function() { this.tags.forEach((function(e) { return e.parentNode && e.parentNode.removeChild(e) })), this.tags = [], this.ctr = 0 }, e
                }(),
                v = "-ms-",
                y = "-moz-",
                b = "-webkit-",
                w = Math.abs,
                x = String.fromCharCode,
                E = Object.assign;

            function k(e) { return e.trim() }

            function C(e, t, n) { return e.replace(t, n) }

            function S(e, t) { return e.indexOf(t) }

            function A(e, t) { return 0 | e.charCodeAt(t) }

            function O(e, t, n) { return e.slice(t, n) }

            function L(e) { return e.length }

            function T(e) { return e.length }

            function N(e, t) { return t.push(e), e }
            var _ = 1,
                R = 1,
                j = 0,
                I = 0,
                M = 0,
                z = "";

            function P(e, t, n, r, i, o, a) { return { value: e, root: t, parent: n, type: r, props: i, children: o, line: _, column: R, length: a, return: "" } }

            function $(e, t) { return E(P("", null, null, "", null, null, 0), e, { length: -e.length }, t) }

            function H() { return M = I < j ? A(z, I++) : 0, R++, 10 === M && (R = 1, _++), M }

            function D() { return A(z, I) }

            function W() { return I }

            function F(e, t) { return O(z, e, t) }

            function V(e) {
                switch (e) {
                    case 0:
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        return 5;
                    case 33:
                    case 43:
                    case 44:
                    case 47:
                    case 62:
                    case 64:
                    case 126:
                    case 59:
                    case 123:
                    case 125:
                        return 4;
                    case 58:
                        return 3;
                    case 34:
                    case 39:
                    case 40:
                    case 91:
                        return 2;
                    case 41:
                    case 93:
                        return 1
                }
                return 0
            }

            function U(e) { return _ = R = 1, j = L(z = e), I = 0, [] }

            function q(e) { return z = "", e }

            function B(e) { return k(F(I - 1, Y(91 === e ? e + 2 : 40 === e ? e + 1 : e))) }

            function G(e) {
                for (;
                    (M = D()) && M < 33;) H();
                return V(e) > 2 || V(M) > 3 ? "" : " "
            }

            function Z(e, t) { for (; --t && H() && !(M < 48 || M > 102 || M > 57 && M < 65 || M > 70 && M < 97);); return F(e, W() + (t < 6 && 32 == D() && 32 == H())) }

            function Y(e) {
                for (; H();) switch (M) {
                    case e:
                        return I;
                    case 34:
                    case 39:
                        34 !== e && 39 !== e && Y(M);
                        break;
                    case 40:
                        41 === e && Y(e);
                        break;
                    case 92:
                        H()
                }
                return I
            }

            function X(e, t) { for (; H() && e + M !== 57 && (e + M !== 84 || 47 !== D());); return "/*" + F(t, I - 1) + "*" + x(47 === e ? e : H()) }

            function K(e) { for (; !V(D());) H(); return F(e, I) }

            function J(e) { return q(Q("", null, null, null, [""], e = U(e), 0, [0], e)) }

            function Q(e, t, n, r, i, o, a, l, s) {
                for (var c = 0, u = 0, d = a, f = 0, m = 0, h = 0, p = 1, g = 1, v = 1, y = 0, b = "", w = i, E = o, k = r, O = b; g;) switch (h = y, y = H()) {
                    case 40:
                        if (108 != h && 58 == O.charCodeAt(d - 1)) {-1 != S(O += C(B(y), "&", "&\f"), "&\f") && (v = -1); break }
                    case 34:
                    case 39:
                    case 91:
                        O += B(y);
                        break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                        O += G(h);
                        break;
                    case 92:
                        O += Z(W() - 1, 7);
                        continue;
                    case 47:
                        switch (D()) {
                            case 42:
                            case 47:
                                N(te(X(H(), W()), t, n), s);
                                break;
                            default:
                                O += "/"
                        }
                        break;
                    case 123 * p:
                        l[c++] = L(O) * v;
                    case 125 * p:
                    case 59:
                    case 0:
                        switch (y) {
                            case 0:
                            case 125:
                                g = 0;
                            case 59 + u:
                                m > 0 && L(O) - d && N(m > 32 ? ne(O + ";", r, n, d - 1) : ne(C(O, " ", "") + ";", r, n, d - 2), s);
                                break;
                            case 59:
                                O += ";";
                            default:
                                if (N(k = ee(O, t, n, c, u, i, l, b, w = [], E = [], d), o), 123 === y)
                                    if (0 === u) Q(O, t, k, k, w, o, d, l, E);
                                    else switch (f) {
                                        case 100:
                                        case 109:
                                        case 115:
                                            Q(e, k, k, r && N(ee(e, k, k, 0, 0, i, l, b, i, w = [], d), E), i, E, d, l, r ? w : E);
                                            break;
                                        default:
                                            Q(O, k, k, k, [""], E, 0, l, E)
                                    }
                        }
                        c = u = m = 0, p = v = 1, b = O = "", d = a;
                        break;
                    case 58:
                        d = 1 + L(O), m = h;
                    default:
                        if (p < 1)
                            if (123 == y) --p;
                            else if (125 == y && 0 == p++ && 125 == (M = I > 0 ? A(z, --I) : 0, R--, 10 === M && (R = 1, _--), M)) continue;
                        switch (O += x(y), y * p) {
                            case 38:
                                v = u > 0 ? 1 : (O += "\f", -1);
                                break;
                            case 44:
                                l[c++] = (L(O) - 1) * v, v = 1;
                                break;
                            case 64:
                                45 === D() && (O += B(H())), f = D(), u = d = L(b = O += K(W())), y++;
                                break;
                            case 45:
                                45 === h && 2 == L(O) && (p = 0)
                        }
                }
                return o
            }

            function ee(e, t, n, r, i, o, a, l, s, c, u) {
                for (var d = i - 1, f = 0 === i ? o : [""], m = T(f), h = 0, p = 0, g = 0; h < r; ++h)
                    for (var v = 0, y = O(e, d + 1, d = w(p = a[h])), b = e; v < m; ++v)(b = k(p > 0 ? f[v] + " " + y : C(y, /&\f/g, f[v]))) && (s[g++] = b);
                return P(e, t, n, 0 === i ? "rule" : l, s, c, u)
            }

            function te(e, t, n) { return P(e, t, n, "comm", x(M), O(e, 2, -2), 0) }

            function ne(e, t, n, r) { return P(e, t, n, "decl", O(e, 0, r), O(e, r + 1, -1), r) }

            function re(e, t) {
                switch (function(e, t) { return (((t << 2 ^ A(e, 0)) << 2 ^ A(e, 1)) << 2 ^ A(e, 2)) << 2 ^ A(e, 3) }(e, t)) {
                    case 5103:
                        return b + "print-" + e + e;
                    case 5737:
                    case 4201:
                    case 3177:
                    case 3433:
                    case 1641:
                    case 4457:
                    case 2921:
                    case 5572:
                    case 6356:
                    case 5844:
                    case 3191:
                    case 6645:
                    case 3005:
                    case 6391:
                    case 5879:
                    case 5623:
                    case 6135:
                    case 4599:
                    case 4855:
                    case 4215:
                    case 6389:
                    case 5109:
                    case 5365:
                    case 5621:
                    case 3829:
                        return b + e + e;
                    case 5349:
                    case 4246:
                    case 4810:
                    case 6968:
                    case 2756:
                        return b + e + y + e + v + e + e;
                    case 6828:
                    case 4268:
                        return b + e + v + e + e;
                    case 6165:
                        return b + e + v + "flex-" + e + e;
                    case 5187:
                        return b + e + C(e, /(\w+).+(:[^]+)/, "-webkit-box-$1$2-ms-flex-$1$2") + e;
                    case 5443:
                        return b + e + v + "flex-item-" + C(e, /flex-|-self/, "") + e;
                    case 4675:
                        return b + e + v + "flex-line-pack" + C(e, /align-content|flex-|-self/, "") + e;
                    case 5548:
                        return b + e + v + C(e, "shrink", "negative") + e;
                    case 5292:
                        return b + e + v + C(e, "basis", "preferred-size") + e;
                    case 6060:
                        return b + "box-" + C(e, "-grow", "") + b + e + v + C(e, "grow", "positive") + e;
                    case 4554:
                        return b + C(e, /([^-])(transform)/g, "$1-webkit-$2") + e;
                    case 6187:
                        return C(C(C(e, /(zoom-|grab)/, b + "$1"), /(image-set)/, b + "$1"), e, "") + e;
                    case 5495:
                    case 3959:
                        return C(e, /(image-set\([^]*)/, b + "$1$`$1");
                    case 4968:
                        return C(C(e, /(.+:)(flex-)?(.*)/, "-webkit-box-pack:$3-ms-flex-pack:$3"), /s.+-b[^;]+/, "justify") + b + e + e;
                    case 4095:
                    case 3583:
                    case 4068:
                    case 2532:
                        return C(e, /(.+)-inline(.+)/, b + "$1$2") + e;
                    case 8116:
                    case 7059:
                    case 5753:
                    case 5535:
                    case 5445:
                    case 5701:
                    case 4933:
                    case 4677:
                    case 5533:
                    case 5789:
                    case 5021:
                    case 4765:
                        if (L(e) - 1 - t > 6) switch (A(e, t + 1)) {
                            case 109:
                                if (45 !== A(e, t + 4)) break;
                            case 102:
                                return C(e, /(.+:)(.+)-([^]+)/, "$1-webkit-$2-$3$1" + y + (108 == A(e, t + 3) ? "$3" : "$2-$3")) + e;
                            case 115:
                                return ~S(e, "stretch") ? re(C(e, "stretch", "fill-available"), t) + e : e
                        }
                        break;
                    case 4949:
                        if (115 !== A(e, t + 1)) break;
                    case 6444:
                        switch (A(e, L(e) - 3 - (~S(e, "!important") && 10))) {
                            case 107:
                                return C(e, ":", ":" + b) + e;
                            case 101:
                                return C(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + b + (45 === A(e, 14) ? "inline-" : "") + "box$3$1" + b + "$2$3$1" + v + "$2box$3") + e
                        }
                        break;
                    case 5936:
                        switch (A(e, t + 11)) {
                            case 114:
                                return b + e + v + C(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                            case 108:
                                return b + e + v + C(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
                            case 45:
                                return b + e + v + C(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                        }
                        return b + e + v + e + e
                }
                return e
            }

            function ie(e, t) { for (var n = "", r = T(e), i = 0; i < r; i++) n += t(e[i], i, e, t) || ""; return n }

            function oe(e, t, n, r) {
                switch (e.type) {
                    case "@import":
                    case "decl":
                        return e.return = e.return || e.value;
                    case "comm":
                        return "";
                    case "@keyframes":
                        return e.return = e.value + "{" + ie(e.children, r) + "}";
                    case "rule":
                        e.value = e.props.join(",")
                }
                return L(n = ie(e.children, r)) ? e.return = e.value + "{" + n + "}" : ""
            }

            function ae(e) { var t = T(e); return function(n, r, i, o) { for (var a = "", l = 0; l < t; l++) a += e[l](n, r, i, o) || ""; return a } }
            var le, se, ce, ue = function(e, t, n) { for (var r = 0, i = 0; r = i, i = D(), 38 === r && 12 === i && (t[n] = 1), !V(i);) H(); return F(e, I) },
                de = new WeakMap,
                fe = function(e) {
                    if ("rule" === e.type && e.parent && !(e.length < 1)) {
                        for (var t = e.value, n = e.parent, r = e.column === n.column && e.line === n.line;
                            "rule" !== n.type;)
                            if (!(n = n.parent)) return;
                        if ((1 !== e.props.length || 58 === t.charCodeAt(0) || de.get(n)) && !r) {
                            de.set(e, !0);
                            for (var i = [], o = function(e, t) {
                                    return q(function(e, t) {
                                        var n = -1,
                                            r = 44;
                                        do {
                                            switch (V(r)) {
                                                case 0:
                                                    38 === r && 12 === D() && (t[n] = 1), e[n] += ue(I - 1, t, n);
                                                    break;
                                                case 2:
                                                    e[n] += B(r);
                                                    break;
                                                case 4:
                                                    if (44 === r) { e[++n] = 58 === D() ? "&\f" : "", t[n] = e[n].length; break }
                                                default:
                                                    e[n] += x(r)
                                            }
                                        } while (r = H());
                                        return e
                                    }(U(e), t))
                                }(t, i), a = n.props, l = 0, s = 0; l < o.length; l++)
                                for (var c = 0; c < a.length; c++, s++) e.props[s] = i[l] ? o[l].replace(/&\f/g, a[c]) : a[c] + " " + o[l]
                        }
                    }
                },
                me = function(e) {
                    if ("decl" === e.type) {
                        var t = e.value;
                        108 === t.charCodeAt(0) && 98 === t.charCodeAt(2) && (e.return = "", e.value = "")
                    }
                },
                he = "undefined" != typeof document,
                pe = he ? void 0 : (le = function() { return m((function() { var e = {}; return function(t) { return e[t] } })) }, se = new WeakMap, function(e) { if (se.has(e)) return se.get(e); var t = le(); return se.set(e, t), t }),
                ge = [function(e, t, n, r) {
                    if (e.length > -1 && !e.return) switch (e.type) {
                        case "decl":
                            e.return = re(e.value, e.length);
                            break;
                        case "@keyframes":
                            return ie([$(e, { value: C(e.value, "@", "@" + b) })], r);
                        case "rule":
                            if (e.length) return function(e, t) { return e.map(t).join("") }(e.props, (function(t) {
                                switch (function(e, t) { return (e = /(::plac\w+|:read-\w+)/.exec(e)) ? e[0] : e }(t)) {
                                    case ":read-only":
                                    case ":read-write":
                                        return ie([$(e, { props: [C(t, /:(read-\w+)/, ":-moz-$1")] })], r);
                                    case "::placeholder":
                                        return ie([$(e, { props: [C(t, /:(plac\w+)/, ":-webkit-input-$1")] }), $(e, { props: [C(t, /:(plac\w+)/, ":-moz-$1")] }), $(e, { props: [C(t, /:(plac\w+)/, v + "input-$1")] })], r)
                                }
                                return ""
                            }))
                    }
                }],
                ve = function(e) {
                    var t = e.key;
                    if (he && "css" === t) {
                        var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
                        Array.prototype.forEach.call(n, (function(e) {-1 !== e.getAttribute("data-emotion").indexOf(" ") && (document.head.appendChild(e), e.setAttribute("data-s", "")) }))
                    }
                    var r = e.stylisPlugins || ge;
                    var i, o, a = {},
                        l = [];
                    he && (i = e.container || document.head, Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="' + t + ' "]'), (function(e) {
                        for (var t = e.getAttribute("data-emotion").split(" "), n = 1; n < t.length; n++) a[t[n]] = !0;
                        l.push(e)
                    })));
                    var s, c = [fe, me];
                    if (he) {
                        var u, d = [oe, (s = function(e) { u.insert(e) }, function(e) { e.root || (e = e.return) && s(e) })],
                            f = ae(c.concat(r, d));
                        o = function(e, t, n, r) { u = n, ie(J(e ? e + "{" + t.styles + "}" : t.styles), f), r && (v.inserted[t.name] = !0) }
                    } else {
                        var m = [oe],
                            h = ae(c.concat(r, m)),
                            p = pe(r)(t);
                        o = function(e, t, n, r) {
                            var i = t.name,
                                o = function(e, t) { var n = t.name; return void 0 === p[n] && (p[n] = ie(J(e ? e + "{" + t.styles + "}" : t.styles), h)), p[n] }(e, t);
                            return void 0 === v.compat ? (r && (v.inserted[i] = !0), o) : r ? void(v.inserted[i] = o) : o
                        }
                    }
                    var v = { key: t, sheet: new g({ key: t, container: i, nonce: e.nonce, speedy: e.speedy, prepend: e.prepend, insertionPoint: e.insertionPoint }), nonce: e.nonce, inserted: a, registered: {}, insert: o };
                    return v.sheet.hydrate(l), v
                },
                ye = { exports: {} },
                be = {};
            ye.exports = function() {
                if (ce) return be;
                ce = 1;
                var e = "function" == typeof Symbol && Symbol.for,
                    t = e ? Symbol.for("react.element") : 60103,
                    n = e ? Symbol.for("react.portal") : 60106,
                    r = e ? Symbol.for("react.fragment") : 60107,
                    i = e ? Symbol.for("react.strict_mode") : 60108,
                    o = e ? Symbol.for("react.profiler") : 60114,
                    a = e ? Symbol.for("react.provider") : 60109,
                    l = e ? Symbol.for("react.context") : 60110,
                    s = e ? Symbol.for("react.async_mode") : 60111,
                    c = e ? Symbol.for("react.concurrent_mode") : 60111,
                    u = e ? Symbol.for("react.forward_ref") : 60112,
                    d = e ? Symbol.for("react.suspense") : 60113,
                    f = e ? Symbol.for("react.suspense_list") : 60120,
                    m = e ? Symbol.for("react.memo") : 60115,
                    h = e ? Symbol.for("react.lazy") : 60116,
                    p = e ? Symbol.for("react.block") : 60121,
                    g = e ? Symbol.for("react.fundamental") : 60117,
                    v = e ? Symbol.for("react.responder") : 60118,
                    y = e ? Symbol.for("react.scope") : 60119;

                function b(e) {
                    if ("object" == typeof e && null !== e) {
                        var f = e.$$typeof;
                        switch (f) {
                            case t:
                                switch (e = e.type) {
                                    case s:
                                    case c:
                                    case r:
                                    case o:
                                    case i:
                                    case d:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case l:
                                            case u:
                                            case h:
                                            case m:
                                            case a:
                                                return e;
                                            default:
                                                return f
                                        }
                                }
                            case n:
                                return f
                        }
                    }
                }

                function w(e) { return b(e) === c }
                return be.AsyncMode = s, be.ConcurrentMode = c, be.ContextConsumer = l, be.ContextProvider = a, be.Element = t, be.ForwardRef = u, be.Fragment = r, be.Lazy = h, be.Memo = m, be.Portal = n, be.Profiler = o, be.StrictMode = i, be.Suspense = d, be.isAsyncMode = function(e) { return w(e) || b(e) === s }, be.isConcurrentMode = w, be.isContextConsumer = function(e) { return b(e) === l }, be.isContextProvider = function(e) { return b(e) === a }, be.isElement = function(e) { return "object" == typeof e && null !== e && e.$$typeof === t }, be.isForwardRef = function(e) { return b(e) === u }, be.isFragment = function(e) { return b(e) === r }, be.isLazy = function(e) { return b(e) === h }, be.isMemo = function(e) { return b(e) === m }, be.isPortal = function(e) { return b(e) === n }, be.isProfiler = function(e) { return b(e) === o }, be.isStrictMode = function(e) { return b(e) === i }, be.isSuspense = function(e) { return b(e) === d }, be.isValidElementType = function(e) { return "string" == typeof e || "function" == typeof e || e === r || e === c || e === o || e === i || e === d || e === f || "object" == typeof e && null !== e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === a || e.$$typeof === l || e.$$typeof === u || e.$$typeof === g || e.$$typeof === v || e.$$typeof === y || e.$$typeof === p) }, be.typeOf = b, be
            }();
            var we = ye.exports,
                xe = {};
            xe[we.ForwardRef] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, xe[we.Memo] = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 };
            var Ee = "undefined" != typeof document;

            function ke(e, t, n) { var r = ""; return n.split(" ").forEach((function(n) { void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " " })), r }
            var Ce = function(e, t, n) {
                    var r = e.key + "-" + t.name;
                    (!1 === n || !1 === Ee && void 0 !== e.compat) && void 0 === e.registered[r] && (e.registered[r] = t.styles)
                },
                Se = function(e, t, n) {
                    Ce(e, t, n);
                    var r = e.key + "-" + t.name;
                    if (void 0 === e.inserted[t.name]) {
                        var i = "",
                            o = t;
                        do {
                            var a = e.insert(t === o ? "." + r : "", o, e.sheet, !0);
                            Ee || void 0 === a || (i += a), o = o.next
                        } while (void 0 !== o);
                        if (!Ee && 0 !== i.length) return i
                    }
                };

            function Ae(e) {
                for (var t, n = 0, r = 0, i = e.length; i >= 4; ++r, i -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(r) | (255 & e.charCodeAt(++r)) << 8 | (255 & e.charCodeAt(++r)) << 16 | (255 & e.charCodeAt(++r)) << 24)) + (59797 * (t >>> 16) << 16), n = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & n) + (59797 * (n >>> 16) << 16);
                switch (i) {
                    case 3:
                        n ^= (255 & e.charCodeAt(r + 2)) << 16;
                    case 2:
                        n ^= (255 & e.charCodeAt(r + 1)) << 8;
                    case 1:
                        n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) + (59797 * (n >>> 16) << 16)
                }
                return (((n = 1540483477 * (65535 & (n ^= n >>> 13)) + (59797 * (n >>> 16) << 16)) ^ n >>> 15) >>> 0).toString(36)
            }
            var Oe = { animationIterationCount: 1, borderImageOutset: 1, borderImageSlice: 1, borderImageWidth: 1, boxFlex: 1, boxFlexGroup: 1, boxOrdinalGroup: 1, columnCount: 1, columns: 1, flex: 1, flexGrow: 1, flexPositive: 1, flexShrink: 1, flexNegative: 1, flexOrder: 1, gridRow: 1, gridRowEnd: 1, gridRowSpan: 1, gridRowStart: 1, gridColumn: 1, gridColumnEnd: 1, gridColumnSpan: 1, gridColumnStart: 1, msGridRow: 1, msGridRowSpan: 1, msGridColumn: 1, msGridColumnSpan: 1, fontWeight: 1, lineHeight: 1, opacity: 1, order: 1, orphans: 1, tabSize: 1, widows: 1, zIndex: 1, zoom: 1, WebkitLineClamp: 1, fillOpacity: 1, floodOpacity: 1, stopOpacity: 1, strokeDasharray: 1, strokeDashoffset: 1, strokeMiterlimit: 1, strokeOpacity: 1, strokeWidth: 1 },
                Le = /[A-Z]|^ms/g,
                Te = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                Ne = function(e) { return 45 === e.charCodeAt(1) },
                _e = function(e) { return null != e && "boolean" != typeof e },
                Re = m((function(e) { return Ne(e) ? e : e.replace(Le, "-$&").toLowerCase() })),
                je = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(Te, (function(e, t, n) { return Me = { name: t, styles: n, next: Me }, t }))
                    }
                    return 1 === Oe[e] || Ne(e) || "number" != typeof t || 0 === t ? t : t + "px"
                };

            function Ie(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return Me = { name: n.name, styles: n.styles, next: Me }, n.name;
                        if (void 0 !== n.styles) {
                            var r = n.next;
                            if (void 0 !== r)
                                for (; void 0 !== r;) Me = { name: r.name, styles: r.styles, next: Me }, r = r.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var r = "";
                            if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) r += Ie(e, t, n[i]) + ";";
                            else
                                for (var o in n) {
                                    var a = n[o];
                                    if ("object" != typeof a) null != t && void 0 !== t[a] ? r += o + "{" + t[a] + "}" : _e(a) && (r += Re(o) + ":" + je(o, a) + ";");
                                    else if (!Array.isArray(a) || "string" != typeof a[0] || null != t && void 0 !== t[a[0]]) {
                                        var l = Ie(e, t, a);
                                        switch (o) {
                                            case "animation":
                                            case "animationName":
                                                r += Re(o) + ":" + l + ";";
                                                break;
                                            default:
                                                r += o + "{" + l + "}"
                                        }
                                    } else
                                        for (var s = 0; s < a.length; s++) _e(a[s]) && (r += Re(o) + ":" + je(o, a[s]) + ";")
                                }
                            return r
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var i = Me,
                                o = n(e);
                            return Me = i, Ie(e, t, o)
                        }
                        break;
                    case "string":
                }
                if (null == t) return n;
                var a = t[n];
                return void 0 !== a ? a : n
            }
            var Me, ze = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                Pe = function(e, t, n) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var r = !0,
                        i = "";
                    Me = void 0;
                    var o = e[0];
                    null == o || void 0 === o.raw ? (r = !1, i += Ie(n, t, o)) : i += o[0];
                    for (var a = 1; a < e.length; a++) i += Ie(n, t, e[a]), r && (i += o[a]);
                    ze.lastIndex = 0;
                    for (var l, s = ""; null !== (l = ze.exec(i));) s += "-" + l[1];
                    return { name: Ae(i) + s, styles: i, next: Me }
                },
                $e = "undefined" != typeof document,
                He = {}.hasOwnProperty,
                De = (0, r.createContext)("undefined" != typeof HTMLElement ? ve({ key: "css" }) : null);
            De.Provider;
            var We = function(e) { return (0, r.forwardRef)((function(t, n) { var i = (0, r.useContext)(De); return e(t, i, n) })) };
            $e || (We = function(e) { return function(t) { var n = (0, r.useContext)(De); return null === n ? (n = ve({ key: "css" }), (0, r.createElement)(De.Provider, { value: n }, e(t, n))) : e(t, n) } });
            var Fe = (0, r.createContext)({}),
                Ve = "undefined" != typeof document,
                Ue = r.useInsertionEffect ? r.useInsertionEffect : function(e) { e() };

            function qe(e) {
                if (!Ve) return e();
                Ue(e)
            }
            var Be = function(e) {
                    var t = e.cache,
                        n = e.serialized,
                        i = e.isStringTag;
                    Ce(t, n, i);
                    var o = qe((function() { return Se(t, n, i) }));
                    if (!$e && void 0 !== o) { for (var a, l = n.name, s = n.next; void 0 !== s;) l += " " + s.name, s = s.next; return (0, r.createElement)("style", ((a = {})["data-emotion"] = t.key + " " + l, a.dangerouslySetInnerHTML = { __html: o }, a.nonce = t.sheet.nonce, a)) }
                    return null
                },
                Ge = (We((function(e, t, n) {
                    var i = e.css;
                    "string" == typeof i && void 0 !== t.registered[i] && (i = t.registered[i]);
                    var o = e.__EMOTION_TYPE_PLEASE_DO_NOT_USE__,
                        a = [i],
                        l = "";
                    "string" == typeof e.className ? l = ke(t.registered, a, e.className) : null != e.className && (l = e.className + " ");
                    var s = Pe(a, void 0, (0, r.useContext)(Fe));
                    l += t.key + "-" + s.name;
                    var c = {};
                    for (var u in e) !He.call(e, u) || "css" === u || "__EMOTION_TYPE_PLEASE_DO_NOT_USE__" === u || (c[u] = e[u]);
                    return c.ref = n, c.className = l, (0, r.createElement)(r.Fragment, null, (0, r.createElement)(Be, { cache: t, serialized: s, isStringTag: "string" == typeof o }), (0, r.createElement)(o, c))
                })), r.useInsertionEffect ? r.useInsertionEffect : r.useLayoutEffect);
            We((function(e, t) {
                var n = e.styles,
                    i = Pe([n], void 0, (0, r.useContext)(Fe));
                if (!$e) {
                    for (var o, a = i.name, l = i.styles, s = i.next; void 0 !== s;) a += " " + s.name, l += s.styles, s = s.next;
                    var c = !0 === t.compat,
                        u = t.insert("", { name: a, styles: l }, t.sheet, c);
                    return c ? null : (0, r.createElement)("style", ((o = {})["data-emotion"] = t.key + "-global " + a, o.dangerouslySetInnerHTML = { __html: u }, o.nonce = t.sheet.nonce, o))
                }
                var d = (0, r.useRef)();
                return Ge((function() {
                    var e = t.key + "-global",
                        n = new t.sheet.constructor({ key: e, nonce: t.sheet.nonce, container: t.sheet.container, speedy: t.sheet.isSpeedy }),
                        r = !1,
                        o = document.querySelector('style[data-emotion="' + e + " " + i.name + '"]');
                    return t.sheet.tags.length && (n.before = t.sheet.tags[0]), null !== o && (r = !0, o.setAttribute("data-emotion", e), n.hydrate([o])), d.current = [n, r],
                        function() { n.flush() }
                }), [t]), Ge((function() {
                    var e = d.current,
                        n = e[0];
                    if (e[1]) e[1] = !1;
                    else {
                        if (void 0 !== i.next && Se(t, i.next, !0), n.tags.length) {
                            var r = n.tags[n.tags.length - 1].nextElementSibling;
                            n.before = r, n.flush()
                        }
                        t.insert("", i, n, !1)
                    }
                }), [t, i.name]), null
            }));

            function Ze() { for (var e = arguments, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = e[r]; return Pe(n) }
            var Ye = function() {
                    var e = Ze.apply(void 0, arguments),
                        t = "animation-" + e.name;
                    return { name: t, styles: "@keyframes " + t + "{" + e.styles + "}", anim: 1, toString: function() { return "_EMO_" + this.name + "_" + this.styles + "_EMO_" } }
                },
                Xe = function e(t) {
                    for (var n = t.length, r = 0, i = ""; r < n; r++) {
                        var o = t[r];
                        if (null != o) {
                            var a = void 0;
                            switch (typeof o) {
                                case "boolean":
                                    break;
                                case "object":
                                    if (Array.isArray(o)) a = e(o);
                                    else
                                        for (var l in a = "", o) o[l] && l && (a && (a += " "), a += l);
                                    break;
                                default:
                                    a = o
                            }
                            a && (i && (i += " "), i += a)
                        }
                    }
                    return i
                };

            function Ke(e, t, n) {
                var r = [],
                    i = ke(e, r, n);
                return r.length < 2 ? n : i + t(r)
            }
            var Je = function(e) {
                    var t, n = e.cache,
                        i = e.serializedArr,
                        o = qe((function() {
                            for (var e = "", t = 0; t < i.length; t++) {
                                var r = Se(n, i[t], !1);
                                $e || void 0 === r || (e += r)
                            }
                            if (!$e) return e
                        }));
                    return $e || 0 === o.length ? null : (0, r.createElement)("style", ((t = {})["data-emotion"] = n.key + " " + i.map((function(e) { return e.name })).join(" "), t.dangerouslySetInnerHTML = { __html: o }, t.nonce = n.sheet.nonce, t))
                },
                Qe = (We((function(e, t) {
                    var n = [],
                        i = function() { var e = arguments; for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = e[o]; var a = Pe(i, t.registered); return n.push(a), Ce(t, a, !1), t.key + "-" + a.name },
                        o = { css: i, cx: function() { var e = arguments; for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = e[o]; return Ke(t.registered, i, Xe(r)) }, theme: (0, r.useContext)(Fe) },
                        a = e.children(o);
                    return !0, (0, r.createElement)(r.Fragment, null, (0, r.createElement)(Je, { cache: t, serializedArr: n }), a)
                })), "undefined" != typeof document);

            function et(e, t, n) { var r = ""; return n.split(" ").forEach((function(n) { void 0 !== e[n] ? t.push(e[n] + ";") : r += n + " " })), r }
            var tt = function(e, t, n) {
                    var r = e.key + "-" + t.name;
                    (!1 === n || !1 === Qe && void 0 !== e.compat) && void 0 === e.registered[r] && (e.registered[r] = t.styles)
                },
                nt = /[A-Z]|^ms/g,
                rt = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                it = function(e) { return 45 === e.charCodeAt(1) },
                ot = function(e) { return null != e && "boolean" != typeof e },
                at = m((function(e) { return it(e) ? e : e.replace(nt, "-$&").toLowerCase() })),
                lt = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" == typeof t) return t.replace(rt, (function(e, t, n) { return ct = { name: t, styles: n, next: ct }, t }))
                    }
                    return 1 === Oe[e] || it(e) || "number" != typeof t || 0 === t ? t : t + "px"
                };

            function st(e, t, n) {
                if (null == n) return "";
                if (void 0 !== n.__emotion_styles) return n;
                switch (typeof n) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === n.anim) return ct = { name: n.name, styles: n.styles, next: ct }, n.name;
                        if (void 0 !== n.styles) {
                            var r = n.next;
                            if (void 0 !== r)
                                for (; void 0 !== r;) ct = { name: r.name, styles: r.styles, next: ct }, r = r.next;
                            return n.styles + ";"
                        }
                        return function(e, t, n) {
                            var r = "";
                            if (Array.isArray(n))
                                for (var i = 0; i < n.length; i++) r += st(e, t, n[i]) + ";";
                            else
                                for (var o in n) {
                                    var a = n[o];
                                    if ("object" != typeof a) null != t && void 0 !== t[a] ? r += o + "{" + t[a] + "}" : ot(a) && (r += at(o) + ":" + lt(o, a) + ";");
                                    else if (!Array.isArray(a) || "string" != typeof a[0] || null != t && void 0 !== t[a[0]]) {
                                        var l = st(e, t, a);
                                        switch (o) {
                                            case "animation":
                                            case "animationName":
                                                r += at(o) + ":" + l + ";";
                                                break;
                                            default:
                                                r += o + "{" + l + "}"
                                        }
                                    } else
                                        for (var s = 0; s < a.length; s++) ot(a[s]) && (r += at(o) + ":" + lt(o, a[s]) + ";")
                                }
                            return r
                        }(e, t, n);
                    case "function":
                        if (void 0 !== e) {
                            var i = ct,
                                o = n(e);
                            return ct = i, st(e, t, o)
                        }
                        break;
                    case "string":
                }
                if (null == t) return n;
                var a = t[n];
                return void 0 !== a ? a : n
            }
            var ct, ut = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
                dt = function(e, t, n) {
                    if (1 === e.length && "object" == typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                    var r = !0,
                        i = "";
                    ct = void 0;
                    var o = e[0];
                    null == o || void 0 === o.raw ? (r = !1, i += st(n, t, o)) : i += o[0];
                    for (var a = 1; a < e.length; a++) i += st(n, t, e[a]), r && (i += o[a]);
                    ut.lastIndex = 0;
                    for (var l, s = ""; null !== (l = ut.exec(i));) s += "-" + l[1];
                    return { name: Ae(i) + s, styles: i, next: ct }
                },
                ft = p,
                mt = function(e) { return "theme" !== e },
                ht = function(e) { return "string" == typeof e && e.charCodeAt(0) > 96 ? ft : mt },
                pt = function(e, t, n) {
                    var r;
                    if (t) {
                        var i = t.shouldForwardProp;
                        r = e.__emotion_forwardProp && i ? function(t) { return e.__emotion_forwardProp(t) && i(t) } : i
                    }
                    return "function" != typeof r && n && (r = e.__emotion_forwardProp), r
                },
                gt = "undefined" != typeof document,
                vt = r.useInsertionEffect ? r.useInsertionEffect : function(e) { e() },
                yt = "undefined" != typeof document,
                bt = function(e) {
                    var t = e.cache,
                        n = e.serialized,
                        i = e.isStringTag;
                    tt(t, n, i);
                    var o = function(e) {
                        if (!gt) return e();
                        vt(e)
                    }((function() {
                        return function(e, t, n) {
                            tt(e, t, n);
                            var r = e.key + "-" + t.name;
                            if (void 0 === e.inserted[t.name]) {
                                var i = "",
                                    o = t;
                                do {
                                    var a = e.insert(t === o ? "." + r : "", o, e.sheet, !0);
                                    Qe || void 0 === a || (i += a), o = o.next
                                } while (void 0 !== o);
                                if (!Qe && 0 !== i.length) return i
                            }
                        }(t, n, i)
                    }));
                    if (!yt && void 0 !== o) { for (var a, l = n.name, s = n.next; void 0 !== s;) l += " " + s.name, s = s.next; return (0, r.createElement)("style", ((a = {})["data-emotion"] = t.key + " " + l, a.dangerouslySetInnerHTML = { __html: o }, a.nonce = t.sheet.nonce, a)) }
                    return null
                },
                wt = function e(t, n) {
                    var i, o, a = t.__emotion_real === t,
                        l = a && t.__emotion_base || t;
                    void 0 !== n && (i = n.label, o = n.target);
                    var s = pt(t, n, a),
                        c = s || ht(l),
                        u = !c("as");
                    return function() {
                        var d = arguments,
                            m = a && void 0 !== t.__emotion_styles ? t.__emotion_styles.slice(0) : [];
                        if (void 0 !== i && m.push("label:" + i + ";"), null == d[0] || void 0 === d[0].raw) m.push.apply(m, d);
                        else { m.push(d[0][0]); for (var h = d.length, p = 1; p < h; p++) m.push(d[p], d[0][p]) }
                        var g = We((function(e, t, n) {
                            var i = u && e.as || l,
                                a = "",
                                d = [],
                                f = e;
                            if (null == e.theme) {
                                for (var h in f = {}, e) f[h] = e[h];
                                f.theme = (0, r.useContext)(Fe)
                            }
                            "string" == typeof e.className ? a = et(t.registered, d, e.className) : null != e.className && (a = e.className + " ");
                            var p = dt(m.concat(d), t.registered, f);
                            a += t.key + "-" + p.name, void 0 !== o && (a += " " + o);
                            var g = u && void 0 === s ? ht(i) : c,
                                v = {};
                            for (var y in e) u && "as" === y || g(y) && (v[y] = e[y]);
                            return v.className = a, v.ref = n, (0, r.createElement)(r.Fragment, null, (0, r.createElement)(bt, { cache: t, serialized: p, isStringTag: "string" == typeof i }), (0, r.createElement)(i, v))
                        }));
                        return g.displayName = void 0 !== i ? i : "Styled(" + ("string" == typeof l ? l : l.displayName || l.name || "Component") + ")", g.defaultProps = t.defaultProps, g.__emotion_real = g, g.__emotion_base = l, g.__emotion_styles = m, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", { value: function() { return "." + o } }), g.withComponent = function(t, r) { return e(t, f({}, n, r, { shouldForwardProp: pt(g, r, !0) })).apply(void 0, m) }, g
                    }
                },
                xt = wt("ul", { target: "e1fht2ox6" })({ name: "ql8rfu", styles: "background:rgba(229, 229, 229, 0.85);border-radius:25px;display:flex;list-style:none;padding:0.25em 0.25em" }),
                Et = wt("li", { target: "e1fht2ox5" })("padding:0.1em;display:flex;align-items:center;justify-content:center;", (function(e) { return e.disable ? "pointer-events: none; filter: opacity(0.7)" : "" }), ";"),
                kt = wt("button", { target: "e1fht2ox4" })("align-items:center;background:", (function(e) { return e.theme.primary }), ";border-radius:50%;border:0;color:#fff;cursor:pointer;display:flex;filter:drop-shadow(0 0 5px rgba(0, 0, 0, 0.25));height:20px;justify-content:center;margin:0 0.2em;padding:0;transition:all 0.1s ease-in;width:20px;transform:", (function(e) { if ("TRUE" === e.rotate) return "rotate(90deg)" }), ";&:active{filter:drop-shadow(0 0 2px rgba(0, 0, 0, 0.25));transform:", (function(e) { return "TRUE" === e.rotate ? "rotate(90deg)" : "" }), " scale(0.9);}svg{width:80%;height:80%;}"),
                Ct = wt("div", { target: "e1fht2ox3" })("align-items:center;display:flex;justify-content:center;visibility:", (function(e) { return e.slideShowActive ? "hidden" : "visible" }), ";");
            wt("button", { target: "e1fht2ox2" })("align-items:center;background:", (function(e) { return e.theme.primary }), ";border-radius:50%;cursor:pointer;display:flex;height:2em;justify-content:center;margin-left:0.5em;width:2em;outline:0;color:#fff;svg{width:80%;height:80%;}");
            var St = r.memo((function(e) {
                var t = e.onNext,
                    n = e.onPrevious,
                    i = e.onFirst,
                    a = e.onLast,
                    f = e.disableLeft,
                    m = e.disableRight,
                    h = e.theme,
                    p = e.slideShowRunning,
                    g = e.onReplay,
                    v = e.slideShowEnabled,
                    y = (0, r.useContext)(o),
                    b = y.mode,
                    w = y.flipLayout,
                    x = (0, r.useMemo)((function() { return "HORIZONTAL" !== b }), [b]),
                    E = (0, r.useMemo)((function() { return w && "HORIZONTAL" === b }), []);
                return r.createElement(Ct, { slideShowActive: p, flip: E }, r.createElement(xt, { className: "timeline-controls" }, r.createElement(Et, { disable: f }, r.createElement(kt, { mode: b, theme: h, onClick: E ? a : i, title: "Go to First", "aria-label": "first", "aria-disabled": f, "aria-controls": "timeline-main-wrapper", tabIndex: f ? -1 : 0, rotate: x ? "TRUE" : "FALSE" }, r.createElement(c, null))), r.createElement(Et, { disable: f }, r.createElement(kt, { mode: b, theme: h, onClick: E ? t : n, title: "Previous", "aria-label": "previous", "aria-disabled": f, "aria-controls": "timeline-main-wrapper", tabIndex: f ? -1 : 0, rotate: x ? "TRUE" : "FALSE" }, r.createElement(l, null))), r.createElement(Et, { disable: m }, r.createElement(kt, { mode: b, theme: h, onClick: E ? n : t, title: "Next", "aria-label": "next", "aria-disabled": m, "aria-controls": "timeline-main-wrapper", rotate: x ? "TRUE" : "FALSE", tabIndex: m ? -1 : 0 }, r.createElement(s, null))), r.createElement(Et, { disable: m }, r.createElement(kt, { mode: b, theme: h, onClick: E ? i : a, title: "Go to Last", "aria-label": "last", "aria-disabled": m, "aria-controls": "timeline-main-wrapper", tabIndex: m ? -1 : 0, rotate: x ? "TRUE" : "FALSE" }, r.createElement(u, null))), r.createElement(Et, null, v && r.createElement(kt, { theme: h, onClick: g, title: "Play Slideshow", tabIndex: 0, "aria-controls": "timeline-main-wrapper", "aria-label": "Play Slideshow" }, r.createElement(d, null)))))
            }));
            St.displayName = "Timeline Control";
            var At, Ot = { exports: {} };
            At = Ot,
                function() {
                    var e = {}.hasOwnProperty;

                    function t() {
                        for (var n = arguments, r = [], i = 0; i < arguments.length; i++) {
                            var o = n[i];
                            if (o) {
                                var a = typeof o;
                                if ("string" === a || "number" === a) r.push(o);
                                else if (Array.isArray(o)) {
                                    if (o.length) {
                                        var l = t.apply(null, o);
                                        l && r.push(l)
                                    }
                                } else if ("object" === a)
                                    if (o.toString === Object.prototype.toString)
                                        for (var s in o) e.call(o, s) && o[s] && r.push(s);
                                    else r.push(o.toString())
                            }
                        }
                        return r.join(" ")
                    }
                    At.exports ? (t.default = t, At.exports = t) : window.classNames = t
                }();
            var Lt = Ot.exports,
                Tt = wt("section", { target: "emk90bu10" })("align-items:flex-start;background:", (function(e) { return e.theme.cardBgColor }), ";border-radius:4px;display:flex;", (function(e) { return e.borderLess ? "none" : "filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.2))" }), ";flex-direction:column;justify-content:flex-start;line-height:1.5em;margin:", (function(e) { return "HORIZONTAL" === e.mode ? "0 auto" : "VERTICAL_ALTERNATING" !== e.mode ? "1em 0" : "" }), ";max-width:", (function(e) { return e.maxWidth }), "px;min-height:", (function(e) { return e.minHeight }), "px;position:relative;text-align:left;width:98%;z-index:0;&:focus{outline:1px solid ", (function(e) { var t; return null === (t = e.theme) || void 0 === t ? void 0 : t.primary }), ";}"),
                Nt = wt("header", { target: "emk90bu9" })({ name: "1d3w5wq", styles: "width:100%" }),
                _t = wt("p", { target: "emk90bu8" })("color:", (function(e) { return e.theme.primary }), ";font-size:", (function(e) { return e.fontSize }), ";font-weight:600;margin:0;padding-left:0.5rem;text-align:left;width:97%;"),
                Rt = wt("p", { target: "emk90bu7" })("color:", (function(e) { return e.theme.cardForeColor }), ";font-size:", (function(e) { return e.fontSize }), ";font-weight:600;margin-top:0.5em;margin:0;padding-left:0.5em;padding-top:0.25em;&.active{color:", (function(e) { return e.theme.primary }), ";}text-align:left;width:95%;"),
                jt = wt("p", { target: "emk90bu6" })("color:", (function(e) { return e.theme.cardForeColor }), ";font-size:0.85rem;font-weight:400;margin:0;width:100%;"),
                It = wt("span", { target: "emk90bu5" })("margin-bottom:0.5rem;display:block;font-size:", (function(e) { return e.fontSize }), ";"),
                Mt = wt("div", { target: "emk90bu4" })("align-items:center;display:flex;flex-direction:column;margin:0 auto;margin-top:0.5em;margin-bottom:0.5em;", (function(e) { return e.useReadMore && !e.customContent ? "max-height: 150px;" : "" }), " overflow-x:hidden;overflow-y:auto;scrollbar-color:", (function(e) { var t; return null === (t = e.theme) || void 0 === t ? void 0 : t.primary }), " default;scrollbar-width:thin;transition:max-height 100ms linear;width:", (function(e) { return e.borderLess ? "100%" : "95%" }), ";padding:0.25em 0.5em;&::-webkit-scrollbar{width:0.3em;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.2);}&::-webkit-scrollbar-thumb{background-color:", (function(e) { var t; return null === (t = e.theme) || void 0 === t ? void 0 : t.primary }), ";outline:1px solid ", (function(e) { var t; return null === (t = e.theme) || void 0 === t ? void 0 : t.primary }), ";}&.show-less{max-height:50px;scrollbar-width:none;overflow:hidden;&::-webkit-scrollbar{width:0;}}"),
                zt = wt("span", { target: "emk90bu3" })("align-items:center;align-self:flex-end;border-radius:4px;cursor:pointer;display:", (function(e) { return e.show ? "flex" : "none" }), ";font-size:0.75rem;justify-self:flex-end;margin-bottom:0.5em;margin-left:0.5em;margin-right:0.5em;margin-top:auto;padding:0.25em;&:hover{color:", (function(e) { return e.theme.primary }), ";}"),
                Pt = wt("span", { target: "emk90bu2" })("background:", (function(e) { return e.color }), ";bottom:-0.75em;display:block;height:3px;left:0;position:absolute;", (function(e) { return !e.paused && e.startWidth && e.startWidth > 0 ? Ze("animation:", (t = e.startWidth, Ye `
  0% {
    width: ${t}px;
  }
  100% {
    width: ${0}px;
  }  
`), " ", e.duration, "ms ease-in;animation-play-state:running;") : Ze("animation-play-state:paused;width:", e.startWidth, "px;"); var t }), " svg{position:absolute;left:0;top:0;width:100%;}"),
                $t = wt("span", { target: "emk90bu1" })("align-items:center;display:flex;height:1.25em;justify-content:center;margin-left:0.2em;margin-top:0.2em;width:1.25em;", (function(e) { return e.collapsed ? "\n      transform: rotate(90deg);\n  " : "transform: rotate(-90deg)" }), ";svg{height:100%;width:100%;}"),
                Ht = wt("span", { target: "emk90bu0" })("display:flex;align-items:center;justify-content:center;width:1.5rem;height:1.5rem;position:absolute;top:50%;background:", (function(e) { return e.theme.cardBgColor }), ";transform:translateY(-50%) rotate(225deg);z-index:-1;& svg{width:100%;height:100%;fill:#fff;}", (function(e) { return "left" === e.dir ? "right: -8px;" : "left: -8px;" }), ";"),
                Dt = r.memo((function(e) {
                    var t = e.title,
                        n = e.url,
                        i = e.theme,
                        o = e.color,
                        a = e.dir,
                        l = e.active,
                        s = e.fontSize;
                    return void 0 === s && (s = "1rem"), t && i ? r.createElement(Rt, { className: l ? "active card-title" : "card-title", theme: i, style: { color: o }, dir: a, fontSize: s }, r.createElement("a", { href: n, target: "_blank", rel: "noreferrer" }, t)) : null
                }), (function() { return !0 }));
            Dt.displayName = "Timeline Title";
            var Wt = r.memo((function(e) {
                var t = e.content,
                    n = e.color,
                    i = e.dir,
                    o = e.theme,
                    a = e.fontSize;
                return t ? r.createElement(_t, { style: { color: n }, dir: i, theme: o, fontSize: a, className: "card-sub-title" }, t) : null
            }), (function() { return !0 }));
            Wt.displayName = "Timeline Content";
            var Ft = wt("div", { target: "e16bc98j5" })((function(e) { return e.cardHeight ? `min-height: ${e.cardHeight}px;` : "" }), ";align-items:center;align-self:center;background:", (function(e) { var t; return e.active ? `rgba(${null===(t=e.theme)||void 0===t?void 0:t.secondary}, 0.35)` : "" }), ";border-radius:4px;flex-direction:row;height:0;padding:0.5em;pointer-events:", (function(e) { return !e.active && e.slideShowActive ? "none" : "" }), ";position:relative;text-align:center;width:100%;", (function(e) { return "HORIZONTAL" === e.mode || "left" === e.dir ? "\n        justify-content: flex-start;\n      " : "\n        justify-content: flex-end;\n      " }), ";"),
                Vt = wt("img", { target: "e16bc98j4" })("flex:4;justify-self:center;margin-left:auto;margin-right:auto;max-height:100%;max-width:100%;object-fit:contain;visibility:", (function(e) { return e.visible ? "visible" : "hidden" }), ";"),
                Ut = wt("video", { target: "e16bc98j3" })({ name: "1936w4e", styles: "max-width:100%;max-height:100%;margin-left:auto;margin-right:auto" }),
                qt = wt("div", { target: "e16bc98j2" })("bottom:-1em;left:0;right:0;margin-right:auto;width:", (function(e) {
                    switch (e.mode) {
                        case "HORIZONTAL":
                        case "VERTICAL":
                        case "VERTICAL_ALTERNATING":
                            return "100%"
                    }
                }), ";display:flex;flex-direction:column;flex:1;border-radius:6px;padding-bottom:0.5em;"),
                Bt = wt("span", { target: "e16bc98j1" })({ name: "sb0sil", styles: "color:#a3a3a3;left:50%;position:absolute;text-align:center;top:50%;transform:translateY(-50%) translateX(-50%)" }),
                Gt = wt("iframe", { target: "e16bc98j0" })({ name: "1qkt16r", styles: "position:relative;height:100%;width:100%" }),
                Zt = function(e) {
                    var t = e.active,
                        n = e.id,
                        i = e.onMediaStateChange,
                        a = e.theme,
                        l = e.title,
                        s = e.content,
                        c = e.media,
                        u = e.slideshowActive;
                    e.hideMedia;
                    var d = e.cardHeight,
                        f = e.url,
                        m = (0, r.useRef)(null),
                        h = (0, r.useState)(!1),
                        p = h[0],
                        g = h[1],
                        v = (0, r.useContext)(o).mode;
                    (0, r.useEffect)((function() { m && (t ? m.current && m.current.play() : m.current && m.current.pause()) }), [t]);
                    var y = (0, r.useState)(!1),
                        b = y[0],
                        w = y[1],
                        x = (0, r.useCallback)((function() { w(!0) }), []),
                        E = (0, r.useCallback)((function() { g(!0), i({ id: n, paused: !1, playing: !1 }) }), []),
                        k = r.memo((function(e) { var t = e.message; return r.createElement(Bt, null, t) })),
                        C = (0, r.useMemo)((function() { return /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/.test(c.source.url) }), []),
                        S = (0, r.useMemo)((function() { return r.createElement(Gt, { frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: !0, src: `${c.source.url}${t?"?autoplay=1&enablejsapi=1":"?enablejsapi=1"}` }) }), [t]),
                        A = (0, r.useMemo)((function() { return r.createElement(Ut, { controls: !0, autoPlay: t, ref: m, onLoadedData: x, onPlay: function() { return i({ id: n, paused: !1, playing: !0 }) }, onPause: function() { return i({ id: n, paused: !0, playing: !1 }) }, onEnded: function() { return i({ id: n, paused: !1, playing: !1 }) }, onError: E }, r.createElement("source", { src: c.source.url })) }), [t]),
                        O = (0, r.useMemo)((function() { return r.createElement(Vt, { src: c.source.url, mode: v, onLoad: x, onError: E, visible: b, active: t, alt: c.name, loading: "lazy" }) }), [t, b]);
                    return k.displayName = "Error Message", r.createElement(r.Fragment, null, r.createElement(Ft, { theme: a, active: t, mode: v, slideShowActive: u, className: "card-media-wrapper", cardHeight: d }, "VIDEO" === c.type && !C && (p ? r.createElement(k, { message: "Failed to load the video" }) : A), "VIDEO" === c.type && C && S, "IMAGE" === c.type && (p ? r.createElement(k, { message: "Failed to load the image." }) : O)), r.createElement(qt, { mode: v }, r.createElement(Dt, { title: l, theme: a, active: t, url: f }), r.createElement(Wt, { content: s })))
                },
                Yt = r.memo((function(e) {
                    var t = e.active,
                        n = e.content,
                        i = e.detailedText,
                        a = e.id,
                        l = e.media,
                        c = e.onShowMore,
                        u = e.slideShowActive,
                        d = e.onElapsed,
                        f = e.theme,
                        m = e.title,
                        h = e.onClick,
                        p = e.customContent,
                        g = e.hasFocus,
                        v = e.flip,
                        y = e.branchDir,
                        b = e.url,
                        w = (0, r.useState)(!1),
                        x = w[0],
                        E = w[1],
                        k = (0, r.useRef)(null),
                        C = (0, r.useRef)(null),
                        S = (0, r.useRef)(null),
                        A = (0, r.useRef)(0),
                        O = (0, r.useRef)(0),
                        L = (0, r.useRef)(0),
                        T = (0, r.useRef)(),
                        N = (0, r.useState)(!1),
                        _ = N[0],
                        R = N[1],
                        j = (0, r.useState)(0),
                        I = j[0],
                        M = j[1],
                        z = (0, r.useState)(0),
                        P = z[0],
                        $ = z[1],
                        H = (0, r.useState)(!1),
                        D = H[0],
                        W = H[1],
                        F = (0, r.useContext)(o),
                        V = F.mode,
                        U = F.cardHeight,
                        q = F.slideItemDuration;
                    void 0 === q && (q = 2e3);
                    var B = F.useReadMore,
                        G = F.cardWidth,
                        Z = F.borderLessCards,
                        Y = F.disableAutoScrollOnClick,
                        X = F.fontSizes,
                        K = (0, r.useMemo)((function() { var e = t && u; return l ? e && "VIDEO" !== l.type : e }), [t, u]),
                        J = (0, r.useMemo)((function() { return !!i }), [i]);
                    (0, r.useEffect)((function() {
                        var e = k.current;
                        e && (e.scrollTop = 0)
                    }), [x]);
                    var Q = (0, r.useCallback)((function(e) {
                            var t = k.current;
                            if (e && t) {
                                var n = t.scrollHeight,
                                    r = t.offsetTop;
                                A.current = e.clientWidth, $(A.current), W(n + r > e.clientHeight)
                            }
                        }), [k.current]),
                        ee = (0, r.useCallback)((function(e) { q && (M(e), T.current = new Date, R(!1), L.current = window.setTimeout((function() { window.clearTimeout(L.current), R(!0), $(0), M(q), a && d && d(a) }), e)) }), []),
                        te = (0, r.useCallback)((function() {
                            if (t && u) {
                                if (window.clearTimeout(L.current), R(!0), T.current) {
                                    var e = +new Date - +T.current;
                                    O.current = e
                                }
                                S.current && $(S.current.clientWidth)
                            }
                        }), [t, u]),
                        ne = (0, r.useCallback)((function() {
                            if (t && u) {
                                if (!q) return;
                                var e = q - O.current;
                                R(!1), e > 0 && ee(e)
                            }
                        }), [t, u, q]);
                    (0, r.useEffect)((function() { q && (t && u && ($(A.current), ee(q)), t && g && C.current && C.current.focus()) }), [t, u]), (0, r.useEffect)((function() { g && t && C.current && C.current.focus() }), [g, t]);
                    var re = (0, r.useMemo)((function() { return B && i && !p }), []),
                        ie = (0, r.useCallback)((function(e) { u && (e.playing ? te() : e.paused && _ && a && d && d(a)) }), [_, u]),
                        oe = (0, r.useMemo)((function() { return Lt(t ? "timeline-card-content active" : "timeline-card-content ") }), [t]),
                        ae = (0, r.useMemo)((function() { return Lt(x || p || !B ? "card-description" : "show-less card-description") }), [x, p]),
                        le = (0, r.useCallback)((function() {
                            (t && _ || !u) && (E(!x), c())
                        }), [t, _, u, x]),
                        se = (0, r.useMemo)((function() { return v ? "right" === y ? "left" : "right" : y }), [y, v]),
                        ce = (0, r.useMemo)((function() { return ["VERTICAL", "VERTICAL_ALTERNATING"].some((function(e) { return e === V })) }), [V]);
                    return r.createElement(Tt, { className: oe, minHeight: U, maxWidth: G, mode: V, noMedia: !l, onClick: function(e) { e.stopPropagation(), !u && h && a && !Y && h(a) }, onMouseEnter: te, onMouseLeave: ne, ref: Q, tabIndex: 0, theme: f, borderLess: Z }, r.createElement(Nt, null, !l && r.createElement(Dt, { title: m, theme: f, url: b, fontSize: null == X ? void 0 : X.cardTitle }), !l && r.createElement(Wt, { content: n, theme: f })), l && r.createElement(Zt, { active: t, cardHeight: U, content: n, hideMedia: x, id: a, media: l, onMediaStateChange: ie, slideshowActive: u, theme: f, title: m, url: b }), r.createElement(Mt, { "aria-expanded": x, className: ae, customContent: !!p, ref: k, theme: f, useReadMore: B, borderLess: Z }, p ? r.createElement(r.Fragment, null, p) : r.createElement(jt, { className: x ? "active" : "", ref: k, theme: f }, Array.isArray(i) ? i.map((function(e, t) { return r.createElement(It, { key: t, fontSize: null == X ? void 0 : X.cardText }, e) })) : i)), re && D ? r.createElement(zt, { className: "show-more", onClick: le, onKeyPress: function(e) { "Enter" === e.key && le() }, role: "button", show: J, theme: f, tabIndex: 0 }, r.createElement("span", null, x ? "read less" : "read more"), r.createElement($t, { collapsed: !x }, r.createElement(s, null))) : null, K && r.createElement(Pt, { color: f && f.primary, duration: I, paused: _, ref: S, startWidth: P }), ce && r.createElement(Ht, { dir: se, theme: f }))
                }));
            Yt.displayName = "TimelineCardContent";
            var Xt = wt("div", { target: "ergoa4r0" })("border-radius:0.2rem;font-size:0.9rem;font-weight:600;overflow:hidden;padding:0.25rem;visibility:", (function(e) { return e.hide ? "hidden" : "visible" }), ";text-align:", (function(e) { return e.align ? e.align : "" }), ";&.active{background:", (function(e) { var t; return null === (t = e.theme) || void 0 === t ? void 0 : t.secondary }), ";color:", (function(e) { var t, n, r; return (null === (t = e.theme) || void 0 === t ? void 0 : t.titleColor) ? null === (n = e.theme) || void 0 === n ? void 0 : n.titleColor : null === (r = e.theme) || void 0 === r ? void 0 : r.primary }), ";}"),
                Kt = function(e) {
                    var t = e.title,
                        n = e.active,
                        i = e.theme,
                        o = e.align,
                        a = (0, r.useMemo)((function() { return Lt("timeline-item-title", n ? "active" : "") }), [n]);
                    return r.createElement(Xt, { className: a, theme: i, hide: !t, align: o }, t)
                };
            var Jt = wt("div", { target: "e5foh875" })({ name: "1gqu14n", styles: "align-items:center;border:1px solid transparent;display:flex;justify-content:center;position:relative;width:100%;height:100%;&.vertical{justify-content:flex-start;}" });
            wt("div", { target: "e5foh874" })();
            var Qt = Ye `
  from {
    transform: scale(1.4);
  }
  to {
    transform: scale(1);
  }
`,
                en = Ye `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
                tn = wt("div", { target: "e5foh873" })({ name: "15e9q2n", styles: "align-items:center;display:flex;flex-direction:column;justify-content:center;width:5em" }),
                nn = wt("div", { target: "e5foh872" })("border-radius:50%;cursor:pointer;height:", (function(e) { return e.dimension }), "px;width:", (function(e) { return e.dimension }), "px;&.active{&.using-icon{}&:not(.using-icon){transform:scale(1.25);}&::after{border-radius:50%;content:'';display:block;height:", (function(e) { return e.dimension ? Math.round(.75 * e.dimension) : 20 }), "px;width:", (function(e) { return e.dimension ? Math.round(.75 * e.dimension) : 20 }), "px;left:50%;position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);z-index:-1;}}&:not(.using-icon){background:", (function(e) { var t; return null === (t = e.theme) || void 0 === t ? void 0 : t.primary }), ";&.active{&::after{background:", (function(e) { return e.theme.secondary }), ";}}&.in-active{animation:", Qt, " 0.1s ease-in;}}&.using-icon{background:#fff;display:flex;align-items:center;justify-content:center;transform:scale(1.25);img{max-width:90%;max-height:90%;}}"),
                rn = wt("div", { target: "e5foh871" })({ name: "1lrpu6z", styles: "display:flex;align-items:center;justify-content:flex-start;&.vertical{margin-bottom:1em;}&.horizontal{position:absolute;top:0;}" }),
                on = wt("div", { target: "e5foh870" })("align-items:flex-start;animation:", en, " 0.25s ease-in;outline:2px solid ", (function(e) { var t; return e.highlight && e.active ? null === (t = e.theme) || void 0 === t ? void 0 : t.primary : "transparent" }), ";margin:1rem;&.horizontal{min-width:400px;}&.vertical{width:calc(100% - 5em);margin-left:auto;flex-direction:column;}"),
                an = function(e) {
                    var t = e.active,
                        n = e.autoScroll,
                        a = e.cardDetailedText,
                        l = e.cardSubtitle,
                        s = e.cardTitle,
                        c = e.url,
                        u = e.id,
                        d = e.media,
                        f = e.onClick,
                        m = e.onElapsed,
                        h = e.slideShowRunning,
                        p = e.theme,
                        g = e.title,
                        v = e.wrapperId,
                        y = e.customContent,
                        b = e.hasFocus,
                        w = e.iconChild,
                        x = (0, r.useRef)(null),
                        E = (0, r.useRef)(null),
                        k = (0, r.useRef)(null),
                        C = (0, r.useContext)(o),
                        S = C.mode,
                        A = C.cardPositionHorizontal,
                        O = C.timelineCircleDimension,
                        L = C.disableClickOnCircle,
                        T = C.cardLess,
                        N = C.showAllCardsHorizontal;
                    (0, r.useEffect)((function() {
                        if (t) {
                            var e = x.current,
                                r = E.current;
                            if (e && r) {
                                var i = e.offsetLeft,
                                    o = r.offsetLeft;
                                n({ pointOffset: i + o, pointWidth: e.clientWidth })
                            }
                        }
                    }), [t, n, S]);
                    var _ = (0, r.useCallback)((function() {}), []),
                        R = (0, r.useMemo)((function() { return null == S ? void 0 : S.toLowerCase() }), [S]),
                        j = (0, r.useMemo)((function() { return Lt("timeline-horz-card-wrapper", R, "TOP" === A ? "bottom" : "top", N ? "show-all" : "") }), [S, A]),
                        I = (0, r.useMemo)((function() { return Lt(R, A) }), []),
                        M = (0, r.useMemo)((function() { return Lt("timeline-circle", { "using-icon": !!w }, R, t ? "active" : "in-active") }), [t]),
                        z = (0, r.useMemo)((function() { return r.createElement(on, { className: j, ref: k, id: `timeline-card-${u}`, theme: p, active: t, highlight: N, tabIndex: 0 }, r.createElement(Yt, { content: l, active: t, title: s, url: c, detailedText: a, onShowMore: _, theme: p, slideShowActive: h, media: d, onElapsed: m, id: u, customContent: y, hasFocus: b, onClick: f })) }), [t, h]),
                        P = (0, r.useMemo)((function() { return t && !T || N }), [t, T, N]);
                    return r.createElement(Jt, { ref: E, className: R, "data-testid": "timeline-item" }, P && function() { var e = document.getElementById(v); if (e) return i.createPortal(z, e) }(), r.createElement(tn, null, r.createElement(nn, { className: M, onClick: function() { L || !f || h || f(u) }, ref: x, "data-testid": "timeline-circle", theme: p, "aria-label": g, dimension: O }, w || null)), r.createElement(rn, { className: I, "data-testid": "timeline-title" }, r.createElement(Kt, { title: g, active: t, theme: p })))
                },
                ln = wt("ul", { target: "e10s9yks1" })("display:flex;list-style:none;margin:0;width:100%;direction:", (function(e) { return e.flipLayout ? "rtl" : "ltr" }), ";&.vertical{flex-direction:column;}&.horizontal{flex-direction:row;}"),
                sn = wt("li", { target: "e10s9yks0" })("width:", (function(e) { return e.width }), "px;visibility:hidden;display:flex;align-items:center;justify-content:center;height:100px;flex-direction:column;&.vertical{margin-bottom:2rem;width:100%;}&.visible{visibility:visible;}"),
                cn = function(e) {
                    var t = e.items,
                        n = e.handleItemClick,
                        i = e.autoScroll,
                        a = e.wrapperId,
                        l = e.theme,
                        s = e.slideShowRunning,
                        c = e.onElapsed,
                        u = e.contentDetailsChildren,
                        d = e.hasFocus,
                        f = e.iconChildren,
                        m = (0, r.useContext)(o),
                        h = m.mode;
                    void 0 === h && (h = "HORIZONTAL");
                    var p = m.itemWidth;
                    void 0 === p && (p = 200);
                    var g = m.cardHeight,
                        v = m.flipLayout,
                        y = m.showAllCardsHorizontal,
                        b = (0, r.useMemo)((function() { return Lt(h.toLowerCase(), "timeline-horizontal-container", y ? "show-all-cards-horizontal" : "") }), [h, y]),
                        w = r.Children.toArray(f);
                    return r.createElement(ln, { className: b, flipLayout: v, "data-testid": "timeline-collection" }, t.map((function(e, t) { return r.createElement(sn, { key: e.id, width: p, className: Lt(e.visible ? "visible" : "", "timeline-horz-item-container") }, r.createElement(an, Object.assign({}, e, { onClick: n, autoScroll: i, mode: h, wrapperId: a, theme: l, slideShowRunning: s, cardHeight: g, onElapsed: c, customContent: u ? u[t] : null, hasFocus: d, iconChild: w[t], active: e.active }))) })))
                };

            function un() { return r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "prefix__feather prefix__feather-menu" }, r.createElement("path", { d: "M3 12h18M3 6h18M3 18h18" })) }
            var dn, fn = Ye `
  from {
    width: 30px;
    height: 30px;
  }
  
  to: {
    width: 200px;
    height: 50%;
  }
  `,
                mn = Ye `
  from {
    width: 200px;
    height: 50%;
  }
  
  to: {
    width: 30px;
    height: 30px;
  }
`,
                hn = wt("div", { target: "e3ufu3w6" })("animation:", (function(e) { return e.open ? fn : mn }), ";animation-duration:0.2s;animation-timing-function:ease-in;background:rgba(255, 255, 255, 0.98);border:1px solid ", (function(e) { return e.open ? "#f5f5f5" : "none" }), ";height:50%;position:absolute;top:1rem;width:100%;z-index:9000;", (function(e) { return e.position === dn.left ? "left: 1rem;" : "right: 3rem;" }), ";", (function(e) { return e.open ? "\n    width: 200px;\n    height: 50%;\n    box-shadow: 0 5px 10px 2px rgba(0,0,0,0.2);\n    overflow-y: auto;" : "width: 30px; height: 30px;" }), ";"),
                pn = wt("aside", { target: "e3ufu3w5" })({ name: "uioci2", styles: "align-items:center;border-radius:4px;display:flex;justify-content:center" }),
                gn = wt("button", { target: "e3ufu3w4" })("align-items:center;align-self:flex-end;background:#fff;border-radius:4px;border:0;box-shadow:", (function(e) { return e.open ? "none" : "0 0 10px 2px rgba(0,0,0,0.2)" }), ";cursor:pointer;display:flex;height:30px;justify-content:center;padding:0;width:30px;", (function(e) { return e.position === dn.left ? "margin-right: auto;" : "margin-left: auto;" }), ";& svg{width:70%;height:70%;}& svg path{color:", (function(e) { return e.theme.primary }), ";}"),
                vn = wt("ul", { target: "e3ufu3w3" })({ name: "592b28", styles: "display:flex;flex-direction:column;height:100%;list-style:none;margin:0;overflow-y:auto;padding:0;width:80%" }),
                yn = wt("li", { target: "e3ufu3w2" })({ name: "1680msm", styles: "align-items:center;display:flex;font-size:0.9rem;justify-content:flex-start;margin:0.75rem 0;cursor:pointer;position:relative;&:not(:last-child)::after{content:'';display:block;width:100%;position:absolute;height:1px;background:#ddd;left:0;right:0;margin:0 auto;bottom:-50%;}" }),
                bn = wt("span", { target: "e3ufu3w1" })("font-size:0.75rem;color:", (function(e) { return e.selected ? e.theme.primary : "" }), ";padding-left:0.25rem;&:hover{color:", (function(e) { return e.theme.primary }), ";}"),
                wn = wt("span", { target: "e3ufu3w0" })("align-items:center;display:flex;justify-content:center;margin-right:1rem;position:relative;&::after{content:'';display:block;position:absolute;width:8px;height:8px;border-radius:50%;background:", (function(e) { return e.selected ? `${e.theme.secondary}` : `${e.theme.primary}` }), ";left:0;margin:0 auto;border:", (function(e) { return e.selected ? `2px solid ${e.theme.secondary}` : `2px solid ${e.theme.primary}` }), ";}");

            function xn() { return r.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", className: "prefix__feather prefix__feather-x" }, r.createElement("path", { d: "M18 6L6 18M6 6l12 12" })) }! function(e) { e[e.left = 0] = "left", e[e.right = 1] = "right" }(dn || (dn = {}));
            var En = function(e) {
                var t = e.items;
                void 0 === t && (t = []);
                var n = e.onSelect,
                    i = e.theme,
                    o = e.mode,
                    a = (0, r.useState)(!1),
                    l = a[0],
                    s = a[1],
                    c = (0, r.useState)([]),
                    u = c[0],
                    d = c[1],
                    f = (0, r.useCallback)((function() { return s((function(e) { return !e })) }), []),
                    m = (0, r.useState)(!1),
                    h = m[0],
                    p = m[1],
                    g = (0, r.useMemo)((function() { return "VERTICAL" === o ? dn.left : "VERTICAL_ALTERNATING" === o ? dn.right : dn.left }), [o]);
                (0, r.useEffect)((function() { d(t.map((function(e) { return Object.assign({}, e, { selected: !1 }) }))) }), [t.length]), (0, r.useEffect)((function() { l ? setTimeout((function() { p(l) }), 300) : p(l) }), [l]);
                var v = (0, r.useCallback)((function(e, t) { d((function(e) { return e.map((function(e) { return Object.assign({}, e, { selected: e.id === t }) })) })), n && n(e) }), []);
                return r.createElement(hn, { position: g, open: l }, r.createElement(gn, { onClick: f, theme: i, open: l, position: g }, l ? r.createElement(xn, null) : r.createElement(un, null)), r.createElement(pn, { open: l }, h && r.createElement(vn, null, u.map((function(e, t) { return r.createElement(yn, { key: e.id, onClick: function() { return v(t, e.id) } }, r.createElement(wn, { theme: i, selected: e.selected }), r.createElement(bn, { theme: i, selected: e.selected }, e.name)) })))))
            };
            var kn = wt("div", { target: "eecm4uk5" })({ name: "1ls5r8i", styles: "display:flex;flex-direction:column;width:100%;padding:1em;outline:0" }),
                Cn = Ye `
  from {
    opacity: 0;
    visibility: hidden;
  }
  to {
    opacity: 1;
    visibility: visible;
  }
`,
                Sn = wt("div", { target: "eecm4uk4" })("display:flex;position:relative;visibility:hidden;width:100%;align-items:stretch;&.left{margin-right:auto;}&.right{margin-left:auto;}&.visible{visibility:visible;}min-height:", (function(e) { return e.cardHeight }), "px;"),
                An = wt("div", { target: "eecm4uk3" })("align-items:center;display:flex;justify-content:center;position:relative;width:", (function(e) { return e.cardLess ? "5%" : "10%" }), ";&.left{order:2;}&.right{order:1;}&::after{background:", (function(e) { return e.bg }), ";content:'';display:block;height:100%;left:0;margin-left:auto;margin-right:auto;position:absolute;right:0;width:", (function(e) { return e.width ? `${e.width}px` : "4px" }), ";z-index:0;}"),
                On = wt("div", { target: "eecm4uk2" })("visibility:hidden;position:relative;display:flex;align-items:center;min-height:", (function(e) { return e.height ? `${e.height}px` : "80px" }), ";", (function(e) { return e.alternateCards ? "width: 50%;" : e.noTitle ? "width: 90%;" : "width: 75%;" }), " ", (function(e) { return e.flip ? "\n        justify-content: flex-end;\n        &.left {\n          order: 3;\n        }\n        &.right {\n          order: 1;\n        }\n      " : "\n        &.left {\n          order: 1;\n          justify-content: flex-end;\n        }\n        &.right {\n          order: 3;\n          justify-content: flex-start;\n        }\n      " }), " &.visible{visibility:visible;animation:", Cn, " 0.25s ease-in;}"),
                Ln = wt("div", { target: "eecm4uk1" })({ name: "179t5g5", styles: "position:relative;z-index:1" }),
                Tn = wt("div", { target: "eecm4uk0" })("align-items:center;display:", (function(e) { return e.hide && "VERTICAL" === e.mode ? "none" : "flex" }), ";", (function(e) { return e.alternateCards ? "width: 50%" : "width: 15%" }), ";&.left{justify-content:", (function(e) { return e.flip ? "flex-end" : "flex-start" }), ";order:", (function(e) { return e.flip && "VERTICAL_ALTERNATING" === e.mode ? "1" : "3" }), ";}&.right{", (function(e) { return e.flip ? "\n      order: 3;\n      justify-content: flex-start;" : "order: 1;\n    justify-content: flex-end;" }), ";}"),
                Nn = function(e) {
                    var t = e.className,
                        n = e.id,
                        i = e.onClick,
                        o = e.active,
                        a = e.onActive,
                        l = e.theme,
                        s = e.alternateCards,
                        c = e.slideShowRunning,
                        u = e.iconChild,
                        d = e.timelineCircleDimension,
                        f = e.lineWidth,
                        m = e.disableClickOnCircle,
                        h = e.cardLess,
                        p = (0, r.useRef)(null);
                    (0, r.useEffect)((function() {
                        if (o) {
                            var e = p.current;
                            e && a(e.offsetTop)
                        }
                    }), [o]);
                    var g = (0, r.useMemo)((function() { return Lt({ active: o, "using-icon": !!u }) }), [o, u]),
                        v = (0, r.useMemo)((function() { return !m && { onClick: function(e) { e.stopPropagation(), n && i && !c && i(n) } } }), []);
                    return r.createElement(An, { width: f, alternateCards: s, bg: l && l.primary, className: t, "data-testid": "tree-leaf", role: "button", cardLess: h }, r.createElement(Ln, Object.assign({}, { className: `${t} timeline-vertical-circle` }, v, { ref: p, role: "button", "data-testid": "tree-leaf-click", "aria-label": "select timeline" }), r.createElement(nn, { className: g, theme: l, dimension: d }, u || null)))
                },
                _n = function(e) {
                    var t = (0, r.useRef)(null),
                        n = e.active,
                        i = e.alternateCards,
                        a = e.cardDetailedText,
                        l = e.cardSubtitle,
                        s = e.cardTitle,
                        c = e.url,
                        u = e.className,
                        d = e.contentDetailsChildren,
                        f = e.iconChild,
                        m = e.hasFocus,
                        h = e.id,
                        p = e.media,
                        g = e.onActive,
                        v = e.onClick,
                        y = e.onElapsed,
                        b = e.slideShowRunning,
                        w = e.theme,
                        x = e.title,
                        E = e.visible,
                        k = function(e) {
                            if (t.current) {
                                var n = t.current,
                                    r = n.offsetTop,
                                    i = n.clientHeight;
                                g(r + e, r, i)
                            }
                        },
                        C = (0, r.useContext)(o),
                        S = C.cardHeight,
                        A = C.mode,
                        O = C.flipLayout,
                        L = C.timelineCircleDimension,
                        T = C.lineWidth,
                        N = C.disableClickOnCircle,
                        _ = C.cardLess,
                        R = (0, r.useCallback)((function() { setTimeout((function() { k(0) }), 100) }), []),
                        j = (0, r.useMemo)((function() { return r.createElement(Tn, { className: u, alternateCards: i, mode: A, hide: !x, flip: O }, r.createElement(Kt, { title: x, active: n, theme: w, align: O ? "left" : "right" })) }), [n]),
                        I = (0, r.useMemo)((function() { var e; return Lt(((e = {})[u] = !0, e), "vertical-item-row", E ? "visible" : "") }), []),
                        M = (0, r.useMemo)((function() { var e, t = Lt("card-content-wrapper", E ? "visible" : "", ((e = {})[u] = !0, e)); return r.createElement(On, { className: t, alternateCards: i, noTitle: !x, flip: O, height: S }, !_ && r.createElement(Yt, { active: n, branchDir: u, content: l, customContent: d, detailedText: a, hasFocus: m, id: h, media: p, onClick: v, onElapsed: y, onShowMore: R, slideShowActive: b, theme: w, title: s, url: c, flip: O })) }), [m, b, n, E]),
                        z = (0, r.useMemo)((function() { return r.createElement(Nn, { active: n, alternateCards: i, className: u, id: h, mode: A, onActive: k, onClick: v, slideShowRunning: b, iconChild: f, theme: w, timelineCircleDimension: L, lineWidth: T, disableClickOnCircle: N, cardLess: _ }) }), [b, n]);
                    return r.createElement(Sn, { alternateCards: i, cardHeight: S, className: I, "data-testid": "vertical-item-row", key: h, ref: t, cardLess: _, role: "listitem" }, j, M, z)
                },
                Rn = function(e) {
                    var t = e.alternateCards;
                    void 0 === t && (t = !0);
                    var n = e.autoScroll,
                        i = e.contentDetailsChildren,
                        o = e.enableOutline,
                        a = e.hasFocus,
                        l = e.iconChildren,
                        s = e.items,
                        c = e.mode,
                        u = e.onClick,
                        d = e.onElapsed,
                        f = e.onOutlineSelection,
                        m = e.slideShowRunning,
                        h = e.theme,
                        p = e.cardLess,
                        g = (0, r.useCallback)((function(e, t, r) { n({ contentHeight: r, contentOffset: t, pointOffset: e }) }), []),
                        v = (0, r.useCallback)((function() {}), []),
                        y = (0, r.useMemo)((function() { return s.map((function(e) { return { id: Math.random().toString(16).slice(2), name: e.title } })) }), [s.length]);
                    return r.createElement(kn, { "data-testid": "tree-main", role: "list" }, o && r.createElement(En, { theme: h, mode: c, items: y, onSelect: f }), s.map((function(e, n) {
                        var o;
                        o = t && n % 2 == 0 ? "left" : "right";
                        var s = i && i[n] || null,
                            c = l && l[n] || null;
                        return r.createElement(_n, Object.assign({}, e, { alternateCards: t, className: o, contentDetailsChildren: s, iconChild: c, hasFocus: a, index: n, key: e.id, onActive: g, onClick: u, onElapsed: d, onShowMore: v, slideShowRunning: m, theme: h, cardLess: p }))
                    })))
                },
                jn = wt("div", { target: "e1gmwefz5" })("display:flex;flex-direction:column;height:100%;&:focus{outline:0;}overflow:hidden;position:relative;user-select:none;width:100%;", (function(e) { return "TOP" === e.cardPositionHorizontal ? "\n    & > div:nth-of-type(1) {\n      order: 2;\n    }\n    & > div:nth-of-type(2) {\n      order: 1; \n    }\n    & > div:nth-of-type(3) {\n      order: 3;\n    }\n  " : "" }), ";&.horizontal{justify-content:flex-start;}&.js-focus-visible :focus:not(.focus-visible){outline:0;}&.js-focus-visible .focus-visible{outline:2px solid #528deb;}"),
                In = wt("div", { target: "e1gmwefz4" })("align-items:flex-start;display:flex;justify-content:center;overflow-y:auto;overflow-x:hidden;overscroll-behavior:contain;", (function(e) { return "HORIZONTAL" === e.mode ? "position: relative" : "" }), ";scroll-behavior:smooth;scrollbar-color:", (function(e) { return e.theme.primary }), " default;scrollbar-width:thin;width:100%;&::-webkit-scrollbar{width:0.5em;height:0;}&::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0, 0, 0, 0.2);}&::-webkit-scrollbar-thumb{background-color:", (function(e) { return e.theme.primary }), ";outline:1px solid ", (function(e) { return e.theme.primary }), ";}&.horizontal{height:6rem;}padding:", (function(e) { return e.scrollable ? "" : "0 1rem 0" }), ";"),
                Mn = wt("div", { target: "e1gmwefz3" })({ name: "1k315ys", styles: "align-items:center;bottom:0;display:flex;left:0;position:absolute;transition:all 0.2s ease;&.vertical{align-items:flex-start;height:100%;justify-content:flex-start;width:100%;}" }),
                zn = wt("div", { target: "e1gmwefz2" })("background:", (function(e) { return e.color }), ";height:", (function(e) { return `${e.height}px` }), ";left:0;margin-left:auto;margin-right:auto;position:absolute;right:0;width:100%;"),
                Pn = wt("div", { target: "e1gmwefz1" })("align-items:center;display:flex;justify-content:center;min-height:3rem;filter:", (function(e) { return e.active ? "opacity(1);" : "opacity(0.9);" }), ";&.hide{visibility:hidden;}&.show{visibility:visible;}"),
                $n = wt("div", { target: "e1gmwefz0" })("margin-left:auto;margin-right:auto;width:98%;display:flex;align-items:flex-start;justify-content:", (function(e) { return e.showAllCards ? "flex-start" : "center" }), ";overflow-x:hidden;"),
                Hn = function(e) {
                    var t = e.activeTimelineItem,
                        n = e.contentDetailsChildren,
                        i = e.iconChildren,
                        a = e.items;
                    void 0 === a && (a = []);
                    var l = e.onFirst,
                        s = e.onLast,
                        c = e.onNext,
                        u = e.onPrevious,
                        d = e.onRestartSlideshow,
                        f = e.onTimelineUpdated,
                        m = e.onItemSelected,
                        h = e.onOutlineSelection,
                        p = e.slideShowEnabled,
                        g = e.slideShowRunning,
                        v = e.theme,
                        y = (0, r.useContext)(o),
                        b = y.scrollable;
                    void 0 === b && (b = !0);
                    var w = y.mode;
                    void 0 === w && (w = "HORIZONTAL");
                    var x = y.hideControls,
                        E = y.itemWidth;
                    void 0 === E && (E = 200);
                    var k = y.disableNavOnKey,
                        C = y.cardPositionHorizontal,
                        S = y.onScrollEnd,
                        A = y.enableOutline,
                        O = y.lineWidth,
                        L = y.flipLayout,
                        T = y.showAllCardsHorizontal,
                        N = function(e, t) {
                            var n = (0, r.useState)(0),
                                i = n[0],
                                o = n[1];
                            return [i, (0, r.useMemo)((function() {
                                return function(n, r) {
                                    var i = n.clientWidth,
                                        a = n.scrollLeft,
                                        l = n.scrollTop,
                                        s = n.clientHeight,
                                        c = r.pointOffset,
                                        u = r.pointWidth,
                                        d = r.contentHeight,
                                        f = r.contentOffset;
                                    if (c)
                                        if ("HORIZONTAL" === e && t && u) {
                                            var m = a + i,
                                                h = c + u,
                                                p = c - a,
                                                g = m - c;
                                            c >= a && h <= m || c < a && h > a || h > m && c < m ? (p <= t && p >= 0 || g <= t && g >= 0) && o(c - t) : o(c - t)
                                        } else if ("VERTICAL" === e || "VERTICAL_ALTERNATING" === e) {
                                        if (!f || !d) return;
                                        var v = l + s,
                                            y = f + d,
                                            b = f - d,
                                            w = !(f >= l && y <= v) || f < l && y > l || y > v && f < v;
                                        w && b + d < v ? o(b + Math.round(d / 2)) : w && o(b)
                                    }
                                }
                            }), [e, t])]
                        }(w, E),
                        _ = N[0],
                        R = N[1],
                        j = (0, r.useRef)(null),
                        I = (0, r.useState)(!1),
                        M = I[0],
                        z = I[1],
                        P = (0, r.useRef)(null),
                        $ = (0, r.useRef)(null),
                        H = (0, r.useMemo)((function() { if (!g) { if ("boolean" == typeof b) return b; if ("object" == typeof b && b.scrollbar) return b.scrollbar } }), [g, b]),
                        D = (0, r.useRef)("react-chrono-timeline"),
                        W = (0, r.useCallback)((function() { return M && c() }), [M, c]),
                        F = (0, r.useCallback)((function() { return M && u() }), [M, u]),
                        V = (0, r.useCallback)((function() { return M && l() }), [M, l]),
                        U = (0, r.useCallback)((function() { return M && s() }), [M, s]),
                        q = function(e, t) {
                            if (e) {
                                for (var n = 0; n < a.length; n++)
                                    if (a[n].id === e) { t && n < a.length - 1 ? f(n + 1) : f(n); break }
                                var r = a.find((function(t) { return t.id === e }));
                                r && m && m(r)
                            }
                        };
                    (0, r.useEffect)((function() {
                        var e;
                        if (a.length && a[t]) {
                            var n = a[t];
                            if (m && m(a[t]), "HORIZONTAL" === w) {
                                var r = null === (e = P.current) || void 0 === e ? void 0 : e.querySelector(`#timeline-card-${n.id}`);
                                setTimeout((function() { null == r || r.scrollIntoView({ behavior: "smooth", inline: "center" }) }), 100)
                            }
                        }
                    }), [t]);
                    var B = (0, r.useCallback)((function(e) {
                        var t = $.current;
                        t && R(t, e)
                    }), [R]);
                    return (0, r.useEffect)((function() {
                        var e = $.current;
                        e && ("HORIZONTAL" === w ? e.scrollLeft = _ : e.scrollTop = _)
                    }), [_]), (0, r.useEffect)((function() {
                        setTimeout((function() {
                            var e = $.current;
                            if (e) {
                                var t = e.querySelectorAll(".vertical-item-row");
                                Array.from(t).forEach((function(e) { j.current && j.current.observe(e) }))
                            }
                        }), 0);
                        var e = function(e, t) { e.querySelectorAll("img,video").forEach((function(e) { return e.style.visibility = "hide" === t ? "hidden" : "visible" })) };
                        return "HORIZONTAL" !== w && (j.current = new IntersectionObserver((function(t) {
                                t.forEach((function(t) {
                                    var n = t.target;
                                    t.isIntersecting ? e(n, "show") : (e(n, "hide"), n.querySelectorAll("iframe").forEach((function(e) {
                                        var t;
                                        null === (t = e.contentWindow) || void 0 === t || t.postMessage('{"event":"command","func":"stopVideo","args":""}', "*")
                                    })))
                                }))
                            }), { root: $.current, threshold: 0 })),
                            function() { j.current && j.current.disconnect() }
                    }), []), r.createElement(jn, { tabIndex: 0, onKeyDown: function(e) { var t;!k && !g && (t = e.key, "HORIZONTAL" === w && "ArrowRight" === t ? L ? F() : W() : "HORIZONTAL" === w && "ArrowLeft" === t ? L ? W() : F() : "VERTICAL" !== w && "VERTICAL_ALTERNATING" !== w || "ArrowDown" !== t ? "VERTICAL" !== w && "VERTICAL_ALTERNATING" !== w || "ArrowUp" !== t ? "Home" === t ? V() : "End" === t && U() : F() : W()) }, className: `${w.toLowerCase()} js-focus-visible focus-visible`, cardPositionHorizontal: C, onMouseDownCapture: function() { z(!0) } }, r.createElement(In, {
                        ref: $,
                        scrollable: H,
                        className: `${w.toLowerCase()} timeline-main-wrapper`,
                        id: "timeline-main-wrapper",
                        theme: v,
                        mode: w,
                        onScroll: function(e) {
                            var t = e.target,
                                n = 0;
                            "VERTICAL" === w || "VERTICAL_ALTERNATING" === w ? (n = t.scrollTop + t.clientHeight, t.scrollHeight - n < 1 && (null == S || S())) : (n = t.scrollLeft + t.offsetWidth, t.scrollWidth === n && (null == S || S()))
                        }
                    }, "VERTICAL_ALTERNATING" === w ? r.createElement(Rn, { activeTimelineItem: t, autoScroll: B, contentDetailsChildren: n, hasFocus: M, iconChildren: i, items: a, mode: w, onClick: q, onElapsed: function(e) { return q(e, !0) }, onOutlineSelection: h, slideShowRunning: g, theme: v, enableOutline: A }) : null, "HORIZONTAL" === w ? r.createElement(Mn, { className: w.toLowerCase() }, r.createElement(zn, { color: v && v.primary, height: O }), r.createElement(cn, { autoScroll: B, contentDetailsChildren: n, handleItemClick: q, hasFocus: M, iconChildren: i, items: a, mode: w, onElapsed: function(e) { return q(e, !0) }, slideShowRunning: g, theme: v, wrapperId: D.current })) : null, "VERTICAL" === w ? r.createElement(Rn, { activeTimelineItem: t, alternateCards: !1, autoScroll: B, contentDetailsChildren: n, hasFocus: M, iconChildren: i, items: a, mode: w, onClick: q, onElapsed: function(e) { return q(e, !0) }, onOutlineSelection: h, slideShowRunning: g, theme: v, enableOutline: A }) : null), !x && r.createElement(Pn, { mode: w }, r.createElement(St, { disableLeft: L ? t === a.length - 1 : 0 === t, disableRight: L ? 0 === t : t === a.length - 1, id: D.current, onFirst: V, onLast: U, onNext: W, onPrevious: F, onReplay: d, slideShowEnabled: p, slideShowRunning: g, theme: v })), r.createElement($n, { id: D.current, showAllCards: T, ref: P }))
                },
                Dn = r.Children.toArray,
                Wn = function(e) {
                    var t = e.allowDynamicUpdate;
                    void 0 === t && (t = !1);
                    var n = e.children,
                        i = e.items,
                        o = e.onScrollEnd,
                        l = e.slideShow;
                    void 0 === l && (l = !1);
                    var s = e.theme,
                        c = e.onItemSelected,
                        u = e.activeItemIndex;
                    void 0 === u && (u = 0);
                    var d = (0, r.useState)([]),
                        f = d[0],
                        m = d[1],
                        h = (0, r.useRef)(),
                        p = (0, r.useState)(!1),
                        g = p[0],
                        v = p[1],
                        y = (0, r.useState)(u),
                        b = y[0],
                        w = y[1],
                        x = Object.assign({ cardBgColor: "#fff", cardForeColor: "#000", primary: "#0f52ba", secondary: "#ffdf00", titleColor: "#0f52ba" }, s),
                        E = function(e) { return e && e.length ? e.map((function(e, t) { return Object.assign({}, e, { active: t === u, id: Math.random().toString(16).slice(2), visible: !0 }) })) : Array.from({ length: r.Children.toArray(n).filter((function(e) { return "chrono-icons" !== e.props.className })).length }).map((function(e, t) { return { active: t === u, id: Math.random().toString(16).slice(2), visible: !0 } })) };
                    (0, r.useEffect)((function() {
                        var e = null == i ? void 0 : i.filter((function(e) { return e })),
                            t = [];
                        if (null == e ? void 0 : e.length) f.length && e.length > f.length ? t = function(e) { if (e) { var t = f.length; return e.map((function(e, n) { return Object.assign({}, e, { active: n === t, id: Math.random().toString(16).slice(2), visible: !0 }) })) } return [] }(e) : e.length && (t = E(e)), t.length && (h.current = t, m(t));
                        else {
                            var n = E();
                            m(n)
                        }
                    }), [JSON.stringify(t ? i : null)]);
                    var k = (0, r.useCallback)((function(e) { m((function(t) { return t.map((function(t, n) { return Object.assign({}, t, { active: n === e }) })) })), w(e), i && i.length - 1 === e && v(!1) }), []),
                        C = (0, r.useCallback)((function() { v(!0), k(0) }), []),
                        S = (0, r.useCallback)((function(e) { e >= 0 && (w(e), k(e)) }), [f.length]),
                        A = Dn(n).filter((function(e) { return "chrono-icons" === e.props.className }));
                    return A.length && (A = A[0].props.children), r.createElement(a, Object.assign({}, e), r.createElement(Hn, {
                        activeTimelineItem: b,
                        contentDetailsChildren: Dn(n).filter((function(e) { return "chrono-icons" !== e.props.className })),
                        iconChildren: A,
                        items: f,
                        onFirst: function() { w(0), k(0) },
                        onLast: function() {
                            if (f.length) {
                                var e = f.length - 1;
                                w(e), k(e)
                            }
                        },
                        onNext: function() {
                            if (f.length && b < f.length - 1) {
                                var e = b + 1;
                                k(e), w(e)
                            }
                        },
                        onPrevious: function() {
                            if (b > 0) {
                                var e = b - 1;
                                k(e), w(e)
                            }
                        },
                        onRestartSlideshow: C,
                        onTimelineUpdated: k,
                        slideShow: l,
                        slideShowEnabled: l,
                        slideShowRunning: g,
                        theme: x,
                        onScrollEnd: o,
                        onItemSelected: c,
                        onOutlineSelection: S
                    }))
                }
        },
        8357: function(e, t, n) {
            "use strict";
            n.d(t, { w_: function() { return c } });
            var r = n(7294),
                i = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
                o = r.createContext && r.createContext(i),
                a = function() {
                    return (a = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                },
                l = function(e, t) { var n = {}; for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]); if (null != e && "function" === typeof Object.getOwnPropertySymbols) { var i = 0; for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]) } return n };

            function s(e) { return e && e.map((function(e, t) { return r.createElement(e.tag, a({ key: t }, e.attr), s(e.child)) })) }

            function c(e) { return function(t) { return r.createElement(u, a({ attr: a({}, e.attr) }, t), s(e.child)) } }

            function u(e) {
                var t = function(t) {
                    var n, i = e.attr,
                        o = e.size,
                        s = e.title,
                        c = l(e, ["attr", "size", "title"]),
                        u = o || t.size || "1em";
                    return t.className && (n = t.className), e.className && (n = (n ? n + " " : "") + e.className), r.createElement("svg", a({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, t.attr, i, c, { className: n, style: a(a({ color: e.color || t.color }, t.style), e.style), height: u, width: u, xmlns: "http://www.w3.org/2000/svg" }), s && r.createElement("title", null, s), e.children)
                };
                return void 0 !== o ? r.createElement(o.Consumer, null, (function(e) { return t(e) })) : t(i)
            }
        },
        1996: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var r = Object.assign || function(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]) } return e },
                i = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function(t, n, r) { return n && e(t.prototype, n), r && e(t, r), t }
                }();
            t.omit = d;
            var o = n(7294),
                a = s(o),
                l = s(n(5697));

            function s(e) { return e && e.__esModule ? e : { default: e } }

            function c(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }

            function u(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || "object" !== typeof t && "function" !== typeof t ? e : t }

            function d(e, t) { var n = {}; return Object.keys(e).forEach((function(r) {-1 === t.indexOf(r) && (n[r] = e[r]) })), n }
            var f = ["children", "contentClassName", "ratio", "ratioClassName", "style", "tagName"],
                m = { height: "100%", left: 0, position: "absolute", top: 0, width: "100%" },
                h = { height: 0, position: "relative", width: "100%" },
                p = function(e) {
                    function t() { return c(this, t), u(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)) }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), i(t, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.children,
                                n = e.className,
                                i = e.contentClassName,
                                o = e.ratio,
                                l = e.ratioClassName,
                                s = e.style,
                                c = e.tagName,
                                u = r({ display: "block" }, s),
                                p = 0 === o ? 100 : 100 / o;
                            return a.default.createElement(c, r({}, d(this.props, f), { className: "Ratio " + n, style: u }), a.default.createElement("div", { className: "Ratio-ratio " + l, style: r({}, h, { paddingTop: p + "%" }) }, a.default.createElement("div", { className: "Ratio-content " + i, style: m }, t)))
                        }
                    }]), t
                }(o.Component);
            t.default = p, p.propTypes = { children: l.default.any, className: l.default.string, contentClassName: l.default.string, ratio: l.default.number, ratioClassName: l.default.string, style: l.default.object, tagName: l.default.string }, p.defaultProps = { children: null, className: "", contentClassName: "", ratio: 1, ratioClassName: "", style: {}, tagName: "div" }
        },
        2206: function(e, t, n) {
            "use strict";
            var r, i = n(1996),
                o = (r = i) && r.__esModule ? r : { default: r };
            t.Z = o.default
        }
    }
]);