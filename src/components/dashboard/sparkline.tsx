"use client";

import { LineChart, Line, ResponsiveContainer } from "recharts";
import type { AccountColor } from "@/lib/sample-data";

const COLOR_VAR: Record<AccountColor, string> = {
  brand: "var(--brand-600)",
  teal: "var(--money-in)",
  info: "var(--info)",
  warning: "var(--warning)",
};

export function Sparkline({ data, color }: { data: number[]; color: AccountColor }) {
  const points = data.map((value, i) => ({ i, value }));

  return (
    <div className="h-8 w-20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={points} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={COLOR_VAR[color]}
            strokeWidth={1.75}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
