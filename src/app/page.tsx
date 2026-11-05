import { WelcomeHeader } from "@/components/dashboard/welcome-header";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { BalanceCard } from "@/components/dashboard/balance-card";
import { AccountsListCard } from "@/components/dashboard/accounts-list-card";
import { WidgetsRow } from "@/components/dashboard/widgets-row";

export default function DashboardHomePage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 p-6 lg:p-8">
      <div className="space-y-4">
        <WelcomeHeader />
        <QuickActions />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <BalanceCard />
        <AccountsListCard />
      </div>

      <WidgetsRow />
    </div>
  );
}
