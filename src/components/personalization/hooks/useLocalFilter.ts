import { useMemo, useState } from "react";
import { AuthorFilterItemProps } from "./types";

export function useLocalFilter<T>(items: any | undefined, getSearchableText: (item: T) => string) {
  const [query, setQuery] = useState("");
  const filteredItems = useMemo(() => {
    if (!items) return [];
    if (!query.trim()) return items;

    const normalizedQuery = query.trim().toLowerCase();

    return items.filter((item: AuthorFilterItemProps) => {
      return getSearchableText(item as T).toLowerCase().includes(normalizedQuery)
    });
  }, [items, query, getSearchableText]);

  return { query, setQuery, filteredItems };
}
