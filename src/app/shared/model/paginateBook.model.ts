import Book from "./book.model";

export default interface PaginateBook {
    pageSize: number;
    totalItems: number,
    currentPage: number,
    totalPages: number,
    items: Book[];
}