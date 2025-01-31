import { TOKEN } from "@/util/constant";
import { MovieTopRated } from "@/util/MovieType";
import Image from "next/image";
import Link from "next/link";

export default async function page1() {
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
    <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px]">
      {data.results?.slice(0, 20).map((movie: MovieTopRated, index: number) => {
        return (
          <Link href={`/catagory/${movie.id}`} key={index}>
            <div
              key={index}
              className="w-[230px] h-[439px] flex flex-col p-2 items-start rounded-lg bg-gray-800 "
            >
              <div className="">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                  width={229.73}
                  height={340}
                  alt=""
                />
                <div className="flex">
                  <img src="star.png" alt="" />
                  <p>{formatVoteAverage(movie.vote_average)}</p>
                  <p>/10</p>
                </div>
                <h2 className="overflow-hidden text-ellipsis  font-inter text-lg font-normal leading-7">
                  {movie.original_title}
                </h2>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
