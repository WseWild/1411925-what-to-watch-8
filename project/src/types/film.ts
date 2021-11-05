export type FilmInfo = {
  id: number;
  bigPoster: string;
  smallPoster: string;
  cover: string;
  title: string;
  genre: string;
  releaseYear: number;
  description: string;
  rating: number;
  ratingDesc: string;
  voitingNum: number;
  director: string;
  castList: string;
  duration: number;
}


// export type FilmReview = {
//   textreview: string;
//   userRating: number;
//   userName: string;
//   date: Date;
// }

export type FilmsInfo =  FilmInfo[];
