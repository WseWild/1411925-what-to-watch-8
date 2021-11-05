import {FilmInfo} from '../../types/film';
import {MouseEvent, useState} from 'react';


function SmallFilmCard(props: FilmInfo ): JSX.Element {
  const {title, id, smallPoster} = props;
  const keyValue = `${id}`;
  const [activeFilmCard, setActiveFilmCard] = useState(keyValue);

  // const [activeFilmCard, setActiveFilmCard] = useState(keyValue);

  return (
    <article key={keyValue} id={keyValue} className='small-film-card catalog__films-card'
      onMouseOver={(({target}: MouseEvent<HTMLElement>) => {
      // eslint-disable-next-line no-console
        console.log(activeFilmCard);
        setActiveFilmCard(activeFilmCard);
      })}
    >

      <div className="small-film-card__image">
        <img src={smallPoster} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{title}</a>
      </h3>
    </article>
  );
}

export default SmallFilmCard;
