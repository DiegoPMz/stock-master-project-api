import { router } from "@inertiajs/react";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Category } from "./category.types";

interface CategoryDialogsContextType {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  editingCategory: Category | null;

  deleteOpen: boolean;
  setDeleteOpen: (open: boolean) => void;
  deletingCategory: Category | null;

  handleNew: () => void;
  handleEdit: (category: Category) => void;
  handleDelete: (category: Category) => void;
  handleConfirmDelete: () => void;
}

export const CategoryDialogsContext =
  createContext<CategoryDialogsContextType | null>(null);

export const CategoryDialogsContextProvider = ({
  children,
}: PropsWithChildren) => {
  // Dialog states
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);

  // Delete dialog states
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deletingCategory, setDeletingCategory] = useState<Category | null>(
    null,
  );

  function handleNew() {
    setEditingCategory(null);
    setDialogOpen(true);
  }

  function handleEdit(category: Category) {
    setEditingCategory(category);
    setDialogOpen(true);
  }

  function handleDelete(category: Category) {
    setDeletingCategory(category);
    setDeleteOpen(true);
  }

  function handleConfirmDelete() {
    if (deletingCategory) {
      router.delete(`/categorias/${deletingCategory.id}`);
    }
    setDeleteOpen(false);
    setDeletingCategory(null);
  }

  return (
    <CategoryDialogsContext.Provider
      value={{
        deleteOpen,
        deletingCategory,
        dialogOpen,
        editingCategory,
        handleConfirmDelete,
        handleDelete,
        handleEdit,
        handleNew,
        setDeleteOpen,
        setDialogOpen,
      }}>
      {children}
    </CategoryDialogsContext.Provider>
  );
};

export const useCategoryDialogs = () => {
  const context = useContext(CategoryDialogsContext);
  if (!context) {
    throw new Error(
      "useCategoryDialogs debe usarse dentro de un CategoryDialogsContextProvider",
    );
  }
  return context;
};
