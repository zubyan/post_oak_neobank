import { WelcomeHeader } from "@/components/dashboard/welcome-header";
import { QuickActions } from "@/components/dashboard/quick-actions";
import { BalanceCard } from "@/components/dashboard/balance-card";
import { AccountsListCard } from "@/components/dashboard/accounts-list-card";
import { WidgetsRow } from "@/components/dashboard/widgets-row";

export default function DashboardHomePage() {
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-6 lg:p-8">
      <WelcomeHeader />
      <BalanceCard />
      <QuickActions />
      <AccountsListCard />
      <WidgetsRow />
    </div>
  );
}
