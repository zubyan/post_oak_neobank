"use client";

import { Separator } from "@/components/ui/separator";
import { WorkspaceSwitcher } from "@/components/layout/workspace-switcher";
import { NavLink } from "@/components/layout/nav-link";
import { BookmarksList } from "@/components/layout/bookmarks-list";
import { PRIMARY_NAV, SECONDARY_NAV } from "@/lib/nav-items";

export function SidebarNav() {
  return (
    <>
      <div className="flex items-center gap-2 px-5 pt-5 pb-4">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-md bg-brand-700 text-sm font-semibold text-white">
          P
        </div>
        <p className="truncate text-sm font-semibold text-sidebar-foreground">Post Oak</p>
      </div>

      <div className="px-2 pb-3">
        <WorkspaceSwitcher />
      </div>

      <nav className="flex flex-col gap-0.5 px-2">
        {PRIMARY_NAV.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>

      <Separator className="my-3 bg-sidebar-border" />

      <nav className="flex flex-col gap-0.5 px-2">
        {SECONDARY_NAV.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}
      </nav>

      <Separator className="my-3 bg-sidebar-border" />

      <div className="flex-1 overflow-y-auto pb-4">
        <BookmarksList />
      </div>
    </>
  );
}
