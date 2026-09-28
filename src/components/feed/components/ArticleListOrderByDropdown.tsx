"use client";

import { ArticleListOrderByDropdownOption } from "./ArticleListOrderByDropdownOptions";
import { options } from "../data";
import { useArticleListDropdown } from "../hooks/useArticleListOrderByDropdown";

export const ArticleListOrderByDropdown = () => {
  const { setSelected, open, dropdownRef, setOpen, selected } = useArticleListDropdown();

  return (
    <div ref={dropdownRef} className="relative w-60 flex flex-col gap-1 rounded-lg">
      <span className="w-full self-center ml-auto text-xs pl-1 text-gray-500">Order by</span>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="cursor-pointer flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white px-4 py-2 text-left text-sm text-gray-900 hover:shadow-lg transition"
      >
        <span>{selected.label}</span>
        <span
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ↓
        </span>
      </button>

      <ArticleListOrderByDropdownOption setSelected={setSelected} options={options} open={open} selected={selected} />
    </div>
  );
}