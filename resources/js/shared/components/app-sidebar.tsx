import { Link } from "@inertiajs/react";
import {
  ArrowLeftRight,
  Boxes,
  LayoutDashboard,
  Package,
  Tags,
} from "lucide-react";
import { Separator } from "./ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";

const navItems = [
  { label: "Dashboard", method: "get", href: "/", icon: LayoutDashboard },
  { label: "Inventario", method: "get", href: "/inventario", icon: Package },
  { label: "Categorias", method: "get", href: "/categorias", icon: Tags },
  {
    label: "Movimientos",
    method: "get",
    href: "/movimientos",
    icon: ArrowLeftRight,
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      collapsible="offcanvas"
      {...props}>
      <SidebarHeader className="h-(--header-height) border-border justify-center border-b">
        <Link
          href="/"
          method="get">
          <div className="flex items-center gap-3">
            <div className="bg-primary flex size-9 items-center justify-center rounded-lg">
              <Boxes className="text-primary-foreground size-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-sidebar-foreground text-sm font-bold tracking-tight">
                StockFlow
              </span>
              <span className="text-muted-foreground text-[11px] leading-tight">
                Gestion de Inventario
              </span>
            </div>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* Sections */}
        <SidebarGroup>
          <SidebarGroupContent className="flex flex-col gap-2">
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    tooltip={item.label}
                    asChild>
                    <Link
                      href={item.href}
                      method={item.method}>
                      {item.icon && <item.icon />}
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        <p className="text-muted-foreground px-5 py-4 text-[11px]">
          StockFlow v1.0
        </p>
      </SidebarFooter>
    </Sidebar>
  );
}
