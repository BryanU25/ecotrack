import { Paginated } from "./Pagination";
import { User } from "./User";

export interface StateUpdates {
  error: string;
  isLoading: boolean;
  isCreating: boolean;
  isUpdating: boolean;
  isDeleting: boolean;
}

export interface UserState extends StateUpdates {
  users: Paginated<User>;
  oneUser: User | null;
}

export const initialPaginatedState = {
  items: [],
  meta: {
    page: 0,
    take: 0,
    itemCount: 0,
    pageCount: 0,
    hasPreviousPage: false,
    hasNextPage: false,
  },
};
