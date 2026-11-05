"use client";

import { useState } from "react";
import { LineChart, Table2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MaskedMoney } from "@/components/shared/masked-money";
import { BalanceChart } from "@/components/dashboard/balance-chart";
import { BalanceTable } from "@/components/dashboard/balance-table";
import { TOTAL_BALANCE, MONEY_IN_30D, MONEY_OUT_30D } from "@/lib/sample-data";

const RANGE_OPTIONS = ["Last 7 days", "Last 30 days", "Last 90 days"];

export function BalanceCard() {
  const [range, setRange] = useState(RANGE_OPTIONS[1]);
  const [view, setView] = useState<"chart" | "table">("chart");

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardDescription>Total balance</CardDescription>
        <CardTitle>
          <MaskedMoney
            value={TOTAL_BALANCE}
            className="text-display font-[380] text-foreground"
          />
        </CardTitle>
        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="rounded-full">
                {range}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {RANGE_OPTIONS.map((option) => (
                <DropdownMenuItem key={option} onSelect={() => setRange(option)}>
                  {option}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex items-center gap-8 text-sm">
          <div>
            <p className="text-muted-foreground">Money in</p>
            <MaskedMoney value={MONEY_IN_30D} signed className="font-medium text-money-in" />
          </div>
          <div>
            <p className="text-muted-foreground">Money out</p>
            <MaskedMoney value={-MONEY_OUT_30D} signed className="font-medium text-money-out" />
          </div>

          <div className="ml-auto">
            <ToggleGroup
              type="single"
              value={view}
              onValueChange={(v) => v && setView(v as "chart" | "table")}
              variant="outline"
              size="sm"
            >
              <ToggleGroupItem value="chart" aria-label="Chart view">
                <LineChart className="size-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="table" aria-label="Table view">
                <Table2 className="size-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>

        {view === "chart" ? <BalanceChart /> : <BalanceTable />}
      </CardContent>
    </Card>
  );
}
