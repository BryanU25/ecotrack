export interface PageOptions {
  page: number;
  take?: number;
  order?: "ASC" | "DESC";
  searchQuery?: string;
}

interface Meta {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Paginated<T> {
  items: T[];
  meta: Meta;
}
