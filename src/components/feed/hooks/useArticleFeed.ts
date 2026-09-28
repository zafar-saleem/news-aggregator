"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchNewsFeed } from "@/api/API.utils";
import { useSearchParams } from "next/navigation";

export function useArticleFeed(filters = "") {
  const searchParams = useSearchParams();
  const query = new URLSearchParams(searchParams);

  return useQuery({
    queryKey: ["articles", {
      publisher_uuid: query.get("publisher_uuid"),
      topic: query.get("topic"),
      order_by: query.get("order_by"),
      author_uuid: query.get("author_uuid"),
      in_title: query.get("in_title"),
    }],
    queryFn: () => fetchNewsFeed(query),
    // placeholderData: (prev) => prev, 
  });
}
