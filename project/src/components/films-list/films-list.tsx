import SmallFilmCard from '../small-film-card/small-film-card';
import {FilmsInfo} from '../../types/film';

function FilmsList(props:FilmsInfo): JSX.Element {
  const filmsInfo = props;

  return (
    <div className="catalog__films-list">
      {filmsInfo.map((film) =>  SmallFilmCard(film))}
    </div>
  );

}

export default FilmsList;
