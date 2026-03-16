/**
 * Represents a offset-based paginated response from the backend.
 * * @see LengthAwarePaginator  - Corresponding PHP Pagination for this structure.
 * @template T - The type of items contained within the 'data' array.
 */

export interface OffsetPaginatedResponse<T> {
  current_page: number;
  data: T[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    page: number | null;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
}
