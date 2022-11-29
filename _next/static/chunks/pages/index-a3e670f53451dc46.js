(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8581: function(e, a, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return r(3634) }])
        },
        1075: function(e, a) {
            "use strict";
            e.exports = { members: [{ name: "Alexandre Girold", bio: "Alexandre Girold is our marketing specialist and one of our developer on the software part of this project. A Member full of resources and ideas", src: "images/alexandre-girold.jpg", login: "alexandre.girold" }, { name: "Maxime Ellerbach", bio: "Maxime Elerbach is our Team leader. Over 3 years of experience in autonomous cars and races. An enthusiastic leader for driving change to always reach our high targets.", src: "images/maxime-ellerbach.jpg", login: "maxime.ellerbach" }, { name: "Maxime Gay", bio: "Maxime Gay is one of our developer on the software part of this project. Over many years of teamwork and pitching products.", src: "images/maxime-gay.jpg", login: "maxime.gay" }, { name: "Micka\xebl Bobovitch", bio: "Mickael Bobovitch is our web developer. Over 4 years of experience in web development and 1 year as entrepreneur in Email Marketing and Affiliation. CTO of GenWork.fr", src: "images/mickael-bobovitch.jpg", login: "mickael.bobovitch" }], items: [{ title: "17/01", cardTitle: "Starting Project", cardDetailedText: "Brainstorming the project. Creating the roadmap. Planning the project. Creating the team, the logo and the brand. Github and Slack are ready. Our goals are to create a new autonomous car. ", media: { type: "IMAGE", source: { url: "/logo.svg" } } }, { title: "29/01", cardTitle: "1st Race", cardDetailedText: 'We can drive and control the car with our handmade Xbox Controller. Everything is built from scratch. We used a "modular" approach. The code is extensible and offer the possibility of easy scalling and maintenance.', media: { type: "IMAGE", source: { url: "/images/test.jpg" } } }, { title: "26/02", cardTitle: "2nd Race", cardDetailedText: "We are able to collect data from the car. We plan to create a web app to visualize metrics. We are looking to run a server with ElasticSearch, as we use JSON for our data. We created a simple and robust API to enable to communication", media: { type: "IMAGE", source: { url: "/images/2nd.jpg" } } }, { title: "19/03", cardTitle: "3rd Race", cardDetailedText: "Implementation of the telemetry Website. We used Next.js as it is fast and reliable. The coolest feature is a live view from the car's camera. Furthermore we have live metrics. We use Docker to run the server.", media: { type: "IMAGE", source: { url: "/images/telemetry.png" } } }, { title: "16/04", cardTitle: "4th Race", cardDetailedText: "We ameliorated the data processing. We used Tensorflow to build a basic convolutional neural network. The car is able to drive by itself. The training is done with multiple input source like real world data and simulated data.", media: { type: "IMAGE", source: { url: "/images/4th.jpg" } } }, { title: "14/05", cardTitle: "5th Race", cardDetailedText: "Our car is now fully functional! The AI is well trained. Metrics collection is working well. The project approaches it's final state. We improved all the components and made great optimisatiion. Now our goal is to make out car unbeatable in races.", media: { type: "IMAGE", source: { url: "/images/car.jpg" } } }, { title: "04/06", cardTitle: "Last Race", cardDetailedText: "This is it! The final race. All the code is polished to perfection. The documentation is totally complete. The project is finished. All we have to do now is to win every races! We now preparing ourselves for the vivatech", media: { type: "IMAGE", source: { url: "/images/vivatech.jpg" } } }], sliderData: [{ image: "/images/1.png" }, { image: "/images/2.png" }, { image: "/images/3.png" }, { image: "/images/4.png" }, { image: "/images/5.png" }] }
        },
        3634: function(e, a, r) {
            "use strict";
            r.r(a), r.d(a, { default: function() { return w } });
            var t = r(5893),
                i = r(9008),
                l = r(5675),
                s = function(e) {
                    var a = e.src;
                    e.width, e.quality;
                    return a
                },
                n = function() { return (0, t.jsx)("div", { className: "flex w-screen min-h-screen bg-white text-center", children: (0, t.jsxs)("div", { className: "m-auto", children: [(0, t.jsx)(l.default, { className: "rounded-t", loader: s, src: "logo.svg", alt: "logo", width: 250, height: 250, unoptimized: !0 }), (0, t.jsx)("h1", { className: "h text-center mb-12", children: "By Autonomobile" }), (0, t.jsx)("h2", { children: (0, t.jsx)("a", { href: "https://github.com/Autonomobile/AutoPylot", className: "underline text-blue-500 hover:text-blue-400 f", children: "See the project on Github" }) }), (0, t.jsx)("h2", { className: "mt-5", children: (0, t.jsx)("a", { href: "https://github.com/Autonomobile/AutoPylot/blob/main/ressources/final-presentation/project-report/project-report.pdf", className: "underline text-blue-500 hover:text-blue-400 f", children: "Download Project Specifications" }) })] }) }) },
                c = r(2206),
                o = function(e) { return (0, t.jsxs)(c.Z, { className: "card flex-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 m-3", ratio: 2 / 3, children: [(0, t.jsx)("div", { className: "card-side front bg-transparent w-full h-full", children: (0, t.jsxs)("div", { className: "bg-black w-full h-full relative border-2 border-black rounded-lg overflow-hidden", children: [(0, t.jsx)(l.default, { loader: s, src: e.src, alt: e.name, layout: "fill", unoptimized: !0 }), (0, t.jsx)("div", { className: "text-black absolute w-full text-center border-b-2 border-black", children: (0, t.jsx)("p", { className: "mini-hc", children: e.name }) })] }) }), (0, t.jsx)("div", { className: "card-side back flex bg-transparent h-full w-full", children: (0, t.jsxs)("div", { className: "bg-white flex flex-col w-full h-full border-2 border-black rounded-lg overflow-hidden", children: [(0, t.jsx)("div", { className: "text-black flex-none w-full text-center border-b-2 border-black", children: (0, t.jsx)("p", { className: "mini-hc", children: e.login }) }), (0, t.jsx)("div", { className: "text-black flex flex-1 text-center", children: (0, t.jsx)("div", { className: "m-3", children: (0, t.jsx)("p", { className: "text-center", children: e.bio }) }) })] }) })] }) },
                d = r(1075),
                m = function() { return (0, t.jsx)("div", { className: "w-screen min-h-screen bg-gray-50", children: (0, t.jsxs)("div", { className: "pt-12 mx-auto flex-col", children: [(0, t.jsx)("div", { children: (0, t.jsx)("h1", { className: "h text-center", children: "The Team" }) }), (0, t.jsx)("div", { className: "flex flex-wrap justify-center w-full mx-auto", children: d.members.map((function(e) { return (0, t.jsx)(o, { name: e.name, src: e.src, bio: e.bio, login: e.login }, e.login) })) })] }) }) },
                u = r(9798),
                h = r(7294),
                x = function() {
                    var e = (0, h.useState)(0),
                        a = e[0],
                        r = e[1];
                    return (0, h.useEffect)((function() {
                        var e = function() { return r(window.innerWidth) };
                        return e(), window.addEventListener("resize", e),
                            function() { return window.removeEventListener("resize", e) }
                    }), [a]), (0, t.jsx)("div", { className: "flex w-screen bg-white", children: (0, t.jsxs)("div", { className: "mt-12 mx-auto w-full sm:w-3/4 md:w-3/4 lg:w-3/5 h-full", children: [(0, t.jsx)("h1", { className: "h text-center mb-3 mx-12", children: "2022 Roadmap" }), (0, t.jsx)(u.k, { items: d.items, mode: a < 900 ? "VERTICAL" : "VERTICAL_ALTERNATING", scrollable: { scrollbar: !1 }, hideControls: !0, theme: { primary: "black", secondary: "lightblue", titleColor: "black" } })] }) })
                },
                f = function() { return (0, h.useEffect)((function() { document.querySelector("#car-image").addEventListener("click", (function() { console.log("click"), new Audio("/audio.mp3").play() })) }), []), (0, t.jsx)("div", { className: "flex w-screen sm:h-screen bg-white", children: (0, t.jsxs)("div", { className: "mt-12 mx-auto", children: [(0, t.jsx)("h1", { className: "h text-center w-screen mb-10", children: "The Car" }), (0, t.jsx)("div", { className: "w-screen mb-12", children: (0, t.jsx)("div", { className: "bg-black ch border-2 border-black rounded-lg overflow-hidden", children: (0, t.jsx)(l.default, { id: "car-image", src: "/images/autopylot.jpg", alt: "autopylot", loader: s, width: 1200, height: 800, layout: "responsive" }) }) })] }) }) },
                g = r(9583),
                p = function(e) {
                    var a = e.slides,
                        r = (0, h.useState)(0),
                        i = r[0],
                        l = r[1],
                        s = a.length;
                    return !Array.isArray(a) || a.length <= 0 ? null : (0, t.jsxs)("section", { className: "slider", children: [(0, t.jsx)(g.O18, { className: "left-arrow", onClick: function() { l(0 === i ? s - 1 : i - 1) } }), (0, t.jsx)(g.Rdr, { className: "right-arrow", onClick: function() { l(i === s - 1 ? 0 : i + 1) } }), a.map((function(e, a) { return (0, t.jsx)("div", { className: a === i ? "slide active" : "slide", children: a === i && (0, t.jsx)("div", { className: "px-20 md:px-40 lg:px-64 ", children: (0, t.jsx)("img", { src: e.image, alt: "travel image", className: "border-black rounded-lg" }) }) }, a) }))] })
                },
                b = function() { return (0, t.jsx)("div", { children: (0, t.jsx)("div", { className: "flex w-screen sm:h-screen bg-gray-50", children: (0, t.jsxs)("div", { className: "mt-12 mx-auto", children: [(0, t.jsx)("h1", { className: "h text-center w-screen mb-10", children: "The Software" }), (0, t.jsx)(p, { slides: d.sliderData })] }) }) }) };

            function w() { return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(i.default, { children: [(0, t.jsx)("title", { children: "Autopylot" }), (0, t.jsx)("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" })] }), (0, t.jsx)(n, {}), (0, t.jsx)(m, {}), (0, t.jsx)(f, {}), (0, t.jsx)(b, {}), (0, t.jsx)(x, {})] }) }
        }
    },
    function(e) {
        e.O(0, [445, 849, 774, 888, 179], (function() { return a = 8581, e(e.s = a); var a }));
        var a = e.O();
        _N_E = a
    }
]);