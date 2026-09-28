import { PersonalizePanelLabel } from "../PersonalizePanelLabel"
import { PreferredAuthorItemProps } from "../types"

export const PreferredAuthorItem = ({ label }: PreferredAuthorItemProps) => {
  return (
    <PersonalizePanelLabel
      label={label.name}
      sublabel={label.sublabel}
      publisher_uuid={label.uuid}
      name="author_uuid"
    />
  )
}
