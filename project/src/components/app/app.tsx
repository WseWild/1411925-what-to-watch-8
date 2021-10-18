import {AppRoute, AuthorizationStatus} from '../../const';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ErrorPage from '../error-page/error-page';
import MoviePage from '../movie-page/movie-page';
import MyList from '../my-list/my-list';
import MainScreen from '../main/main';
import Player from '../player/player';
import PrivateRoute from '../private-route/private-route';
import Review from '../add-review/add-review';
import SignIn from '../sign-in/sign-in';


type AppScreenProps = {
  filmCardTitle: string;
  filmCardGenre: string;
  filmCardYear: number;
}

function App(props: AppScreenProps): JSX.Element {
  const {filmCardGenre} = props;
  const {filmCardTitle} = props;
  const {filmCardYear} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route  exact path={AppRoute.Root} >
          <MainScreen filmCardGenre={filmCardGenre} filmCardTitle={filmCardTitle} filmCardYear={filmCardYear} />;
        </Route>
        <Route exact path={AppRoute.SignIn} >
          <SignIn/>
        </Route>
        <PrivateRoute>
          exact
          path={AppRoute.MyList}
          render={() => <MyList/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        </PrivateRoute>
        <Route exact path={AppRoute.MoviePage}  >
          <MoviePage/>
        </Route>
        <Route exact path={AppRoute.Review} >
          <Review/>
        </Route>
        <Route exact path={AppRoute.Player}  >
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
