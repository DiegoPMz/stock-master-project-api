// global.d.ts

import { PageProps } from "@inertiajs/core";
import { OffsetPaginatedResponse } from "./shared/types/paginated-data";

export interface PageWithPagination<M> extends PageProps {
  categoryPagination?: OffsetPaginatedResponse<M>;
}
