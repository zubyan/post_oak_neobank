import { WelcomeHeader } from "@/components/dashboard/welcome-header";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { BalanceCard } from "@/components/dashboard/balance-card";
import { AccountsListCard } from "@/components/dashboard/accounts-list-card";
import { WidgetsRow } from "@/components/dashboard/widgets-row";

export default function DashboardHomePage() {
  return (
    <div className="mx-auto max-w-6xl p-6 lg:p-8">
      <WelcomeHeader />
      <div className="mt-2 mb-6">
        <QuickActions />
      </div>

      <div className="space-y-10">
        <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
          <BalanceCard />
          <AccountsListCard />
        </div>

        <WidgetsRow />
      </div>
    </div>
  );
}
