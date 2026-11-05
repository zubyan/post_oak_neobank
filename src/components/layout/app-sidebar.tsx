import { SidebarNav } from "@/components/layout/sidebar-nav";

export function AppSidebar() {
  return (
    <aside className="hidden w-[219px] shrink-0 flex-col border-r border-sidebar-border bg-sidebar md:flex">
      <SidebarNav />
    </aside>
  );
}
