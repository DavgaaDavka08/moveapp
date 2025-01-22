import Image from "next/image";
import CartsPopular from "./_components/CartsPopular";
import CardsUpcoming from "./_components/CardsUpcoming";
import CardsTopTated from "./_components/CardsTopRated";
import { SeeMore1, SeeMore2, SeeMore3 } from "./_components/SeeMore";
import { ModeToggle } from "@/components/theme-toggle";
import Feature from "./_components/Feature";
export default async function Home() {
  return (
    <div>
      <ModeToggle />
      <Feature />
      <SeeMore1 />
      <CardsUpcoming />
      <SeeMore2 />
      <CartsPopular />
      <SeeMore3 />
      <CardsTopTated />
    </div>
  );
}
