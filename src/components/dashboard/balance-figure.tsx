"use client";

import { useBalanceVisibility } from "@/components/layout/balance-visibility-context";

export function BalanceFigure({ value }: { value: number }) {
  const { hidden } = useBalanceVisibility();

  if (hidden) {
    return <span className="text-display font-[380] tracking-tight text-white">••••••••</span>;
  }

  const [whole, cents] = value.toFixed(2).split(".");
  const wholeFormatted = Number(whole).toLocaleString("en-US");

  return (
    <span className="text-display font-[380] tracking-tight text-white">
      ${wholeFormatted}
      <span className="text-brand-300">.{cents}</span>
    </span>
  );
}
