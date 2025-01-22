import { TOKEN } from "@/util/constant";
import { MovieTypeUpcoming } from "@/util/MovieType";
import Image from "next/image";

export default async function CardsUpcoming() {
  const response = await fetch(
    " https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
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
    <div className="max-w-[1280px] flex m-auto flex-wrap gap-[32px] mb-[32px]">
      {data.results
        ?.slice(0, 10)
        .map((movieup: MovieTypeUpcoming, index: number) => {
          return (
            <div
              key={index}
              className="w-[230px] h-[439px] flex flex-col p-2 items-start rounded-lg bg-gray-800 "
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
          );
        })}
    </div>
  );
}
