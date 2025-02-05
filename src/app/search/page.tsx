"use client";
import { TOKEN } from "@/util/constant";
import { useSearchParams } from "next/navigation";

import { MovieSelectGanre, MovieTypeUpcoming } from "@/util/MovieType";
import Image from "next/image";
import Link from "next/link";
import { PaginationDemo } from "../_components/NextPagnition";
import React from "react";
import { Star } from "lucide-react";
import { ToggleGroupDemos } from "../_components/ToggleTwo";

export default function Search2() {
  const [movie, setMovie] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<MovieSelectGanre[]>([]);

  const searchParams = useSearchParams();

  const genreId = searchParams.get("genreIds");
  const page = searchParams.get("page") || 1;
  const searchValue = searchParams.get("value");
  React.useEffect(() => {
    const responce = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&with_genres=${genreId}&language=en-US&page=${genreId}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      setMovie(res.results || []);
      console.log("res", res);
    };
    responce();
  }, [searchValue, page]);

  React.useEffect(() => {
    const data = async () => {
      const responsehuuchin = await fetch(
        " https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
          },
        }
      );
      const res = await responsehuuchin.json();
      setGenre(res.genres || []);
      console.log(res);
    };
    data();
  }, []);

  function formatVoteAverage(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ",");
  }

  return (
    <div className="w-[1280px] flex m-auto ">
      {/* <h4 className="text-[24px] font-semibold leading-[32px]">Genres</h4>
      <p className="text-[16px] font-normal leading-[24px] text-base">
        See lists of movies by genre
      </p> */}
      <div className="w-[400px] flex flex-wrap ">
        <ToggleGroupDemos genre={genre} />
      </div>

      <p>{movie.id}</p>

      {/* <div className="shrink-0 bg-border w-[3px] h-[700px] border-border border absolute left-[300px] bottom-[1px] "></div> */}

      <div>
        <p>{movie?.total_results} titles</p>
        <div className="w-[880px] flex flex-wrap">
          {movie.map((movie: MovieTypeUpcoming, index: number) => {
            return (
              <Link href={`/catagory/${movie.id}`} key={index}>
                <div key={index} className="">
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    width={229.73}
                    height={340}
                    alt=""
                  />
                  {/* <div className="flex">
                  <Star />
                  <p>{formatVoteAverage(movie.vote_average)}</p>
                  <p>/10</p>
                </div> */}
                  {/* <h2 className="overflow-hidden text-ellipsis  font-inter text-lg font-normal leading-7">
                  {movie.original_title}
                </h2> */}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div>
        <PaginationDemo />
      </div>
    </div>
  );
}
