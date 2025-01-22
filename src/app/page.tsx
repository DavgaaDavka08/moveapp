import Image from "next/image";
import CartsPopular from "./_components/CartsPopular";
import CardsUpcoming from "./_components/CardsUpcoming";
import CardsTopTated from "./_components/CardsTopRated";
export default async function Home() {
  return (
    <div className="flex flex-col  gap-x-8 gap-y-8">
      <CardsUpcoming />
      <CartsPopular />
      <CardsTopTated />
    </div>
  );
}
