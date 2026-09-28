"use client";

import { useUrlSingleSelect } from "./usePersonalizePanelSelection";

export const usePreferredAuthorSelection = () => useUrlSingleSelect("author_uuid");
