import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const BRAND_SWATCHES = [
  "50",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
  "950",
] as const;

const NAV_ITEMS = [
  { label: "Home", active: true },
  { label: "Tasks", active: false },
  { label: "Command", active: false },
  { label: "Accounts", active: false },
  { label: "Transactions", active: false },
  { label: "Cards", active: false },
];

const WIDGET_CARDS = [
  { title: "Credit Card", figure: "$12,480.32", note: "Available credit" },
  { title: "Bill Pay", figure: "3", note: "Bills due this week" },
  { title: "Invoicing", figure: "$8,250.00", note: "Outstanding invoices" },
];

const TRANSACTIONS = [
  { name: "Figma Inc.", date: "Oct 31, 2026", account: "Checking ●●4821", amount: -1200.0 },
  { name: "Client payment — Horizon LLC", date: "Oct 29, 2026", account: "Checking ●●4821", amount: 8500.0 },
  { name: "AWS", date: "Oct 28, 2026", account: "Operating ●●9043", amount: -642.18 },
  { name: "Payroll run #14", date: "Oct 25, 2026", account: "Payroll ●●2210", amount: -24680.5 },
  { name: "Stripe payout", date: "Oct 24, 2026", account: "Checking ●●4821", amount: 15230.77 },
];

function formatMoney(value: number) {
  const abs = Math.abs(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return value < 0 ? `-${abs}` : `+${abs}`;
}

export default function StyleTestPage() {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar mock — verifies hover/active states, sidebar tokens */}
      <aside className="hidden w-64 shrink-0 border-r border-sidebar-border bg-sidebar p-4 md:block">
        <div className="mb-6 flex items-center gap-2 px-2">
          <div className="flex size-8 items-center justify-center rounded-md bg-brand-700 font-heading text-sm font-semibold text-white">
            P
          </div>
          <span className="font-heading text-base font-semibold text-sidebar-foreground">
            Post Oak
          </span>
        </div>
        <nav className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              className={cn(
                "rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <Separator className="my-4" />
        <p className="px-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Bookmarks
        </p>
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent">
            <span className="text-sidebar-foreground/80">Operating</span>
            <span className="font-mono text-xs text-muted-foreground">$142,980</span>
          </div>
          <div className="flex items-center justify-between rounded-md px-3 py-2 text-sm hover:bg-sidebar-accent">
            <span className="text-sidebar-foreground/80">Payroll</span>
            <span className="font-mono text-xs text-muted-foreground">$38,210</span>
          </div>
        </div>
      </aside>

      <main className="flex-1 space-y-10 p-8">
        <header className="space-y-1">
          <h1 className="font-heading text-2xl font-semibold tracking-tight">
            Style test — border, spacing, type &amp; color check
          </h1>
          <p className="text-sm text-muted-foreground">
            Throwaway preview page, not part of the real dashboard. Delete before shipping.
          </p>
        </header>

        {/* Typography scale */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Typography
          </h2>
          <Card>
            <CardContent className="space-y-3 pt-6">
              <p className="font-heading text-4xl font-medium">$128,430.12</p>
              <p className="font-heading text-2xl font-medium">Heading / Fraunces 2xl</p>
              <p className="text-lg font-medium">Body large / Geist Sans lg</p>
              <p className="text-sm">Body small / Geist Sans sm</p>
              <p className="text-xs text-muted-foreground">Caption / muted xs</p>
              <p className="font-mono text-sm">$1,204.50 — Geist Mono for figures</p>
            </CardContent>
          </Card>
        </section>

        {/* Brand color ramp */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Brand green ramp (placeholder — swap in globals.css)
          </h2>
          <div className="grid grid-cols-11 gap-2">
            {BRAND_SWATCHES.map((shade) => (
              <div key={shade} className="space-y-1">
                <div
                  className="h-12 rounded-md border border-border"
                  style={{ backgroundColor: `var(--brand-${shade})` }}
                />
                <p className="text-center text-xs text-muted-foreground">{shade}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full" style={{ backgroundColor: "var(--money-in)" }} />
              <span className="text-xs text-muted-foreground">money-in</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-4 rounded-full" style={{ backgroundColor: "var(--money-out)" }} />
              <span className="text-xs text-muted-foreground">money-out</span>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Buttons
          </h2>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Send</Button>
            <Button variant="secondary">Transfer</Button>
            <Button variant="outline">Deposit</Button>
            <Button variant="ghost">Request</Button>
            <Button variant="destructive">Upload bill</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Balance + widget cards — verifies card radius/border/shadow and spacing scale */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Cards
          </h2>
          <Card className="rounded-xl">
            <CardHeader>
              <CardDescription>Total balance</CardDescription>
              <CardTitle className="font-heading text-3xl font-medium">
                $142,980.44
              </CardTitle>
              <CardAction>
                <Badge variant="secondary">Last 30 days</Badge>
              </CardAction>
            </CardHeader>
            <CardContent className="flex gap-8 text-sm">
              <div>
                <p className="text-muted-foreground">Money in</p>
                <p className="font-mono font-medium" style={{ color: "var(--money-in)" }}>
                  +$23,730.77
                </p>
              </div>
              <div>
                <p className="text-muted-foreground">Money out</p>
                <p className="font-mono font-medium" style={{ color: "var(--money-out)" }}>
                  -$26,522.68
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {WIDGET_CARDS.map((widget) => (
              <Card key={widget.title} className="rounded-xl">
                <CardHeader>
                  <CardDescription>{widget.title}</CardDescription>
                  <CardTitle className="font-heading text-xl font-medium">
                    {widget.figure}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">{widget.note}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Table — verifies row borders, hover, mono numerals, semantic colors */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Table
          </h2>
          <Card className="rounded-xl py-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Account</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {TRANSACTIONS.map((tx) => (
                  <TableRow key={tx.name}>
                    <TableCell className="flex items-center gap-3 font-medium">
                      <Avatar className="size-7">
                        <AvatarFallback className="text-xs">
                          {tx.name.slice(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      {tx.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">{tx.account}</TableCell>
                    <TableCell className="text-muted-foreground">{tx.date}</TableCell>
                    <TableCell
                      className="text-right font-mono"
                      style={{ color: tx.amount < 0 ? "var(--money-out)" : "var(--money-in)" }}
                    >
                      {formatMoney(tx.amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Radius scale */}
        <section className="space-y-3">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Radius scale
          </h2>
          <div className="flex flex-wrap gap-4">
            {["sm", "md", "lg", "xl", "2xl", "3xl"].map((r) => (
              <div key={r} className="flex flex-col items-center gap-1">
                <div className={cn("size-16 border border-border bg-muted", `rounded-${r}`)} />
                <span className="text-xs text-muted-foreground">{r}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
