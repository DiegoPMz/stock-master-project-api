import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { Pencil, Trash2 } from "lucide-react";
import { useCategoryDialogs } from "./category-dialogs.context";
import { Category } from "./category.types";

export function CategoriesTable({ categories }: { categories: Category[] }) {
  const { handleEdit, handleDelete } = useCategoryDialogs();

  return (
    <Card>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border/50 hover:bg-transparent">
              <TableHead className="pl-4">ID</TableHead>
              <TableHead>Nombre de Categoria</TableHead>
              <TableHead className="w-24 pr-4 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {categories.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-muted-foreground h-24 text-center">
                  No hay categorias registradas.
                </TableCell>
              </TableRow>
            ) : (
              categories.map((cat) => (
                <TableRow
                  key={cat.id}
                  className="border-border/30">
                  <TableCell className="text-muted-foreground pl-4 font-mono text-xs">
                    {cat.id.slice(0, 8)}
                  </TableCell>
                  <TableCell className="font-medium">{cat.name}</TableCell>
                  <TableCell className="pr-4">
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => handleEdit(cat)}
                        aria-label={`Editar ${cat.name}`}
                        className="text-muted-foreground hover:text-primary">
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => handleDelete(cat)}
                        aria-label={`Eliminar ${cat.name}`}
                        className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
