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
  const data = await response.json();
  console.log(data);

  return (
    <div className="flex items-start content-start gap-8 flex-wrap bg-gray-800">
      {data.results?.map((movieup: MovieTypeUpcoming) => {
        return (
          <div className="w-[229.73px] h-[340]px flex flex-col p-2 items-start ">
            <div className="">
              <Image
                src={`https://image.tmdb.org/t/p/w500${movieup?.poster_path}`}
                width={100}
                height={100}
                alt=""
              />
              <p> Hello: {movieup.original_title}</p>
              <p>{movieup.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
