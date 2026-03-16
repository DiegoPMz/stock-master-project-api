import { Button } from "@/shared/components/ui/button";
import { Plus } from "lucide-react";
import { useCategoryDialogs } from "./category-dialogs.context";

export const CategoryManagmentHeader = () => {
  const { handleNew } = useCategoryDialogs();

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-foreground text-lg font-semibold tracking-tight">
          Gestion de Categorias
        </h2>
        <p className="text-muted-foreground text-sm">
          Administra las categorias de tu inventario
        </p>
      </div>
      <Button
        onClick={handleNew}
        className="gap-2">
        <Plus className="size-4" />
        Nueva Categoria
      </Button>
    </header>
  );
};
