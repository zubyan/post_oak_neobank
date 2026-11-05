"use client";

import { useBalanceVisibility } from "@/components/layout/balance-visibility-context";

export function BalanceFigure({ value }: { value: number }) {
  const { hidden } = useBalanceVisibility();

  if (hidden) {
    return <span className="text-display font-normal tracking-tight text-white text-6xl">••••••••</span>;
  }

  const [whole, cents] = value.toFixed(2).split(".");
  const wholeFormatted = Number(whole).toLocaleString("en-US");

  return (
    <span className="text-display font-normal tracking-tight text-white text-6xl">
      ${wholeFormatted}
      <span className="text-brand-300">.{cents}</span>
    </span>
  );
}
