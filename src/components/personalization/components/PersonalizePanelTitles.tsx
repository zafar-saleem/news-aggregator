import { useSearchParams } from "next/navigation";
import { PersonalizePanelInfoButton } from "./PersonalizePanelInfoButton"
import { PersonalizePanelTitlesProps } from "./types"

export const PersonalizePanelTitles = ({
  label,
  icon,
}: PersonalizePanelTitlesProps) => {
  return (
    <div className="flex gap-2">
      {icon}
      <span className="text-[1rem] font-bold">{label}</span>
      {/* <PersonalizePanelInfoButton /> */}
    </div>
  )
}
