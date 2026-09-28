"use client";

import { PersonalizePanelTitles } from "../PersonalizePanelTitles"
import React from "react"
import { PreferredCategoryChip } from "./PreferredCategoryChip"
import { PreferredAuthorListProps } from "../types"
import { usePreferredCategories } from "../../hooks/usePreferredCategories";
import { Search } from "lucide-react";
import { PreferredCategoryListLoadingState } from "./PreferredCategoryListLoadingState";
import { PreferredCategoryListEmptyState } from "./PreferredCategoryListEmptyState";
import { useSearchParams } from "next/navigation";
import { PersonalizePanelInfoBadge } from "../PersonalizePanelInfoBadge";
import { useLocalFilter } from "../../hooks/useLocalFilter";

export const PreferredCategoryList = ({ title, icon }: PreferredAuthorListProps) => {
  const { data, isLoading, isError } = usePreferredCategories();
  const searchParams = useSearchParams();
  const { query, setQuery, filteredItems } = useLocalFilter(
    data?.data,
    (category) => category as string
  );

  if (isLoading) return <PreferredCategoryListLoadingState />;
  if (isError) throw new Error();
  if (data.data.length === 0) return <PreferredCategoryListEmptyState />;

  return (
    <div className="py-6 flex flex-col gap-4 max-h-[15lh]">
      <div>
        <PersonalizePanelTitles
          label={title}
          icon={icon}
        />
        <PersonalizePanelInfoBadge category={searchParams.get("topic") || ""} />
      </div>
      <label className="border border-gray-200 rounded-full relative">
        <Search className="absolute top-2 left-2" strokeWidth={2} color="#999" />
        <input
          type="search"
          placeholder="Filter below list of categories..."
          className="p-2 px-4 pl-9 w-full rounded-full"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <div className="flex gap-4 w-full flex-wrap overflow-y-scroll">
        {
          filteredItems.length === 0 ? (
          <p className="text-sm text-gray-500">No categories match "{query}"</p>
        ) : (
          filteredItems.map((category: string) => (
              <React.Fragment key={category}>
                <PreferredCategoryChip label={category} />
              </React.Fragment>
          ))
        )}
      </div>
    </div>
  )
}