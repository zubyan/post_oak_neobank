"use client";

import { useState } from "react";
import { TrendingUp, LineChart as LineChartIcon, Table2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { MaskedMoney } from "@/components/shared/masked-money";
import { BalanceFigure } from "@/components/dashboard/balance-figure";
import { BalanceChart } from "@/components/dashboard/balance-chart";
import { BalanceTable } from "@/components/dashboard/balance-table";
import {
  TOTAL_BALANCE,
  MONEY_IN_30D,
  MONEY_OUT_30D,
  BALANCE_CHANGE_30D,
  BALANCE_CHANGE_PCT_30D,
  RUNWAY_MONTHS,
  formatCurrencyWhole,
} from "@/lib/sample-data";
import { cn } from "@/lib/utils";

const RANGE_OPTIONS = ["1W", "1M", "3M", "1Y", "All"];

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs text-white/60">{label}</p>
      <p className="mt-0.5 font-medium text-white">{children}</p>
    </div>
  );
}

export function BalanceCard() {
  const [range, setRange] = useState("1M");
  const [view, setView] = useState<"chart" | "table">("chart");

  return (
    <Card className="gap-6 rounded-3xl! bg-brand-800 p-6 text-white shadow-none ring-0 lg:p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <p className="text-sm text-white/60">Total balance</p>
          <div className="mt-1">
            <BalanceFigure value={TOTAL_BALANCE} />
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/15 px-2.5 py-1 text-xs font-medium text-brand-100">
              <TrendingUp className="size-3" />
              {(BALANCE_CHANGE_PCT_30D * 100).toFixed(1)}%
            </span>
            <span className="text-sm text-white/70">
              +{formatCurrencyWhole(BALANCE_CHANGE_30D)} this month
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-start gap-x-8 gap-y-4">
          <Stat label="Money in">
            <MaskedMoney value={MONEY_IN_30D} className="text-brand-200" />
          </Stat>
          <Stat label="Money out">
            <MaskedMoney value={MONEY_OUT_30D} className="text-[oklch(0.8_0.1_20)]" />
          </Stat>
          <Stat label="Runway">{RUNWAY_MONTHS.toFixed(1)} mo</Stat>

          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 rounded-full bg-white/10 p-1">
              {RANGE_OPTIONS.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRange(option)}
                  className={cn(
                    "rounded-full px-2.5 py-1 text-xs font-medium transition-colors",
                    range === option
                      ? "bg-white text-brand-900"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-0.5 rounded-full bg-white/10 p-1">
              <button
                type="button"
                onClick={() => setView("chart")}
                aria-label="Chart view"
                className={cn(
                  "flex size-6 items-center justify-center rounded-full transition-colors",
                  view === "chart" ? "bg-white text-brand-900" : "text-white/70 hover:text-white"
                )}
              >
                <LineChartIcon className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setView("table")}
                aria-label="Table view"
                className={cn(
                  "flex size-6 items-center justify-center rounded-full transition-colors",
                  view === "table" ? "bg-white text-brand-900" : "text-white/70 hover:text-white"
                )}
              >
                <Table2 className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {view === "chart" ? <BalanceChart /> : <BalanceTable />}
    </Card>
  );
}
