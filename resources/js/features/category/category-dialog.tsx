import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/shared/components/ui/dialog";
import { Field, FieldError, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { useForm } from "@inertiajs/react";
import { useCallback, useEffect } from "react";
import { useCategoryDialogs } from "./category-dialogs.context";

const DIALOG_FIELS = { NAME: "name" } as const;

export function CategoryDialog() {
  const {
    dialogOpen: isOpen,
    editingCategory: category,
    setDialogOpen,
  } = useCategoryDialogs();

  const { data, setData, post, put, errors, processing, reset, clearErrors } =
    useForm({
      [DIALOG_FIELS.NAME]: category?.name || "",
    });

  const isEditing = !!category;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (isEditing)
      return put(`/categorias/${category.id}`, {
        onSuccess: () => setDialogOpen(false),
      });

    post("/categorias", {
      onSuccess: () => {
        setDialogOpen(false);
        reset();
      },
    });
  }

  const handleClosing = useCallback(() => {
    if (isOpen) return;

    reset();
    clearErrors();
  }, [isOpen, clearErrors, reset]);

  useEffect(() => {
    handleClosing();
    if (!category) return reset();

    setData({
      name: category.name,
    });
  }, [category, handleClosing, reset, setData]);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? "Editar Categoria" : "Nueva Categoria"}
          </DialogTitle>

          <DialogDescription>
            {isEditing
              ? "Modifica los datos de la categoria."
              : "Completa los datos para crear una nueva categoria."}
          </DialogDescription>
        </DialogHeader>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4">
          <Field className="flex flex-col gap-2">
            <FieldLabel htmlFor="name">Nombre</FieldLabel>
            <Input
              id="name"
              name={DIALOG_FIELS.NAME}
              value={data.name}
              onChange={(e) => setData(DIALOG_FIELS.NAME, e.target.value)}
              placeholder="Ej: Electronicos"
            />

            {errors[DIALOG_FIELS.NAME] && (
              <FieldError>{errors[DIALOG_FIELS.NAME]}</FieldError>
            )}
          </Field>

          <DialogFooter>
            <Button
              type="submit"
              disabled={processing}>
              {processing ? "Cargando..." : isEditing ? "Actualizar" : "Crear"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
