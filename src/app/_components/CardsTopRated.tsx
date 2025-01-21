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
  const data = await response.json();
  console.log(data);

  return (
    <div className="flex items-start content-start gap-8 flex-wrap bg-gray-600">
      {data.results?.map((movie: MovieTopRated) => {
        return (
          <div className="w-[229.73px] h-[340]px flex flex-col p-2 items-start">
            <div className="">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
                width={100}
                height={100}
                alt=""
              />
              <p> Hello: {movie.original_title}</p>
              <p>{movie.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
