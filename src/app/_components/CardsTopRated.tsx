import { TOKEN } from "@/util/constant";
import { MovieTopRated } from "@/util/MovieType";
import Image from "next/image";

export default async function CardsTopRated() {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  function formatVoteAverage(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ",");
  }
  const data = await response.json();
  console.log(data);

  return (
    <div className="flex items-start content-start  flex-wrap  gap-x-8 gap-y-8 px-12">
      {data.results?.slice(0, 10).map((movie: MovieTopRated) => {
        return (
          <div className="w-[230px] h-[439px] flex flex-col p-2 items-start rounded-lg bg-gray-800 ">
            <div className="">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                width={229.73}
                height={340}
                alt=""
              />
              <div className="flex">
                <img src="star.svg" alt="" />
                <p>{formatVoteAverage(movie.vote_average)}</p>
                <p>/10</p>
              </div>
              <h2>{movie.original_title}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
}
