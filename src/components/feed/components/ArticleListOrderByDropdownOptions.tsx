export const ArticleListOrderByDropdownOption = ({ setSelected, options, open, selected }) => {
  if (open) {
    return (
      <div className="flex flex-col gap-1 absolute left-0 top-full z-50 mt-2 w-full rounded-lg border border-gray-200 bg-white p-1 shadow-lg">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setSelected(option)}
            className={`cursor-pointer transition w-full rounded-md px-3 py-2 text-left text-sm transition-colors hover:bg-[rgb(238,248,240)] ${
              selected.value === option.value
                ? "bg-[rgb(238,248,240)] text-[rgb(21,81,55)] font-medium"
                : ""
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    )
  }
}