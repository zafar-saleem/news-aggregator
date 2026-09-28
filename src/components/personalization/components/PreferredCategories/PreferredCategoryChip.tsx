import { PrefferedListProps } from "../types"
import { usePreferredCategorySelection } from "../hooks/usePreferredCategorySelectionStore";

export const PreferredCategoryChip = ({ label }: PrefferedListProps) => {
  return (
    <label className="flex gap-1 cursor-pointer p-1 px-4 border transition border-gray-200 rounded-[0.5rem] hover:bg-[rgba(2,95,72,.1)]  hover:border-[rgba(2,95,72,.2)] has-[input:checked]:bg-[rgba(2,95,72,1)] has-[input:checked]:border-[rgba(2,95,72,1)] has-[input:checked]:text-white select-none">
      <PreferredCategoryRadioChipChecked label={label} />
      <span>{label}</span>
    </label>
  )
}

const PreferredCategoryRadioChipChecked = ({ label }: PrefferedListProps) => {
  const { checkedId, select } = usePreferredCategorySelection();

  return <input type="checkbox" checked={checkedId === label} onChange={() => select(label)} className="hidden" name="topic" value={label} />
}
