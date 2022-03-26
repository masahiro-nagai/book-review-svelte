/**
 * Google Books APIのレスポンス
 */

export interface Result {
    item: BookItem[];
    kind: string;
    totalItems: number;
}

/**
 * 本の情報
 */

export interface BookItem{
    id: string;
    volemuInfo: {
        title: string;
        authors?: string[];
        publishdData?: string;
        description?: string;
    publisher?: string;
    imageLinks?:{
        smallThumbnail: string;
        thumbnail: string;
    };
    pageCount: number;
    previewLink?: string;
    };
    salesInfo?: {
        listPrice: {
            amount: number;
        };
    };

}

/**
 * query parameters
 */

export interface Params {
    q: string;
    startIndex?: number;
}

export interface BookRepositoryInterface{
    get(params: Params): Promise<Result>;
    find(id: string): Promise<BookItem>;
}