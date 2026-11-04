import type { LucideIcon } from "lucide-react";
import { Send, ArrowLeftRight, PiggyBank, HandCoins, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";

const ACTIONS: { label: string; icon: LucideIcon }[] = [
  { label: "Send money", icon: Send },
  { label: "Transfer funds", icon: ArrowLeftRight },
  { label: "Deposit funds", icon: PiggyBank },
  { label: "Request payment", icon: HandCoins },
  { label: "Upload a bill", icon: Upload },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {ACTIONS.map(({ label, icon: Icon }) => (
        <Card
          key={label}
          role="button"
          tabIndex={0}
          className="cursor-pointer gap-3 rounded-2xl! p-5 shadow-none transition-colors hover:bg-accent/50 [--card-spacing:--spacing(5)]"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-accent text-brand-700">
            <Icon className="size-[18px]" strokeWidth={1.75} />
          </div>
          <p className="text-sm font-medium text-foreground">{label}</p>
        </Card>
      ))}
    </div>
  );
}
