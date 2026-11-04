"use client";

import { LineChart, Line, ResponsiveContainer, Tooltip, YAxis } from "recharts";
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
    <div className="flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs shadow-lg">
      <span className="font-medium text-foreground/70">{formatCompactDate(label ?? "")}</span>
      <span className="font-mono font-semibold text-foreground">
        {hidden ? "••••••" : formatCurrency(payload[0].value)}
      </span>
    </div>
  );
}

const TICK_INDEXES = [0, 7, 14, 21, 29];

export function BalanceChart() {
  return (
    <div>
      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={BALANCE_HISTORY} margin={{ top: 8, right: 0, bottom: 0, left: 0 }}>
            <YAxis domain={["dataMin - 20000", "dataMax + 20000"]} hide />
            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "var(--brand-300)", strokeDasharray: "4 4" }}
            />
            <Line
              type="monotone"
              dataKey="balance"
              stroke="#ffffff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5, fill: "#ffffff", stroke: "var(--brand-800)", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex justify-between text-xs text-white/50">
        {TICK_INDEXES.map((i, idx) => (
          <span key={i}>
            {idx === TICK_INDEXES.length - 1 ? "Today" : formatCompactDate(BALANCE_HISTORY[i].date)}
          </span>
        ))}
      </div>
    </div>
  );
}
