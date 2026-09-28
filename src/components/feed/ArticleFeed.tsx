"use client";

import { ArticleList } from "./ArticleList";
import { useArticleFeed } from "@/components/feed/hooks/useArticleFeed";
import { ArticleListEmptyState } from "./components/ArticleListEmptyState";
import { ArticleListLoadingState } from "./components/ArticleListLoadingState";
import { ArticleListOrderByDropdown } from "./components/ArticleListOrderByDropdown";

export function ArticleFeed({ filters }: any) {
  const { data, isLoading, isError } = useArticleFeed();
  
  if (isLoading) return <ArticleListLoadingState />;
  if (isError) throw new Error();
  if (data.data.length === 0) return <ArticleListEmptyState />;

  return (
    <div className="w-full col-span-6 lg:col-span-4 flex flex-col gap-4">
      <div className="self-end flex">
        <ArticleListOrderByDropdown />
      </div>
      <ArticleList data={data.data} />
    </div>
  );
}
