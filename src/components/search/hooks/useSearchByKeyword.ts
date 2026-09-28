import { buildQueryString, deleteExistingParam } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SubmitEvent } from "react";

export const useSearchByKeyword = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  
  const searchByKeyword  = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    deleteExistingParam(params, "in_title");
    const generatedParams = buildQueryString(formData, params);
    router.replace(`${pathname}?${generatedParams}`, { scroll: true });
  }

  return { searchByKeyword }
}