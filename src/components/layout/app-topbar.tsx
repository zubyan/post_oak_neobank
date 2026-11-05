"use client";

import { Search, ArrowLeftRight, Eye, EyeOff, Settings, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useBalanceVisibility } from "@/components/layout/balance-visibility-context";
import { useMobileNav } from "@/components/layout/mobile-nav-context";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { CURRENT_USER } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

function IconButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClick}
          aria-label={label}
          className="size-8 rounded-full p-0 text-foreground/70 hover:text-foreground"
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

function MoveMoneyButton({ className }: { className?: string }) {
  return (
    <Button
      variant="outline"
      className={cn("h-auto gap-1.5 rounded-full px-4 py-1 text-[15px]", className)}
    >
      <ArrowLeftRight className="size-3.5" />
      Move money
    </Button>
  );
}

export function AppTopbar() {
  const { hidden, toggle } = useBalanceVisibility();
  const { setOpen } = useMobileNav();

  return (
    <header className="flex shrink-0 items-center justify-between gap-3 border-b border-border px-6 py-3">
      {/* Left zone: hamburger + brand (mobile only) + move money (mobile only) + search.
          On desktop everything but search collapses away, leaving search alone on the
          far left so `justify-between` splits it from the right zone cleanly. */}
      <div className="flex min-w-0 flex-1 items-center gap-2 md:flex-initial">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
          aria-label="Open navigation menu"
          className="size-8 shrink-0 rounded-full p-0 text-foreground/70 hover:text-foreground md:hidden"
        >
          <Menu className="size-[18px]" />
        </Button>

        <div className="flex shrink-0 items-center gap-2 md:hidden">
          <div className="flex size-6 items-center justify-center rounded-md bg-brand-700 text-xs font-semibold text-white">
            P
          </div>
          <span className="text-sm font-semibold text-foreground">Post Oak</span>
        </div>

        <MoveMoneyButton className="shrink-0 md:hidden" />

        <div className="relative min-w-0 flex-1 md:max-w-[180px] lg:max-w-xs xl:max-w-sm">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search for anything"
            className="h-8 rounded-full bg-muted/50 pl-9"
          />
        </div>
      </div>

      {/* Right zone: move money (desktop only, grouped with utilities) + utility icons + avatar. */}
      <div className="flex shrink-0 items-center gap-1.5">
        <MoveMoneyButton className="hidden md:inline-flex" />

        <IconButton label={hidden ? "Show balances" : "Hide balances"} onClick={toggle}>
          {hidden ? <EyeOff className="size-[18px]" /> : <Eye className="size-[18px]" />}
        </IconButton>
        <ThemeToggle />
        <IconButton label="Settings">
          <Settings className="size-[18px]" />
        </IconButton>
        <IconButton label="Notifications">
          <Bell className="size-[18px]" />
        </IconButton>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-1 rounded-full outline-none ring-ring/50 focus-visible:ring-3">
              <Avatar className="size-8">
                <AvatarFallback className="bg-brand-700 text-xs text-white">
                  {CURRENT_USER.initials}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48">
            <DropdownMenuLabel>{CURRENT_USER.name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
