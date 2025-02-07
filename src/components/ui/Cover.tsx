import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TOKEN } from "@/util/constant";
import { MovieNowPlayng } from "@/util/MovieType";
import Link from "next/link";
export async function CarouselDemo() {
  const response = await fetch(
    " https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
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
    return Math.floor((vote * 10) / 10)
      .toString()
      .replace(".", ",");
  }
  return (
    <div className="w-[100%] m-auto relative">
      <Carousel>
        <CarouselContent>
          {data.results
            ?.slice(0, 10)
            .map((movie: MovieNowPlayng, index: number) => {
              return (
                <CarouselItem key={index}>
                  <Link href={`catagory/${movie.id}`}>
                    <div key={index} className="w-[100wh] h-[600px] relative">
                      <div>
                        <div
                          className="w-full h-[600px] bg-cover bg-center bg-no-repeat absolute"
                          style={{
                            backgroundImage: ` url(https://image.tmdb.org/t/p/original${movie?.poster_path})`,
                          }}
                        ></div>
                        <div className=" absolute left-[140px] bottom-[158px] w-[404px] h-[264px] flex flex-col items-start gap-4">
                          <p className="text-white font-sans text-[16px] font-normal leading-9">
                            Now Playng:
                          </p>
                          <p className="text-white font-inter text-3xl font-bold leading-[40px] tracking-[-0.9px]">
                            {movie?.original_title}
                          </p>
                          <div className="flex">
                            <img src="/star.png" alt="" />
                            <p className="text-[#FAFAFA] text-lg font-semibold leading-[28px] font-inter">
                              {formatVoteAverage(movie?.vote_average)}
                            </p>
                            <p className="text-[var(--text-text-muted-foreground,#71717A)] text-base font-normal leading-7 font-inter">
                              /10
                            </p>
                          </div>

                          <p className="text-[#FAFAFA] font-inter text-xs font-normal leading-6">
                            {movie?.overview}
                          </p>
                        </div>
                      </div>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-[30px] " />
        <CarouselNext className="absolute right-[30px]" />
      </Carousel>
    </div>
  );
}
