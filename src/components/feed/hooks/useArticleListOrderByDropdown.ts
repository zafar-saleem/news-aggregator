import { useEffect, useRef, useState } from "react";
import { options } from "../data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { deleteExistingParam } from "@/utils";

export const useArticleListDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    
    deleteExistingParam(params, "order_by");
    params.append("order_by", selected.value);

    router.replace(`${pathname}?${params}`, { scroll: true });
  }, [selected]);

  return { setSelected, open, dropdownRef, setOpen, selected }
}