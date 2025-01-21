import Image from "next/image";
import CartsPopular from "./_components/CartsPopular";
import CardsUpcoming from "./_components/CardsUpcoming";
import CardsTopTated from "./_components/CardsTopRated";
export default async function Home() {
  return (
    <div className="w-[100vh] h-[4184px] m-auto  items-start content-start gap-8 flex-wrap">
      <CardsUpcoming />
      <CartsPopular />
      <CardsTopTated />
    </div>
  );
}
