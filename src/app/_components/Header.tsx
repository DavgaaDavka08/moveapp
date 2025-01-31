import { ModeToggle } from "@/components/theme-toggle";
import { InputDemo } from "@/components/ui/hederinput";
import SearchInput from "./IputData";
import PopoverDemo from "@/components/popoverimport";
import { Star } from "lucide-react";
import Link from "next/link";

export default async function Header() {
  return (
    <div className="max-w-[1280px] h-[80px] flex m-auto py-[16px] justify-between items-center flex-shrink-0 ">
      <Link href="/">
        <div className="flex gap-2 items-center">
          <img src="/film.png" alt="" />
          <h4 className="text-indigo-700 font-inter italic font-bold text-base leading-5 tracking-wide">
            movie z
          </h4>
        </div>
      </Link>

      <div className="flex gap-3 items-center">
        <PopoverDemo />
        <SearchInput />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
}
