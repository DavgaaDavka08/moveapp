"use client";
import { TOKEN } from "@/util/constant";
import { useSearchParams } from "next/navigation";
import { ToggleGroupDemo } from "../_components/Buttons-Toggle";
import { MovieSelectGanre, MovieTypeUpcoming } from "@/util/MovieType";
import Image from "next/image";
import Link from "next/link";
import { PaginationDemo } from "../_components/Next-Pagnition";
import React from "react";

export default function Ganre2() {
  const [movie, setMovie] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<MovieSelectGanre[]>([]);

  const searchParams = useSearchParams();

  const genreId = searchParams.get("genreIds");
  React.useEffect(() => {
    const responce = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${1}`,
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
  }, []);
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

  // const clickHandler(ganresid:number)=>{
  //   r
  // }
  return (
    <div className=" flex gap-10  ">
      <div className="space-y-2">
        <div className=" flex  p-[var(--spacing-5,20px)] flex-col items-start mr-[100px] ml-[10px]">
          <div className=" relative w-[277px] flex items-start content-start gap-x-4 gap-y-[var(--spacing-4,16px)] self-stretch flex-wrap ">
            <h4 className="text-[24px] font-semibold leading-[32px]">Genres</h4>
            <p className="text-[16px] font-normal leading-[24px] text-base">
              See lists of movies by genre
            </p>
          </div>
          {genre?.map((movie: MovieSelectGanre, index: number) => {
            return (
              <Link href={`/ganre/${movie.id}`} key={index}>
                <div key={index}>
                  <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-full cursor-pointer">
                    <p>{movie.name}</p>
                    <img src="arrow.svg" alt="" />
                  </div>
                  <p>{movie.id}</p>
                </div>
              </Link>
            );
          })}
          <div className="shrink-0 bg-border w-[3px] h-[700px] border-border border absolute left-[300px] bottom-[1px] "></div>
        </div>
      </div>
      <div>
        <p>{movie?.total_results} titles</p>
        <ToggleGroupDemo />
      </div>
      <PaginationDemo />
    </div>
  );
}
