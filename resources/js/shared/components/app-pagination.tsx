import { ChevronLeft, ChevronRight } from "lucide-react";
import { OffsetPaginatedResponse } from "../types/paginated-data";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/components/ui/pagination";
import { Button } from "./ui/button";

interface AppPaginationProps<T> {
  pagination: OffsetPaginatedResponse<T>;
}

export function AppPagination<T>({ pagination }: AppPaginationProps<T>) {
  return (
    <Pagination>
      <PaginationContent>
        {pagination.links.map((link, index) => {
          // 1. Primer elemento: Botón "Anterior"
          if (index === 0) {
            const isFirstPage = link.url === null;

            return (
              <PaginationItem key="Anterior">
                {isFirstPage ? (
                  <Button
                    variant={"ghost"}
                    className="gap-1"
                    disabled
                    aria-disabled="true">
                    <ChevronLeft />
                    Anterior
                  </Button>
                ) : (
                  // Solo usamos PaginationNext si hay una URL real
                  <PaginationPrevious
                    href={link.url as string}
                    label="Anterior"
                  />
                )}
              </PaginationItem>
            );
          }

          // 2. Último elemento: Botón "Siguiente"
          if (index === pagination.links.length - 1) {
            const isLastPage = link.url === null;

            return (
              <PaginationItem key="Siguiente">
                {isLastPage ? (
                  <Button
                    variant={"ghost"}
                    className="gap-1"
                    disabled
                    aria-disabled="true">
                    Siguiente
                    <ChevronRight />
                  </Button>
                ) : (
                  // Solo usamos PaginationNext si hay una URL real
                  <PaginationNext
                    href={link.url as string}
                    label="Siguiente"
                  />
                )}
              </PaginationItem>
            );
          }

          // 3. Puntos suspensivos (Cuando hay muchas páginas)
          if (link.label === "...") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }

          // 4. Números de página normales
          return (
            <PaginationItem key={link.label}>
              <PaginationLink
                href={link.url ?? undefined}
                isActive={link.active}>
                {link.label}
              </PaginationLink>
            </PaginationItem>
          );
        })}
      </PaginationContent>
    </Pagination>
  );
}
