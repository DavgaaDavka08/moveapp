import Image from "next/image";
import CartsPopular from "./_components/CartsPopular";
import CardsUpcoming from "./_components/CardsUpcoming";
import CardsTopTated from "./_components/CardsTopRated";
import { SeeMore1, SeeMore2, SeeMore3 } from "./_components/SeeMore";
import Feature from "./_components/Feature";
import { Footer } from "./_components/Footer";
import Header from "./_components/Header";
export default async function Home() {
  return (
    <div>
      <Feature />
      <SeeMore1 />
      <CardsUpcoming />
      <SeeMore2 />
      <CartsPopular />
      <SeeMore3 />
      <CardsTopTated />
      <Footer />
    </div>
  );
}
