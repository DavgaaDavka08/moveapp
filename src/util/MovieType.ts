export type MovieType = {
  title: string;
  original_title: string;
  poster_path: boolean;
  vote_average: number;
  id: number;
};
export type MovieTypeUpcoming = {
  title: string;
  original_title: string;
  poster_path: boolean;
  vote_average: number;
  id: number;
};
export type MovieTopRated = {
  title: string;
  original_title: string;
  poster_path: boolean;
  vote_average: number;
  id: number;
  release_date: number;
};
export type MovieNowPlayng = {
  overview: string; // taniltsuulga
  original_title: string;
  poster_path: boolean;
  vote_average: number;
  id: number;
};
export type MovieSelectGanre = {
  name: string;
  id: number;
  genres: string;
};
export type MovieStar = {
  name: string;
  id: number;
  genres: string;
  department: string;
};
export type MovieTrailer = {
  name: string;
  id: number;
  genres: string;
  department: string;
  site: string;
  Clip: VideoFrameInit;
  official: boolean;
};
