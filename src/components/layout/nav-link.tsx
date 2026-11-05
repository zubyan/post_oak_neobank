"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useMobileNav } from "@/components/layout/mobile-nav-context";
import type { NavItem } from "@/lib/nav-items";

export function NavLink({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const { setOpen } = useMobileNav();
  const active = pathname === item.href;
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      onClick={() => setOpen(false)}
      className={cn(
        "flex items-center gap-1.5 rounded-md px-2 py-0.5 text-[15px] font-[360] transition-colors",
        active
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground/75 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
      )}
    >
      <span className="flex size-6 shrink-0 items-center justify-center">
        <Icon className="size-3" strokeWidth={1.75} />
      </span>
      <span className="flex-1 truncate">{item.label}</span>
      {item.badge ? (
        <Badge variant="secondary" className="h-5 shrink-0 px-1.5 text-[11px]">
          {item.badge}
        </Badge>
      ) : null}
    </Link>
  );
}
