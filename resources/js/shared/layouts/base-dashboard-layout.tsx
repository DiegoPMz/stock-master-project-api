import { PropsWithChildren } from "react";
import { AppSidebar } from "../components/app-sidebar";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
import { BaseDashboardHeaderLayout } from "./base-dashboard-header-layout";

const BaseDashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 16)",
        } as React.CSSProperties
      }>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <BaseDashboardHeaderLayout />
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
export default BaseDashboardLayout;
