export enum AppRoute {
  Root = '/',
  SignIn = '/login',
  MyList = '/mylist',
  MoviePage = '/films/:id',
  Review = '/films/:id/review',
  Player = '/player/:id',
}


export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
