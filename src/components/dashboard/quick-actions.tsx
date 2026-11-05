import { Send, ArrowLeftRight, PiggyBank, HandCoins, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const ACTIONS = [
  { label: "Send", icon: Send, variant: "default" as const },
  { label: "Transfer", icon: ArrowLeftRight, variant: "outline" as const },
  { label: "Deposit", icon: PiggyBank, variant: "outline" as const },
  { label: "Request", icon: HandCoins, variant: "outline" as const },
  { label: "Upload bill", icon: Upload, variant: "outline" as const },
];

export function QuickActions() {
  return (
    <div className="flex flex-wrap gap-2">
      {ACTIONS.map(({ label, icon: Icon, variant }) => (
        <Button
          key={label}
          variant={variant}
          className="h-auto gap-1.5 rounded-full px-4 py-1 text-[15px]"
        >
          <Icon className="size-3.5" />
          {label}
        </Button>
      ))}
    </div>
  );
}
