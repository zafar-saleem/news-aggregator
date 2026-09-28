"use client";

import { ArticleListCard } from "./components/ArticleListCard"
import { ArticleListProps, ArticleListDataProps } from "./types";

export const ArticleList = ({ data }: ArticleListProps) => {
  return (
    <main className="flex w-full flex-col gap-6 col-span-4">
      {
        data.map(({ uuid, ...rest }: ArticleListDataProps) => (
          <ArticleListCard key={uuid} {...rest} />
        ))
      }
    </main>
  )
}
