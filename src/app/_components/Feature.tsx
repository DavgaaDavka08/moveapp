import { Carousel } from "@/components/ui/carousel";
import Image from "next/image";
import { CarouselDemo } from "./Cover";

export default function Feature() {
  return (
    <div>
      <div className=" w-[100wh] m-auto">
        {/* <Image src={""} width={3000} height={600} alt="" /> */}
        <div className="">
          <CarouselDemo />
        </div>
      </div>
    </div>
  );
}
