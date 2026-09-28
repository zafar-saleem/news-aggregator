"use client";

import { useUsersQuery } from "./hooks/useNewsQuery";

type ArticleFeedProviderProps = {
  children: (state: any) => React.ReactNode;
};

export function ArticleFeedProvider({ children }: ArticleFeedProviderProps) {
  const { data, isLoading, isError } = useUsersQuery();
  console.log(data, isLoading, isError);
  return children({ data, isLoading, isError });
}
