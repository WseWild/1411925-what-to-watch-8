import MainScreen from '../main/main';
import ErrorPage from '../error-page/error-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import MoviePage from '../movie-page/movie-page';
import Review from '../add-review/add-review';
import Player from '../player/player';
import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


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
