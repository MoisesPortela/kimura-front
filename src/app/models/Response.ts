import { Sort } from './SortModel';

export interface Response<T> {
  totalPages: number;
  totalElements: number;
  size: number;
  content: T;
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: Sort;
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    unpaged: boolean;
  };
  empty: boolean;
}
