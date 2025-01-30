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
    <ToggleGroup type="multiple" onValueChange={handleClick}>
      {genres?.map((genre) => {
        return (
          <ToggleGroupItem
            key={genre.id}
            value={genre.id.toString()}
            aria-label="Toggle bold"
          >
            {genre.name}
          </ToggleGroupItem>
        );
      })}
    </ToggleGroup>
  );
}
