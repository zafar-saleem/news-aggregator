"use client";

import { fetchNewsFeed } from "@/api/API.utils";
import { useQuery } from "@tanstack/react-query";

export const useUsersQuery = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: () => fetchNewsFeed("order_by=recent"),
  });
}
