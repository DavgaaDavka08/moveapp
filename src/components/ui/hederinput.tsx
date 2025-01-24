import { Input } from "@/components/ui/input";

export function InputDemo() {
  return (
    <div className="flex relative gap-3 ">
      <div className="absolute bottom-[10px] left-[5px]">
        <img src="search.svg" alt="" />
      </div>
      <Input
        className="w-[397px] h-[36px] flex items-center gap-2 "
        type="email"
        placeholder="Search.."
      />
    </div>
  );
}
