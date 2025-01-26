import { ButtonDemo } from "@/components/ui/my-button";
import { TOKEN } from "@/util/constant";
import { MovieSelectGanre, MovieStar, MovieTrailer } from "@/util/MovieType";
export default async function page1({
  params: { movieId },
}: {
  params: { movieId: string };
}) {
  const responseTrailer = await fetch(
    ` https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
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

  const dataTrailer = await responseTrailer.json();

  console.log(dataTrailer);
  const data = await response.json();
  console.log(data);
  function formatVoteAverage(vote: number) {
    const hours = Math.floor(vote / 60);
    const minutes = vote % 60;
    return `${hours}h ${minutes}m`;
  }
  function formatVoteAverage2(vote: number) {
    return (Math.floor(vote * 10) / 10).toString().replace(".", ".");
  }
  const dataStar = await responseStar.json();
  console.log(dataStar);
  return (
    <div className="max-w-[1280px] m-auto ">
      <div className=" flex  justify-between w-[1280px] ">
        <div>
          <h1 className="text-[#FAFAFA] text-[36px] leading-10 font-bold tracking-[-0.9px]">
            {data.original_title}
          </h1>
          <div className="flex w-211px m-auto text-[#FAFAFA] font-inter text-[18px] font-normal leading-[28px] gap-3">
            <h2>{data.release_date}</h2>
            <p>{data.adult ? "· R· " : "·PG·  "}</p>
            <p>{formatVoteAverage(data.runtime)}</p>
          </div>
        </div>

        <div>
          <p>Rating</p>

          <p>{formatVoteAverage2(data.vote_average)}</p>
        </div>
      </div>
      <div className="flex items-center gap-[32px]">
        <img
          className="w-[290px] h-[428px]"
          src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
          alt=""
        />

        <div className="w-[760px] h-[428px] bg-cover bg-center bg-no-repeat rounded-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.4)]"></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${data?.poster_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="relative top-[300px] left-[100px]">
              <video
                src={
                  "https://image.tmdb.org/t/p/w500" + dataTrailer.poster_path
                }
              >
                gfdgtdgfjhf
              </video>
              {/* {dataTrailer.results?.map(
                (trailer: MovieTrailer, index: number) => {
                  return <div key={index}></div>;
                }
              )} */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[1080px] flex-col items-start gap-5">
        <div className=" flex gap-[12px]">
          {data.genres?.map((genres: MovieSelectGanre, index: number) => {
            return (
              <div key={index}>
                <p className=" items-start p-[2px_10px] rounded-full border border-[#27272A] text-[#FAFAFA] font-inter text-[12px] font-semibold leading-[16px]">
                  {genres.name}
                </p>
              </div>
            );
          })}
        </div>

        <p>{data.overview}</p>
        <div className="flex items-center gap-[53px]">
          <h1 className="text-[#FAFAFA] font-inter text-[16px] font-bold leading-[28px] w-64px">
            Director
          </h1>
          {dataStar.crew
            ?.filter((crew: MovieStar) => crew.department == "Directing")
            .slice(0, 1)
            .map((crew: MovieStar, id: number) => {
              return (
                <div className="flex gap-[53px]" key={id}>
                  <p>{crew.name}</p>
                </div>
              );
            })}
        </div>
        <div className="flex items-center gap-[53px]">
          <h1 className="text-[#FAFAFA] font-inter text-[16px] font-bold leading-[28px] w-64px">
            Writers
          </h1>
        </div>
        <div className="flex items-center gap-[53px] ">
          <h1 className="text-[#FAFAFA] font-inter text-[16px] font-bold leading-[28px] w-64px">
            Stars
          </h1>
          {dataStar.cast?.slice(0, 5).map((actor: MovieStar, index: number) => {
            return (
              <div className="flex gap-[53px]" key={index}>
                <p className="text-[#FAFAFA] font-inter text-[16px] font-normal leadin-[24px]">
                  {actor.name}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
