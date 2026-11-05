import { CreditCard, FileStack, FileText } from "lucide-react";
import { WidgetCard } from "@/components/dashboard/widget-card";
import { MaskedMoney } from "@/components/shared/masked-money";
import { WIDGETS, formatCurrency } from "@/lib/sample-data";

export function WidgetsRow() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <WidgetCard icon={CreditCard} title="Credit Card" href="/cards" footer="View card">
        <MaskedMoney value={WIDGETS.creditCard.spent} className="text-xl font-medium" />
        <p className="mt-1 text-xs text-muted-foreground">
          spent of {formatCurrency(WIDGETS.creditCard.limit)} limit
        </p>
      </WidgetCard>

      <WidgetCard icon={FileStack} title="Bill Pay" href="/payments" footer="Pay bills">
        <p className="text-xl font-medium">{WIDGETS.billPay.billsDue} bills due</p>
        <p className="mt-1 text-xs text-muted-foreground">
          <MaskedMoney value={WIDGETS.billPay.amountDue} /> total
        </p>
      </WidgetCard>

      <WidgetCard icon={FileText} title="Invoicing" href="/invoicing" footer="Create invoice">
        <p className="text-xl font-medium">{WIDGETS.invoicing.openInvoices} open invoices</p>
        <p className="mt-1 text-xs text-muted-foreground">
          <MaskedMoney value={WIDGETS.invoicing.outstanding} /> outstanding
        </p>
      </WidgetCard>
    </div>
  );
}
