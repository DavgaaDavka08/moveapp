import { PopoverDemo } from "@/components/popoverimport";
import { ModeToggle } from "@/components/theme-toggle";
import { InputDemo } from "@/components/ui/hederinput";
import SearchInput from "./IputData";

export default async function Header() {
  return (
    <div className="max-w-[1280px] h-[80px] flex m-auto py-[16px] justify-between items-center flex-shrink-0 ">
      <div className="flex gap-2 items-center">
        <img src="film.svg" alt="" />
        <h4>movie z</h4>
      </div>
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
