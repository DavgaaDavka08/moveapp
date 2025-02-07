"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useRouter } from "next/navigation";

export function ToggleGroupDemo({
  genres,
}: {
  genres: { id: string; name: string }[];
}) {
  const { push } = useRouter();
  const handleClick = (selectedGenreIds: string[]) => {
    push(`/ganre/14?genreIds=${selectedGenreIds}`);
  };

  return (
    <div>
      <ToggleGroup type="multiple" onValueChange={handleClick}>
        <div>
          {genres?.map((genre) => {
            return (
              <ToggleGroupItem key={genre.id} value={genre.id.toString()}>
                <p className=" inline-flex items-center border px-2.5 py-0.5 text-xs font-semibold transition-colors  text-foreground rounded-full cursor-pointer">
                  {genre.name}
                  <img src="/arrow.png" alt="" />
                </p>
              </ToggleGroupItem>
            );
          })}
        </div>
      </ToggleGroup>
    </div>
  );
}
