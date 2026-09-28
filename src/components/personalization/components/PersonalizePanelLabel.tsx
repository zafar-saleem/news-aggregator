import Image from "next/image";
import { PersonalizePanelToggle } from "./PersonalizePanelToggle";
import { PersonalizePanelLabelProps } from "./types";

const TOTAL_LETTERS_ALLOWED = 53;

const truncateLabel = (label: string) => {
  return label.length > TOTAL_LETTERS_ALLOWED ? `${label.slice(0, 34)}...` : label;
}

export const PersonalizePanelLabel = ({
  label = "",
  sublabel,
  icon,
  publisher_uuid,
  name = "",
}: PersonalizePanelLabelProps) => {
  if (icon) {
    return (
      <div className="flex gap-2 w-full">
        <Image
          src={icon}
          width={25}
          height={25}
          alt=""
          className="w-[25px] h-auto aspect-[1/1] object-contain self-start mt-1"
        />
        <p className="flex flex-col">
          <span className="font-medium">{truncateLabel(label)}</span>
          <span className="text-gray-500 text-sm">{sublabel}</span>
        </p>
        <PersonalizePanelToggle id={publisher_uuid} name={name} />
      </div>
    )  
  }

  return (
    <div className="flex w-full">
      <p className="flex flex-col">
        <span className="font-medium">{truncateLabel(label)}</span>
        <span className="text-gray-500 text-sm">{sublabel}</span>
      </p>
      <PersonalizePanelToggle id={publisher_uuid} name={name} />
    </div>
  )
}
