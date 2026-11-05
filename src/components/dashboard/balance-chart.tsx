"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip, YAxis } from "recharts";
import { BALANCE_HISTORY, formatCurrency, formatCompactDate } from "@/lib/sample-data";
import { useBalanceVisibility } from "@/components/layout/balance-visibility-context";

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: { value: number }[];
  label?: string;
}) {
  const { hidden } = useBalanceVisibility();
  if (!active || !payload?.length) return null;

  return (
    <div className="flex items-center gap-2 rounded-full bg-popover px-3 py-1.5 text-xs shadow-lg">
      <span className="font-medium text-muted-foreground">{formatCompactDate(label ?? "")}</span>
      <span className="font-mono font-semibold text-popover-foreground">
        {hidden ? "••••••" : formatCurrency(payload[0].value)}
      </span>
    </div>
  );
}

const TICK_INDEXES = [0, 7, 14, 21, 29];

export function BalanceChart() {
  return (
    <div>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={BALANCE_HISTORY} margin={{ top: 8, right: 0, bottom: 0, left: 0 }}>
            <defs>
              <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--foreground)" stopOpacity={0.15} />
                <stop offset="100%" stopColor="var(--foreground)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <YAxis domain={["dataMin - 20000", "dataMax + 20000"]} hide />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "var(--border)", strokeDasharray: "4 4" }}
            />
            <Area
              type="monotone"
              dataKey="balance"
              stroke="var(--foreground)"
              strokeWidth={2}
              fill="url(#balanceFill)"
              activeDot={{ r: 4, fill: "var(--foreground)" }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        {TICK_INDEXES.map((i, idx) => (
          <span key={i}>
            {idx === TICK_INDEXES.length - 1 ? "Today" : formatCompactDate(BALANCE_HISTORY[i].date)}
          </span>
        ))}
      </div>
    </div>
  );
}
