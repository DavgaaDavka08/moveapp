import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export const page = () => {
  return (
    <div>
      <DropdownMenu />
      <Link href={"/"}>hjkerh</Link>
      <ModeToggle />
    </div>
  );
};
export default page;
