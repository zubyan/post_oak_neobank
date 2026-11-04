import { MaskedMoney } from "@/components/shared/masked-money";
import { BALANCE_HISTORY, formatCompactDate } from "@/lib/sample-data";

// Weekly sample of the 30-day series keeps the table compact.
const SAMPLE_POINTS = BALANCE_HISTORY.filter((_, i) => i % 5 === 4 || i === BALANCE_HISTORY.length - 1);

export function BalanceTable() {
  return (
    <div className="h-48 overflow-y-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/15 text-white/60">
            <th className="py-2 text-left font-medium">Date</th>
            <th className="py-2 text-right font-medium">Balance</th>
          </tr>
        </thead>
        <tbody>
          {SAMPLE_POINTS.map((point) => (
            <tr key={point.date} className="border-b border-white/10 last:border-0">
              <td className="py-2.5 text-white/70">{formatCompactDate(point.date)}</td>
              <td className="py-2.5 text-right">
                <MaskedMoney value={point.balance} className="font-medium text-white" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
