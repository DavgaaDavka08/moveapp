"use client";
import { TOKEN } from "@/util/constant";
import { useSearchParams } from "next/navigation";

import {
  MovieSelectGanre,
  MovieTopRated,
  MovieTypeUpcoming,
} from "@/util/MovieType";
import Image from "next/image";
import Link from "next/link";
import { Paginat } from "../_components/NextPagnition";
import React, { useState } from "react";
import { Star } from "lucide-react";
import { ToggleGroupDemos } from "../_components/ToggleTwo";

export default function Search2() {
  const [movie, setMovie] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<MovieSelectGanre[]>([]);
  const [data, setData] = useState<MovieTypeUpcoming | null>(null);

  const searchParams = useSearchParams();

  const genreId = searchParams.get("genreIds");
  const page = searchParams.get("page") || 1;
  const searchValue = searchParams.get("value");
  const fetchOption = {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  };
  React.useEffect(() => {
    const responce = async () => {
      console.log("valuesdasasdas", searchValue);
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchValue}&language=en-US&page=${page}`,
        fetchOption
      );
      const res = await response.json();
      setData(res);
      setMovie(res.results || []);
      console.log("res", res);
    };
    responce();
  }, [searchValue, page, genreId]);

  React.useEffect(() => {
    const data = async () => {
      const responsehuuchin = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        fetchOption
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
      <div className="flex flex-wrap gap-5 lg:gap-x-12 lg:gap-y-8 w-[859px] h-[1976px]">
        {movie
          ?.slice(0, 20)
          ?.filter((genre_ids: number) => genre_ids == 80)
          .map((movie: MovieTopRated, index: number) => {
            return (
              <Link href={`/catagory/${movie.id}`} key={index}>
                <div
                  key={index}
                  className="w-[165px] rounded-sm h-[331px] flex flex-col p-2 items-start rounded-rounded-lg bg-secondary"
                >
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                    width={165}
                    height={244}
                    alt=""
                  />
                  <div className="flex p-2">
                    <img src="/star.png" alt="" />
                    <p>{formatVoteAverage(movie.vote_average)}</p>
                    <p>/10</p>
                  </div>
                  <h2 className="overflow-hidden text-ellipsis  font-inter text-lg font-normal leading-7">
                    {movie.original_title}
                  </h2>
                </div>
              </Link>
            );
          })}
        <div>
          <Paginat
            currentPage={Number(page)}
            totalPages={data?.total_pages || 0}
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-4 w-[387px] h-[300px]">
        <ToggleGroupDemos genre={genre} />
      </div>
    </div>
  );
}
