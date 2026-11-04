import Link from "next/link";
import { MaskedMoney } from "@/components/shared/masked-money";
import { BOOKMARKED_ACCOUNTS } from "@/lib/sample-data";

export function BookmarksList() {
  return (
    <div className="px-1">
      <p className="px-2 text-xs font-medium tracking-wide text-sidebar-foreground/50">
        Bookmarks
      </p>
      <div className="mt-1 flex flex-col">
        {BOOKMARKED_ACCOUNTS.map((account) => (
          <Link
            key={account.id}
            href="/accounts"
            className="flex items-center justify-between rounded-md px-3 py-2 text-sm text-sidebar-foreground/75 transition-colors hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
          >
            <span className="truncate">{account.name}</span>
            <MaskedMoney
              value={account.balance}
              className="shrink-0 text-xs text-sidebar-foreground/50"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
