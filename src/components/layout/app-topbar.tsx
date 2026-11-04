"use client";

import { Search, Eye, EyeOff, Settings, Bell } from "lucide-react";
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
import { CURRENT_USER } from "@/lib/sample-data";

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
          variant="outline"
          size="icon"
          onClick={onClick}
          aria-label={label}
          className="size-9 rounded-xl text-foreground/70 shadow-none hover:text-foreground"
        >
          {children}
        </Button>
      </TooltipTrigger>
      <TooltipContent>{label}</TooltipContent>
    </Tooltip>
  );
}

export function AppTopbar() {
  const { hidden, toggle } = useBalanceVisibility();

  return (
    <header className="flex h-16 shrink-0 items-center justify-end gap-2 border-b border-border px-6">
      <div className="relative mr-auto hidden w-56 sm:block">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search"
          className="h-9 rounded-xl bg-muted/60 pr-12 pl-9 shadow-none"
        />
        <kbd className="pointer-events-none absolute top-1/2 right-2.5 -translate-y-1/2 rounded border border-border bg-background px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
          ⌘K
        </kbd>
      </div>

      <IconButton label={hidden ? "Show balances" : "Hide balances"} onClick={toggle}>
        {hidden ? <EyeOff className="size-[18px]" /> : <Eye className="size-[18px]" />}
      </IconButton>
      <IconButton label="Settings">
        <Settings className="size-[18px]" />
      </IconButton>
      <IconButton label="Notifications">
        <Bell className="size-[18px]" />
      </IconButton>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="ml-1 rounded-full outline-none ring-ring/50 focus-visible:ring-3">
            <Avatar className="size-9">
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

      <Button className="h-9 gap-1.5 rounded-xl px-4">Move money</Button>
    </header>
  );
}
