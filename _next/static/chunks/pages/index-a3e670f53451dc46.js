(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        8581: function(e, a, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() { return r(3634) }])
        },
        1075: function(e, a) {
            "use strict";
            e.exports = { members: [{ name: "Alexandre Girold", bio: "Alexandre Girold est notre dieu vivant, celui qui guide notre projet et trouve les bonnes idées. En effet le jeu T'as les Boules provient de son cerveau gigantesque.", src: "images/alexandre-girold.jpg", login: "alexandre.girold" }, { name: "Lacelot Doucet", bio: " Un homme fort, plein de ressource et beau, quoi demander de plus (meme moi je ne sais pas).", src: "images/maxime-ellerbach.jpg", login: "lancelot.doucet" }, { name: "Maxime Gay", bio: "Maxime Gay est blond et surtout célibataire.", src: "images/maxime-gay.jpg", login: "maxime.gay" }, { name: "Google", bio: "Google est notre ami de tous les jours, un peu cléptomane (il vend nos données personnel), il est quand meme très utile.", src: "images/mickael-bobovitch.jpg", login: "google.com" }], items: [{ title: "17/07", cardTitle: "Début du projet", cardDetailedText: "Il faut une idée, un jeu. Apres avoir trouver l'idée nous avons créé un logo, un github et enfin ouvert Unity. Mais la route est encore longue et nous avons beaucoup de travail.", media: { type: "IMAGE", source: { url: "images/buble-logo.jpg" } } }, { title: "19/08", cardTitle: "Première soutenance", cardDetailedText: "Pour la premiere soutenance nous avions un implémenté une des mécaniques fart du jeu. Bien que le jeu n'etait pas le plus beau, il avait des fonctionalités intéréssantes qui diffères des autres jeux.", media: { type: "IMAGE", source: { url: "/images/esthetiqueV1B.png" } } }, { title: "10/11", cardTitle: "Nouvelle identé visuelle", cardDetailedText: "Nous avons décidé de rendre notre jeu plus beau, car l'héstétique est importante. Nous avons fait une refonte du menu et des sprites des différents niveaux. Ce n'est pas encore parfait mais c'est deja mieux.", media: { type: "IMAGE", source: { url: "/images/menu2.png" } } }, { title: "30/11", cardTitle: "Dieuxième soutenance", cardDetailedText: "Pour la deuxième soutenance nous avons implémenté le 'merge', en d'autre terme la fusion de plusieurs entité en une. Nous avons aussi continuer dans le developement des mécaniques commme la prise et perte de massse.", media: { type: "IMAGE", source: { url: "/images/esthetiqueV2.png" } } }, { title: "Janvier 2023", cardTitle: "Soutenance final", cardDetailedText: "D'ici la dernière soutenance nous éspérons avoir un jeu avec plus de fonctionalités, nous souhaitons avoir plus de niveaux et donner une identité visuel et auditive encore plus unique.", media: { type: "IMAGE", source: { url: "/images/ptIntero.png" } } }, { title: "Futur", cardTitle: "Le futur", cardDetailedText: "Allons nous continuer a developper T'as les boule pour en faire un vrai jeu ? peut-etre.", media: { type: "IMAGE", source: { url: "/images/ptIntero.png" } } }, { title: "04/06", cardTitle: "Tristesse", cardDetailedText: "The answer is no.", media: { type: "IMAGE", source: { url: "/images/ptIntero.png" } } }], sliderData: [{ image: "/images/menu.png" }, { image: "/images/errors.png" }, { image: "/images/menu2.png" }, { image: "/images/errors.png" }, { image: "/images/errors.png" }] }
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
                n = function() { return (0, t.jsx)("div", { className: "flex w-screen min-h-screen bg-white text-center", children: (0, t.jsxs)("div", { className: "m-auto", children: [(0, t.jsx)(l.default, { className: "rounded-t", loader: s, src: "images/buble-logo.jpg", alt: "logo", width: 1606, height: 2014, unoptimized: !0 }), (0, t.jsx)("h1", { className: "h text-center mb-12", children: "By BubleTeam" }), (0, t.jsx)("h2", { children: (0, t.jsx)("a", { href: "https://github.com/BubleTeam", className: "underline text-blue-500 hover:text-blue-400 f", children: "See the project on Github" }) }), (0, t.jsx)("h2", { className: "mt-5", children: (0, t.jsx)("a", { href: "https://github.com/BubleTeam/T-as-les-boules", className: "underline text-blue-500 hover:text-blue-400 f", children: "Download Project Specifications" }) })] }) }) },
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
                f = function() { return (0, h.useEffect)((function() { document.querySelector("#car-image").addEventListener("click", (function() { console.log("click"), new Audio("/audio.mp3").play() })) }), []), (0, t.jsx)("div", { className: "flex w-screen sm:h-screen bg-white", children: (0, t.jsxs)("div", { className: "mt-12 mx-auto", children: [(0, t.jsx)("h1", { className: "h text-center w-screen mb-10", children: "The Game" }), (0, t.jsx)("div", { className: "w-screen mb-12", children: (0, t.jsx)("div", { className: "bg-black ch border-2 border-black rounded-lg overflow-hidden", children: (0, t.jsx)(l.default, { id: "car-image", src: "/images/game.png", alt: "autopylot", loader: s, width: 1200, height: 800, layout: "responsive" }) }) })] }) }) },
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

            function w() { return (0, t.jsxs)(t.Fragment, { children: [(0, t.jsxs)(i.default, { children: [(0, t.jsx)("title", { children: "T'as les Boules" }), (0, t.jsx)("meta", { name: "viewport", content: "initial-scale=1.0, width=device-width" })] }), (0, t.jsx)(n, {}), (0, t.jsx)(m, {}), (0, t.jsx)(f, {}), (0, t.jsx)(b, {}), (0, t.jsx)(x, {})] }) }
        }
    },
    function(e) {
        e.O(0, [445, 849, 774, 888, 179], (function() { return a = 8581, e(e.s = a); var a }));
        var a = e.O();
        _N_E = a
    }
]);