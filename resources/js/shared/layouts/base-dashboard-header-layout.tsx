import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Separator } from "../components/ui/separator";
import { SidebarTrigger } from "../components/ui/sidebar";

export const BaseDashboardHeaderLayout = () => {
  return (
    <header className="h-(--header-height) group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height) flex shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-lg font-semibold tracking-tight">
          Not title logic defined
        </h1>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="hover:bg-accent flex items-center gap-3 rounded-lg px-3 py-2">
                <Avatar className="border-border size-8 border">
                  <AvatarFallback className="bg-primary/15 text-primary text-xs font-semibold" />
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-foreground text-sm font-medium">
                    Carlos Martinez
                  </span>
                  <span className="text-muted-foreground text-[11px] leading-tight">
                    Administrador
                  </span>
                </div>
                <ChevronDown className="text-muted-foreground size-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium">Carlos Martinez</span>
                  <span className="text-muted-foreground text-xs">
                    carlos@stockflow.com
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="size-4" />
                Mi Perfil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="size-4" />
                Configuracion
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut className="size-4" />
                Cerrar Sesion
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
