import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/shared/components/ui/alert-dialog";
import { router } from "@inertiajs/react";
import { useCategoryDialogs } from "./category-dialogs.context";

export function DeleteCategoryDialog() {
  // Extraemos lo necesario del context
  const { deleteOpen, setDeleteOpen, deletingCategory } = useCategoryDialogs();

  const handleConfirm = () => {
    if (!deletingCategory) return;

    // Ejecutamos la eliminación con Inertia
    router.delete(`categorias/${deletingCategory.id}`, {
      onSuccess: () => setDeleteOpen(false),
    });
  };

  return (
    <AlertDialog
      open={deleteOpen}
      onOpenChange={setDeleteOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>¿Estás completamente seguro?</AlertDialogTitle>
          <AlertDialogDescription>
            Esta acción no se puede deshacer. Se eliminará permanentemente la
            categoría
            <span className="text-foreground font-bold italic">
              "{deletingCategory?.name}"
            </span>
            y todos los datos asociados.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          {/* Usamos el action con nuestra lógica de Inertia */}
          <AlertDialogAction
            onClick={handleConfirm}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Eliminar permanentemente
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
