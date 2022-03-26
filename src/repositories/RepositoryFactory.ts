import {BookRepository, BookRepositoryInterface } from './book'

export const BOOK = Symbol('book')

export interface Repositories{
    [BOOK]: BookRepositoryInterface;
}

export default {
    [BOOK]: new BookRepository()
}as Repositories

// モックデータを返す場合は以下の通り
// const isMock = process.env.NODE_ENV === 'test'

// export default {
//   [BOOK]: isMock ? new MockBookRepository() new BookRepository()
// } as Repositories