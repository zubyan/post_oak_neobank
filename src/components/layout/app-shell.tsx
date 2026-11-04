import { AppSidebar } from "@/components/layout/app-sidebar";
import { AppTopbar } from "@/components/layout/app-topbar";
import { BalanceVisibilityProvider } from "@/components/layout/balance-visibility-context";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <BalanceVisibilityProvider>
      <div className="flex h-screen overflow-hidden bg-background">
        <AppSidebar />
        <div className="flex min-w-0 flex-1 flex-col">
          <AppTopbar />
          <main className="flex-1 overflow-y-auto">{children}</main>
        </div>
      </div>
    </BalanceVisibilityProvider>
  );
}
