export const CURRENT_USER = {
  name: "Alex Rivera",
  firstName: "Alex",
  initials: "AR",
};

export const WORKSPACE = {
  name: "Fernwood Design Co.",
  plan: "Business",
};

export type Account = {
  id: string;
  name: string;
  mask: string;
  balance: number;
  bookmarked?: boolean;
};

export const ACCOUNTS: Account[] = [
  { id: "checking", name: "Checking", mask: "4821", balance: 482318.44, bookmarked: false },
  { id: "savings", name: "Savings", mask: "7790", balance: 1250900.0, bookmarked: false },
  { id: "operating", name: "Operating", mask: "9043", balance: 142980.22, bookmarked: true },
  { id: "payroll", name: "Payroll", mask: "2210", balance: 38210.55, bookmarked: true },
  { id: "tax-reserve", name: "Tax Reserve", mask: "6634", balance: 64500.0, bookmarked: false },
];

export const BOOKMARKED_ACCOUNTS = ACCOUNTS.filter((a) => a.bookmarked);

export const TOTAL_BALANCE = ACCOUNTS.reduce((sum, a) => sum + a.balance, 0);

export const MONEY_IN_30D = 186420.5;
export const MONEY_OUT_30D = 142205.18;
export const BALANCE_CHANGE_30D = MONEY_IN_30D - MONEY_OUT_30D;
export const BALANCE_CHANGE_PCT_30D = BALANCE_CHANGE_30D / (TOTAL_BALANCE - BALANCE_CHANGE_30D);
export const RUNWAY_MONTHS = TOTAL_BALANCE / MONEY_OUT_30D;

// Deterministic 30-day balance series ending at TOTAL_BALANCE, mildly volatile upward trend.
export const BALANCE_HISTORY = (() => {
  const days = 30;
  const start = TOTAL_BALANCE - MONEY_IN_30D + MONEY_OUT_30D;
  const points: { date: string; balance: number }[] = [];
  const today = new Date("2026-11-05");

  const wobble = [0.3, -0.5, 0.8, 0.2, -0.3, 0.6, 0.1, -0.2, 0.9, 0.4, -0.4, 0.7, 0.2, -0.6, 1.1,
    0.3, -0.2, 0.5, 0.8, -0.3, 0.4, 1.0, -0.5, 0.6, 0.3, 0.9, -0.2, 0.7, 0.5, 1.0];

  for (let i = 0; i < days; i++) {
    const progress = (i + 1) / days;
    const base = start + (TOTAL_BALANCE - start) * progress;
    const noise = wobble[i] * 4200;
    const date = new Date(today);
    date.setDate(date.getDate() - (days - 1 - i));
    points.push({
      date: date.toISOString().slice(0, 10),
      balance: Math.round(base + noise),
    });
  }
  points[points.length - 1].balance = TOTAL_BALANCE;
  return points;
})();

export const WIDGETS = {
  creditCard: {
    spent: 12480.32,
    limit: 60000,
  },
  billPay: {
    billsDue: 3,
    amountDue: 8320.0,
  },
  invoicing: {
    openInvoices: 4,
    outstanding: 22750.0,
  },
};

export function formatCurrency(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatCompactDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export function formatCurrencyWhole(value: number) {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
