"use client";

import { useEffect } from "react";
import type { ThemeKey } from "@/config/types";

export default function BranchHtmlController({ branch, mode }: { branch: ThemeKey; mode?: "light" | "dark" }) {
  useEffect(() => {
    document.documentElement.dataset.branch = branch;

    if (mode) {
      document.documentElement.dataset.branchMode = mode;
    } else {
      delete document.documentElement.dataset.branchMode;
    }
  }, [branch, mode]);

  return null;
}
