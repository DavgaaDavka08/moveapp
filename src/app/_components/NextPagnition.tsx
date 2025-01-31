"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
// import { useState } from "react";

export function PaginationDemo() {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genreIds");
  const page = searchParams.get("page");
  const pagethird = searchParams.get("page");

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={"ganre?" + "genreIds=" + genre + "&page=1"}
            isActive={page == "1"}
          >
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={"ganre?" + "genreIds=" + genre + "&page=2"}
            isActive={page == "2"}
          >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href={"ganre?" + "genreIds=" + genre + "&page=3"}
            isActive={pagethird == "3"}
          >
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
