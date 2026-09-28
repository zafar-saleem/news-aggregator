import { PersonalizePanelInfoBadgeProps } from "./types";

export const PersonalizePanelInfoBadge = ({ category }: PersonalizePanelInfoBadgeProps) => {
  if (category) {
    return (
      <span className="bg-[rgb(248,249,245)] w-fit font-semibold flex text-xs p-1 px-4 text-gray-600 rounded-full">{category} selected</span>
    )
  }
}