import { buildQueryString, deleteExistingParam } from "@/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { SubmitEvent } from "react";

export const usePreferrencesSave = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  
  const onPreferrencesSave = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    deleteExistingParam(params, "publisher_uuid");
    deleteExistingParam(params, "topic");
    deleteExistingParam(params, "author_uuid");
    const generatedParams = buildQueryString(formData, params);
    
    router.replace(`${pathname}?${generatedParams}`, { scroll: true });
  }

  return { onPreferrencesSave };
}
