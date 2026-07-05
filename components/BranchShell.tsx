"use client";

import { useCallback, useSyncExternalStore } from "react";
import BranchFooter from "@/components/BranchFooter";
import BranchHtmlController from "@/components/BranchHtmlController";
import BranchNavbar from "@/components/BranchNavbar";
import type { BranchKey } from "@/config/types";

type BranchMode = "light" | "dark";

type BranchShellProps = {
  branch: BranchKey;
  children: React.ReactNode;
};

const branchModeStoragePrefix = "prime-branch-mode";
const branchModeChangeEvent = "prime-branch-mode-change";

function getBranchModeStorageKey(branch: BranchKey) {
  return `${branchModeStoragePrefix}-${branch}`;
}

function readBranchModeSnapshot(branch: BranchKey): BranchMode {
  if (typeof window === "undefined") return "dark";

  const stored = window.localStorage.getItem(getBranchModeStorageKey(branch));
  return stored === "light" || stored === "dark" ? stored : "dark";
}

function subscribeToBranchModeChanges(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  window.addEventListener("storage", onStoreChange);
  window.addEventListener(branchModeChangeEvent, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(branchModeChangeEvent, onStoreChange);
  };
}

export default function BranchShell({ branch, children }: BranchShellProps) {
  const mode = useSyncExternalStore<BranchMode>(
    subscribeToBranchModeChanges,
    () => readBranchModeSnapshot(branch),
    () => "dark"
  );

  const setMode = useCallback(
    (nextMode: BranchMode) => {
      window.localStorage.setItem(getBranchModeStorageKey(branch), nextMode);
      window.dispatchEvent(new Event(branchModeChangeEvent));
    },
    [branch]
  );

  return (
    <div data-branch={branch} data-branch-mode={mode} className="min-h-screen bg-[var(--page-bg)] text-[var(--theme-text)]">
      <BranchHtmlController branch={branch} mode={mode} />
      <BranchNavbar branch={branch} mode={mode} onToggleMode={() => setMode(mode === "dark" ? "light" : "dark")} />
      {children}
      <BranchFooter branch={branch} />
    </div>
  );
}
