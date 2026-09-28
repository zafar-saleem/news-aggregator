import { PersonalizePanelLabel } from "../PersonalizePanelLabel"
import { PersonalizePanelLabelProps } from "../types"

export const PrefferedSourceItem = ({
    label,
    sublabel,
    publisher_uuid,
    icon
}: PersonalizePanelLabelProps) => {
  return (
    <PersonalizePanelLabel
      label={label}
      sublabel={sublabel}
      icon={icon}
      publisher_uuid={publisher_uuid}
      name="publisher_uuid"
    />
  )
}
