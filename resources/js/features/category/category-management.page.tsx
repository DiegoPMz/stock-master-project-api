/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { AppPagination } from "@/shared/components/app-pagination";
import BaseDashboardLayout from "@/shared/layouts/base-dashboard-layout";
import { PageWithPagination } from "@/types";
import { usePage } from "@inertiajs/react";
import { CategoriesTable } from "./categories-table";
import { CategoryDialog } from "./category-dialog";
import { CategoryDialogsContextProvider } from "./category-dialogs.context";
import { CategoryManagmentHeader } from "./category-managment-header";
import { Category } from "./category.types";
import { DeleteCategoryDialog } from "./delete-category-dialog";

const CategoryManagment = () => {
  const { props } = usePage<PageWithPagination<Category>>();
  const categories = props.categoryPagination?.data ?? [];

  console.log(props);

  return (
    <CategoryDialogsContextProvider>
      <BaseDashboardLayout>
        <main>
          <CategoryManagmentHeader />

          {/* Table */}
          <section
            className="mt-6"
            aria-label="Lista de categorias">
            <CategoriesTable categories={categories} />
          </section>

          {/* Create / Edit dialog */}
          <CategoryDialog />

          {/* Delete confirmation */}
          <DeleteCategoryDialog />

          {/* <div className="mt-6 flex items-center justify-between">
            <div className="text-sm ">
              Mostrando
              <span className="font-medium ">
                {categories.length > 0
                  ? (currentPage - 1) * ITEMS_PER_PAGE + 1
                  : 0}
              </span>{" "}
              a{" "}
              <span className="font-medium text-slate-300">
                {Math.min(currentPage * ITEMS_PER_PAGE, totalItems)}
              </span>{" "}
              de{" "}
              <span className="font-medium text-slate-300">{totalItems}</span>{" "}
              categorías
            </div>
          </div> */}

          <AppPagination pagination={props.categoryPagination!} />
        </main>
      </BaseDashboardLayout>
    </CategoryDialogsContextProvider>
  );
};

export default CategoryManagment;
