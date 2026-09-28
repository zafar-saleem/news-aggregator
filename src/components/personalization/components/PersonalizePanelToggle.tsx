"use client";

import { usePreferredSourceSelection } from "./hooks/usePreferredSourceSelection";
import { PersonalizePanelToggleCheckboxProps, PersonalizePanelToggleProps } from "./types";

export const PersonalizePanelToggle = ({ id, name }: PersonalizePanelToggleProps) => {
  return (
    <label className="relative self-center ml-auto w-[3rem] h-[1.5rem] cursor-pointer rounded-full bg-[rgb(217,228,217)] transition has-[input:checked]:[&>div]:translate-x-[1.5rem] has-[input:checked]:bg-[rgb(2,109,80)]">
      <PersonalizePanelToggleCheckbox publisher_uuid={id} name={name} />
      <div className="absolute top-[0.14rem] left-[0.14rem] transition rounded-full w-[1.25rem] aspect-[1/1] bg-[rgb(255,255,253)]" />
    </label>
  )
}

const PersonalizePanelToggleCheckbox = ({ publisher_uuid, name }: PersonalizePanelToggleCheckboxProps) => {
  const { checkedId, select } = usePreferredSourceSelection(name);

  return (
    <input type="checkbox" checked={checkedId === publisher_uuid} onChange={() => select(publisher_uuid)} className="hidden" name={name} value={publisher_uuid} />
  );
}
