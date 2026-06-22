"use client";

import { createContext, useContext } from "react";

export const SkipContext = createContext(0);

export function useSkipSignal() {
  return useContext(SkipContext);
}
