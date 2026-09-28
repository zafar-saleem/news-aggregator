export const deleteExistingParam = (params: URLSearchParams, deleteParam: string) => {
  if (params.getAll(deleteParam)) {
    params.delete(deleteParam);
  }
}

export const buildQueryString = (formData: FormData, params: URLSearchParams) => {
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string" && value) {
      params.append(key, value);
    }
  }

  return params.toString();
}