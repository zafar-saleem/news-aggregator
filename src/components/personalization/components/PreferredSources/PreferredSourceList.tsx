import { PersonalizePanelTitles } from "../PersonalizePanelTitles"
import { sources } from "../../data"
import { PrefferedSourceItem } from "./PreferredSourceItem"
import { PreferredAuthorListProps } from "../types"

export const PrefferedSourceList = ({ title, icon }: PreferredAuthorListProps) => {
  return (
    <div className="flex flex-col gap-4 w-full pb-4">
      <PersonalizePanelTitles
        label={title}
        icon={icon}
      />
      <div className="flex flex-col gap-4 items-center jusitfy-center w-full">
        {
          sources.map(({
            label,
            sublabel,
            publisher_uuid,
            icon,
          }) => (
            <PrefferedSourceItem
              label={label}
              sublabel={sublabel}
              key={label}
              icon={icon}
              publisher_uuid={publisher_uuid}
            />
          ))
        }
      </div>
    </div>
  )
}
