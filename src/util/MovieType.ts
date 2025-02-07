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
  total_results: number;
  total_pages: number;
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
  total_results: number;
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
  overview: string;
  title: string;
  original_title: string;
  release_date: number;
};
