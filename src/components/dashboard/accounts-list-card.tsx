import Link from "next/link";
import { Card } from "@/components/ui/card";
import { MaskedMoney } from "@/components/shared/masked-money";
import { Sparkline } from "@/components/dashboard/sparkline";
import { ACCOUNTS, type AccountColor } from "@/lib/sample-data";
import { cn } from "@/lib/utils";

const DOT_COLOR: Record<AccountColor, string> = {
  brand: "bg-brand-600",
  teal: "bg-money-in",
  info: "bg-info",
  warning: "bg-warning",
};

export function AccountsListCard() {
  return (
    <section className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-foreground">Accounts</h2>
        <Link
          href="/accounts"
          className="text-sm font-medium text-muted-foreground hover:text-foreground"
        >
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {ACCOUNTS.map((account) => (
          <Card key={account.id} className="gap-3 rounded-2xl! p-5 shadow-none [--card-spacing:--spacing(5)]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className={cn("size-1.5 rounded-full", DOT_COLOR[account.color])} />
                <span className="text-sm font-medium text-foreground">{account.name}</span>
              </div>
              <span className="text-xs text-muted-foreground">●●{account.mask}</span>
            </div>

            <MaskedMoney value={account.balance} className="text-xl font-medium text-foreground" />
            <p className="text-xs text-muted-foreground">{account.type}</p>

            <div className="flex items-end justify-between">
              <span
                className={cn(
                  "text-xs font-medium",
                  account.change >= 0 ? "text-money-in" : "text-money-out"
                )}
              >
                {account.changeLabel}
              </span>
              <Sparkline data={account.sparkline} color={account.color} />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
