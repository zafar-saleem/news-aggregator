"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCategoriesList } from "@/api/API.utils";

export function usePreferredCategories(filters = "") {
  return useQuery({
    queryKey: ["topics", filters],
    queryFn: () => fetchCategoriesList(),
    placeholderData: (prev) => prev, 
  });
}
