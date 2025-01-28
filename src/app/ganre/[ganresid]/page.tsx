import { TOKEN } from "@/util/constant";
import {
  MovieSelectGanre,
  MovieTrailer,
  MovieTypeUpcoming,
} from "@/util/MovieType";
import Image from "next/image";
import Link from "next/link";

export default async function ganre({
  params: { ganresid },
}: {
  params: { ganresid: string };
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${ganresid}&`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responsehuuchin = await fetch(
    " https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const datahuuchin = await responsehuuchin.json();
  console.log(datahuuchin);
  function formatVoteAverage(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ",");
  }

  const data = await response.json();
  console.log(data);

  return (
    <div className=" flex gap-10  ">
      <div className="space-y-2">
        <div className=" flex  p-[var(--spacing-5,20px)] flex-col items-start mr-[100px] ml-[10px]">
          <div className=" relative w-[277px] flex items-start content-start gap-x-4 gap-y-[var(--spacing-4,16px)] self-stretch flex-wrap ">
            <h4 className="text-[24px] font-semibold leading-[32px]">Genres</h4>
            <p className="text-[16px] font-normal leading-[24px] text-base">
              See lists of movies by genre
            </p>
            {datahuuchin.genres?.map(
              (movie: MovieSelectGanre, index: number) => {
                return (
                  <Link href={`/ganre/${movie.id}`} key={index}>
                    <div key={index}>
                      <div className="inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground rounded-full cursor-pointer">
                        <p>{movie.name}</p>
                        <img src="arrow.svg" alt="" />
                      </div>
                    </div>
                  </Link>
                );
              }
            )}
          </div>

          <div className="shrink-0 bg-border w-[3px] h-[700px] border-border border absolute left-[300px] bottom-[1px] "></div>
        </div>
      </div>
      <div>
        <p>{data.total_results} titles</p>
        {
          <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]">
            {data.results
              ?.slice(0, 20)
              .map((movieup: MovieTypeUpcoming, index: number) => {
                return (
                  <Link href={`/catagory/${movieup.id}`} key={index}>
                    <div
                      key={index}
                      className="w-[230px] h-[439px] flex flex-col p-2 items-start rounded-lg  "
                    >
                      <Image
                        src={`https://image.tmdb.org/t/p/w500${movieup?.poster_path}`}
                        width={229.73}
                        height={340}
                        alt=""
                      />

                      <div>
                        <div className="flex">
                          <img src="star.svg" alt="" />
                          <p>{formatVoteAverage(movieup.vote_average)}</p>
                          <p>/10</p>
                        </div>
                        <div>
                          <h2>{movieup.original_title}</h2>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        }
      </div>
    </div>
  );
}
