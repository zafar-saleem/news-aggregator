"use client";

import { useUrlSingleSelect } from "./usePersonalizePanelSelection";

export const usePreferredSourceSelection = (name: string) => useUrlSingleSelect(name);
