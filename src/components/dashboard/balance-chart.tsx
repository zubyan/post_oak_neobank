"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
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
    <div className="rounded-md border border-border bg-popover px-3 py-2 text-xs shadow-md">
      <p className="text-muted-foreground">{formatCompactDate(label ?? "")}</p>
      <p className="font-mono font-medium text-popover-foreground">
        {hidden ? "••••••" : formatCurrency(payload[0].value)}
      </p>
    </div>
  );
}

export function BalanceChart() {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={BALANCE_HISTORY} margin={{ top: 8, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="balanceFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--brand-400)" stopOpacity={0.35} />
              <stop offset="100%" stopColor="var(--brand-400)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="date" hide />
          <YAxis domain={["dataMin - 20000", "dataMax + 20000"]} hide />
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: "var(--border)" }} />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="var(--brand-400)"
            strokeWidth={2}
            fill="url(#balanceFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
