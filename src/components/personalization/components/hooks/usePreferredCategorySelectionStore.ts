"use client";

import { useUrlSingleSelect } from "./usePersonalizePanelSelection";

export const usePreferredCategorySelection = () => useUrlSingleSelect("topic");
