import { TOKEN } from "@/util/constant";
import { MovieSelectGanre, MovieStar } from "@/util/MovieType";
import Image from "next/image";

export default async function page1({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const responseStar = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  function formatVoteAverage(vote: number) {
    const hours = Math.floor(vote / 60);
    const minutes = vote % 60;
    return `${hours}h ${minutes}min`;
  }
  function formatVoteAverage2(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ".");
  }
  const dataStar = await responseStar.json();
  console.log(dataStar);
  return (
    <div>
      <div>
        <h1>{data.original_title}</h1>
        <h2>{data.release_date}</h2>
        <p>{data.adult ? "R" : "PG"}</p>
        <p>Rating</p>
        <p>{formatVoteAverage(data.runtime)}</p>

        <p>{formatVoteAverage2(data.vote_average)}</p>
        <img
          className="w-[290px] h-[428px]"
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          alt=""
        />

        {dataStar.crew
          ?.filter((crew: MovieStar) => crew.department == "Directing")
          .slice(0, 3)
          .map((crew: MovieStar, id: number) => {
            return <div key={id}>{crew.name}</div>;
          })}

        {dataStar.cast?.slice(0, 6).map((actor: MovieStar, index: number) => {
          return (
            <div key={index}>
              <p>{actor.name}</p>
            </div>
          );
        })}
        <p>{data.overview}</p>
      </div>
      {data.genres?.map((genres: MovieSelectGanre, index: number) => {
        return (
          <div key={index}>
            <p>{genres.name}</p>
          </div>
        );
      })}
    </div>
  );
}
