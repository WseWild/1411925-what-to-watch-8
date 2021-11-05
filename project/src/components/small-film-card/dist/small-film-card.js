"use strict";
exports.__esModule = true;
var react_1 = require("react");
function SmallFilmCard(props) {
    var title = props.title, id = props.id, smallPoster = props.smallPoster;
    var keyValue = "" + id;
    var _a = react_1.useState(keyValue), activeFilmCard = _a[0], setActiveFilmCard = _a[1];
    // const [activeFilmCard, setActiveFilmCard] = useState(keyValue);
    return (React.createElement("article", { key: keyValue, id: keyValue, className: 'small-film-card catalog__films-card', onMouseOver: (function (_a) {
            var target = _a.target;
            // eslint-disable-next-line no-console
            console.log(activeFilmCard);
            setActiveFilmCard(activeFilmCard);
        }) },
        React.createElement("div", { className: "small-film-card__image" },
            React.createElement("img", { src: smallPoster, alt: title, width: "280", height: "175" })),
        React.createElement("h3", { className: "small-film-card__title" },
            React.createElement("a", { className: "small-film-card__link", href: "film-page.html" }, title))));
}
exports["default"] = SmallFilmCard;
