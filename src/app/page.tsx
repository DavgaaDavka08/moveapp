import Image from "next/image";
import CartsPopular from "./_components/CartsPopular";
import CardsUpcoming from "./_components/CardsUpcoming";

import Feature from "./_components/Feature";

import CardsTopRated from "./_components/CardsTopRated";
export default async function Home() {
  return (
    <div>
      <Feature />
      <CardsUpcoming />
      <CartsPopular />
      <CardsTopRated />
    </div>
  );
}
