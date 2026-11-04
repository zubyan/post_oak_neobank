"use client";

import { Search, ArrowLeftRight, Eye, EyeOff, Settings, Bell } from "lucide-react";
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
          variant="ghost"
          size="icon"
          onClick={onClick}
          aria-label={label}
          className="size-9 rounded-full text-foreground/70 hover:text-foreground"
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
    <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border px-6">
      <div className="relative min-w-0 flex-1 md:max-w-[180px] lg:max-w-xs xl:max-w-sm">
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search for anything"
          className="h-9 rounded-full bg-muted/50 pl-9"
        />
      </div>

      <div className="flex shrink-0 items-center justify-end gap-1.5">
        <Button variant="outline" className="h-9 gap-1.5 rounded-full px-4">
          <ArrowLeftRight className="size-3.5" />
          Move money
        </Button>

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
