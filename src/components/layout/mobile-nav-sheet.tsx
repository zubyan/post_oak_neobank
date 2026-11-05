"use client";

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { SidebarNav } from "@/components/layout/sidebar-nav";
import { useMobileNav } from "@/components/layout/mobile-nav-context";

export function MobileNavSheet() {
  const { open, setOpen } = useMobileNav();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side="left"
        className="w-72! gap-0! border-sidebar-border bg-sidebar! text-sidebar-foreground!"
      >
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <SidebarNav />
      </SheetContent>
    </Sheet>
  );
}
