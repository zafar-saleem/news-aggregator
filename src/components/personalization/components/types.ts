export type PersonalizePanelTitlesProps = {
  icon: any;
  label: string;
};

export type PersonalizePanelLabelProps = Partial<PersonalizePanelTitlesProps> & {
  sublabel: string;
  publisher_uuid: string;
} & Partial<{ name: string}>;

export type PrefferedListProps = Pick<PersonalizePanelTitlesProps, "label">;

export type PreferredAuthorListProps = {
  icon: any;
  title: string;
}

export type PersonalizePanelToggleCheckboxProps = Required<Pick<PersonalizePanelLabelProps, "publisher_uuid" | "name">>

export type PersonalizePanelToggleProps = {
  id: string;
  name: string;
}

export type FilterCallbackProps = {
  uuid: string;
  name: string;
  sublabel: string;
}

export type PersonalizePanelInfoBadgeProps = {
  category: string;
}

export type PreferredAuthorItemProps = {
  label: {
    name: string;
    sublabel: string;
    uuid: string;
  }
}
