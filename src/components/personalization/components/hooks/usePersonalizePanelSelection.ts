"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useUrlSingleSelect = (paramKey: string) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const checkedId = searchParams.get(paramKey);

  const select = useCallback(
    (id: string) => {
      const params = new URLSearchParams(searchParams.toString());

      if (params.get(paramKey) === id) {
        params.delete(paramKey);
      } else {
        params.set(paramKey, id);
      }

      const query = params.toString();
      
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: true });
    },
    [searchParams, router, pathname, paramKey]
  );

  return { checkedId, select };
}
