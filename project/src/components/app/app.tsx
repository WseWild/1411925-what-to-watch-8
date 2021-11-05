import {AppRoute} from '../../const';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorPage from '../error-page/error-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import MainScreen from '../main/main';
import Player from '../player/player';
// import PrivateRoute from '../private-route/private-route';
import Review from '../add-review/add-review';
import SignIn from '../sign-in/sign-in';
import {FilmsInfo} from '../../types/film';


type AppScreenProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
  filmsInfo: FilmsInfo;
}

function App({filmCardTitle, filmsInfo, filmCardGenre, filmCardYear } : AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path={AppRoute.Root} >
          <MainScreen filmsInfo={filmsInfo} filmCardGenre={filmCardGenre} filmCardTitle={filmCardTitle} filmCardYear={filmCardYear} />;
        </Route>
        <Route exact path={AppRoute.SignIn} >
          <SignIn/>
        </Route>
        <Route exact path={AppRoute.MyList} >
          <MyList/>
        </Route>
        <Route exact path={AppRoute.MoviePage} >
          <MoviePage filmsInfo={filmsInfo}/>
        </Route>
        <Route exact path={AppRoute.Review} >
          <Review/>
        </Route>
        <Route exact path={AppRoute.Player} >
          <Player/>
        </Route>
        <Route>
          <ErrorPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
