"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { WORKSPACE_MODES, type WorkspaceMode } from "@/lib/nav-items";

export function WorkspaceSwitcher() {
  const [mode, setMode] = useState<WorkspaceMode>("Banking");

  return (
    <div className="flex items-center gap-1 rounded-full bg-sidebar-accent/50 p-1">
      {WORKSPACE_MODES.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setMode(option)}
          aria-pressed={mode === option}
          className={cn(
            "flex-1 rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
            mode === option
              ? "bg-sidebar text-sidebar-foreground shadow-sm"
              : "text-sidebar-foreground/60 hover:text-sidebar-foreground"
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
