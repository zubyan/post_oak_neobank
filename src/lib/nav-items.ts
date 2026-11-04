import type { LucideIcon } from "lucide-react";
import {
  Home,
  ListTodo,
  Sparkles,
  Landmark,
  ArrowLeftRight,
  CreditCard,
  Users,
  Send,
  FileText,
  Calculator,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
};

export const PRIMARY_NAV: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "Tasks", href: "/tasks", icon: ListTodo, badge: "10" },
  { label: "Command", href: "/command", icon: Sparkles },
];

export const SECONDARY_NAV: NavItem[] = [
  { label: "Accounts", href: "/accounts", icon: Landmark },
  { label: "Transactions", href: "/transactions", icon: ArrowLeftRight },
  { label: "Cards", href: "/cards", icon: CreditCard },
  { label: "Team Spend", href: "/team-spend", icon: Users },
  { label: "Payments", href: "/payments", icon: Send },
  { label: "Invoicing", href: "/invoicing", icon: FileText },
  { label: "Accounting", href: "/accounting", icon: Calculator },
];

export const WORKSPACE_MODES = ["Banking", "Payroll", "Books"] as const;
export type WorkspaceMode = (typeof WORKSPACE_MODES)[number];
