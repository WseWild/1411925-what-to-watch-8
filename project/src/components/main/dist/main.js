"use strict";
exports.__esModule = true;
var page_footer_1 = require("../page-footer/page-footer");
var page_header_1 = require("../page-header/page-header");
var films_list_1 = require("../films-list/films-list");
function MainScreen(props) {
    var filmCardTitle = props.filmCardTitle;
    var filmCardGenre = props.filmCardGenre;
    var filmCardYear = props.filmCardYear;
    var filmsInfo = props.filmsInfo;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "visually-hidden" },
            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink" },
                React.createElement("symbol", { id: "add", viewBox: "0 0 19 20" },
                    React.createElement("title", null, "+"),
                    React.createElement("desc", null, "Created with Sketch."),
                    React.createElement("g", { id: "Page-1", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        React.createElement("polygon", { id: "+", fill: "#EEE5B5", points: "10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859" }))),
                React.createElement("symbol", { id: "full-screen", viewBox: "0 0 27 27" },
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z", fill: "#FFF9D9", fillOpacity: "0.7" }),
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z", fill: "#FFF9D9", fillOpacity: "0.7" }),
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z", fill: "#FFF9D9", fillOpacity: "0.7" }),
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z", fill: "#FFF9D9", fillOpacity: "0.7" })),
                React.createElement("symbol", { id: "in-list", viewBox: "0 0 18 14" },
                    React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z", fill: "#EEE5B5" })),
                React.createElement("symbol", { id: "pause", viewBox: "0 0 14 21" },
                    React.createElement("symbol", { id: "play-s", viewBox: "0 0 19 19" },
                        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 0L19 9.5L0 19V0Z", fill: "#EEE5B5" })),
                    React.createElement("title", null, "Artboard"),
                    React.createElement("desc", null, "Created with Sketch."),
                    React.createElement("g", { id: "Artboard", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
                        React.createElement("polygon", { id: "Line", fill: "#EEE5B5", fillRule: "nonzero", points: "0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21" }),
                        React.createElement("polygon", { id: "Line", fill: "#EEE5B5", fillRule: "nonzero", points: "10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21" }))))),
        React.createElement("section", { className: "film-card" },
            React.createElement("div", { className: "film-card__bg" },
                React.createElement("img", { src: "img/bg-the-grand-budapest-hotel.jpg", alt: "The Grand Budapest Hotel" })),
            React.createElement("h1", { className: "visually-hidden" }, "WTW"),
            page_header_1["default"](),
            React.createElement("div", { className: "film-card__wrap" },
                React.createElement("div", { className: "film-card__info" },
                    React.createElement("div", { className: "film-card__poster" },
                        React.createElement("img", { src: "img/the-grand-budapest-hotel-poster.jpg", alt: "The Grand Budapest Hotel poster", width: "218", height: "327" })),
                    React.createElement("div", { className: "film-card__desc" },
                        React.createElement("h2", { className: "film-card__title" }, filmCardTitle),
                        React.createElement("p", { className: "film-card__meta" },
                            React.createElement("span", { className: "film-card__genre" }, filmCardGenre),
                            React.createElement("span", { className: "film-card__year" }, filmCardYear)),
                        React.createElement("div", { className: "film-card__buttons" },
                            React.createElement("button", { className: "btn btn--play film-card__button", type: "button" },
                                React.createElement("svg", { viewBox: "0 0 19 19", width: "19", height: "19" },
                                    React.createElement("use", { xlinkHref: "#play-s" })),
                                React.createElement("span", null, "Play")),
                            React.createElement("button", { className: "btn btn--list film-card__button", type: "button" },
                                React.createElement("svg", { viewBox: "0 0 19 20", width: "19", height: "20" },
                                    React.createElement("use", { xlinkHref: "#add" })),
                                React.createElement("span", null, "My list"))))))),
        React.createElement("div", { className: "page-content" },
            React.createElement("section", { className: "catalog" },
                React.createElement("h2", { className: "catalog__title visually-hidden" }, "Catalog"),
                React.createElement("ul", { className: "catalog__genres-list" },
                    React.createElement("li", { className: "catalog__genres-item catalog__genres-item--active" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "All genres")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Comedies")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Crime")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Documentary")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Dramas")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Horror")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Kids & Family")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Romance")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Sci-Fi")),
                    React.createElement("li", { className: "catalog__genres-item" },
                        React.createElement("a", { href: "temp.html", className: "catalog__genres-link" }, "Thrillers"))),
                films_list_1["default"](filmsInfo),
                React.createElement("div", { className: "catalog__more" },
                    React.createElement("button", { className: "catalog__button", type: "button" }, "Show more"))),
            page_footer_1["default"]())));
}
exports["default"] = MainScreen;
