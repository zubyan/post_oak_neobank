import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { MaskedMoney } from "@/components/shared/masked-money";
import { BALANCE_HISTORY, formatCompactDate } from "@/lib/sample-data";

// Weekly sample of the 30-day series keeps the table compact.
const SAMPLE_POINTS = BALANCE_HISTORY.filter((_, i) => i % 5 === 4 || i === BALANCE_HISTORY.length - 1);

export function BalanceTable() {
  return (
    <div className="h-56 overflow-y-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Balance</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {SAMPLE_POINTS.map((point) => (
            <TableRow key={point.date}>
              <TableCell className="text-muted-foreground">
                {formatCompactDate(point.date)}
              </TableCell>
              <TableCell className="text-right">
                <MaskedMoney value={point.balance} className="font-medium" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
