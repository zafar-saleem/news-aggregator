"use client";

import { PersonalizePanelTitles } from "../PersonalizePanelTitles"
import { FilterCallbackProps, PreferredAuthorListProps } from "../types"
import { authors } from "../../data"
import React from "react"
import { PreferredAuthorItem } from "./PreferredAuthorItem"
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { PersonalizePanelInfoBadge } from "../PersonalizePanelInfoBadge";
import { AuthorFilterItemProps } from "../../hooks/types";
import { useLocalFilter } from "../../hooks/useLocalFilter";

const getAuthor = (author_uuid: string) => {
  return [...authors.nytimes, ...authors.bbc, ...authors.guardian].filter(author => author.uuid === author_uuid)[0]?.name
}

export const PreferredAuthorList = ({ title, icon }: PreferredAuthorListProps) => {
  const searchParams = useSearchParams();
  const { query, setQuery, filteredItems } = useLocalFilter(
    [...authors.nytimes, ...authors.bbc, ...authors.guardian],
    (author: FilterCallbackProps) => author.name
  );
  
  return (
    <div className="relative flex flex-col gap-4 w-full py-4 max-h-[20lh]">
      <div>
        <PersonalizePanelTitles
          label={title}
          icon={icon}
        />
        <PersonalizePanelInfoBadge category={getAuthor(searchParams.get("author_uuid") || "")} />
      </div>
      <label className="border border-gray-200 rounded-full relative">
        <Search className="absolute top-2 left-2" strokeWidth={2} color="#999" />
        <input
          type="search"
          placeholder="Filter below list of authors..."
          className="p-2 px-4 pl-9 w-full rounded-full"
          onChange={(event) => setQuery(event.target.value)}
        />
      </label>
      <div className="flex flex-col gap-4 items-center jusitfy-center w-full overflow-y-scroll">
        {
          filteredItems.length === 0 ? (
          <p className="text-sm text-gray-500">No authors match "{query}"</p>
        ) : (
          filteredItems.map((category: AuthorFilterItemProps) => (
            <React.Fragment key={`${category.uuid}`}>
              <PreferredAuthorItem label={category} />
            </React.Fragment>
          ))
        )}
      </div>
    </div>
  )
}
