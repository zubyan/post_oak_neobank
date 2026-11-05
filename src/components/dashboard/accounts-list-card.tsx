import Link from "next/link";
import { Landmark } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardAction,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MaskedMoney } from "@/components/shared/masked-money";
import { ACCOUNTS } from "@/lib/sample-data";

export function AccountsListCard() {
  return (
    <Card className="rounded-lg!">
      <CardHeader>
        <CardTitle className="text-base font-medium">Accounts</CardTitle>
        <CardAction>
          <Button asChild variant="link" size="sm" className="h-auto p-0 text-sm">
            <Link href="/accounts">View all accounts</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-1">
        {ACCOUNTS.map((account) => (
          <div
            key={account.id}
            className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-muted/50"
          >
            <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
              <Landmark className="size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">{account.name}</p>
              <p className="text-xs text-muted-foreground">●●●● {account.mask}</p>
            </div>
            <MaskedMoney value={account.balance} className="shrink-0 text-sm font-medium" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
