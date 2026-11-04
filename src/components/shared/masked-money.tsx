"use client";

import { useBalanceVisibility } from "@/components/layout/balance-visibility-context";
import { formatCurrency } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

export function MaskedMoney({
  value,
  className,
  signed = false,
}: {
  value: number;
  className?: string;
  signed?: boolean;
}) {
  const { hidden } = useBalanceVisibility();

  if (hidden) {
    return <span className={cn("font-mono tracking-wider", className)}>••••••</span>;
  }

  const formatted = formatCurrency(Math.abs(value));
  const prefix = signed ? (value < 0 ? "-" : "+") : value < 0 ? "-" : "";

  return (
    <span className={cn("font-mono", className)}>
      {prefix}
      {formatted}
    </span>
  );
}
