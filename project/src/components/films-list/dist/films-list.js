"use strict";
exports.__esModule = true;
var small_film_card_1 = require("../small-film-card/small-film-card");
function FilmsList(props) {
    var filmsInfo = props;
    return (React.createElement("div", { className: "catalog__films-list" }, filmsInfo.map(function (film) { return small_film_card_1["default"](film); })));
}
exports["default"] = FilmsList;
