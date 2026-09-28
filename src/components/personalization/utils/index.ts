export const isSourceInParams = ({searchParams,  id}) => 
  new URLSearchParams(searchParams.toString()).getAll("publisher_uuid").includes(id);

export const isCategoryInParams = ({ searchParams, label }) => {
  return new URLSearchParams(searchParams.toString()).getAll("topic").includes(label);
};

export const isStringInParams = ({ searchParams, publisher_uuid, name }) => {
  return new URLSearchParams(searchParams.toString()).getAll(name).includes(publisher_uuid);
};