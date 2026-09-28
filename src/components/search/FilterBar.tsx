"use client";

import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useSearchByKeyword } from "./hooks/useSearchByKeyword";

export const FilterBar = () => {
  const searchParams = useSearchParams();
  const { searchByKeyword } = useSearchByKeyword();

  return (
    <form onSubmit={searchByKeyword} className="relative rounded-full has-[input:active]:scale-[0.999] has-[input:focus]:shadow-lg transition bg-white flex flex-col">
      <Search className="absolute left-[1rem] top-[0.85rem]" size={30} strokeWidth={1} color="#999" />
      <input
        type="search"
        name="in_title"
        className="border w-full md:w-[calc(var(--aside-width))] p-4 pl-12 pr-[6rem] rounded-full border-gray-200 hover:shadow-md transition"
        placeholder="Search articles by keywords..."
        defaultValue={searchParams.get("in_title") as string}
        autoComplete="off"
      />
      <button className="absolute right-1 top-1 cursor-pointer rounded-full bg-[rgb(2,95,72)] text-white p-[13px] px-4">Search</button>
    </form>
  )
}
