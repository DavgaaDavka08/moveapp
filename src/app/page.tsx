"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
type MovieType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  populatity: number;
  poster_path: string;
  release_date: number;
  title: string;
  vidio: boolean;
  vote_average: number;
  vote_count: number;
};
// type kino = {};
// const kino = {
//   adult: false,
//   backdrop_path: "/rDa3SfEijeRNCWtHQZCwfbGxYvR.jpg",
//   genre_ids: [28, 12, 53],
//   id: 539972,
//   original_language: "en",
//   original_title: "Kraven the Hunter",
//   overview:
//     "Kraven Kravinoff's complex relationship with his ruthless gangster father, Nikolai, starts him down a path of vengeance with brutal consequences, motivating him to become not only the greatest hunter in the world, but also one of its most feared.",
//   popularity: 3297.244,
//   poster_path: "/i47IUSsN126K11JUzqQIOi1Mg1M.jpg",
//   release_date: "2024-12-11",
//   title: "Kraven the Hunter",
//   video: false,
//   vote_average: 6.421,
//   vote_count: 596,
// };

export default function Home() {
  const [movies, setMovies] = useState<MovieType[] | undefined>();

  ///frech move medeelel setmovie
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const getMovie = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);

    if (data?.results) {
      setMovies(data.results);
    }
  };
  useEffect(() => {
    getMovie();
    console.log("getting movie");
  }, []);
  // console.log({ movie });
  return (
    <div className="w-full] h-[900px] flex flex-col items-center justify-center gap-8 font-black">
      {movies?.map((movie, index) => {
        return (
          <div key={index}>
            <div className="w-[500px] h-[500px] flex flex-col gap-3">
              <div>
                <img
                  className="w-[50px] h-[50px]"
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt=""
                />
                <h2>{movie?.original_title}</h2>
              </div>
              {/* <p> adult{movies?.adult}</p>
              <p> backdrop_path{movies?.backdrop_path}</p>
              <p>genre_ids{movies?.genre_ids}</p>
              <p> id{movies?.id}</p>
              <p> original_language{movies?.original_language}</p>
              <p>original_title{movies?.original_title}</p>
              <p> overview{movies?.populatity}</p>
              <p> populatity{movies?.release_date}</p>
              <p> vidio{movies?.vidio}</p> */}

              {/* <p>vote_count{movies?.vote_count}</p> */}
              <p> {movie?.vote_average}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
