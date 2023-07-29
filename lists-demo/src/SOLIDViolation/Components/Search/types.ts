export type tIsFoundFunction = (
    listItem: any, pattern: string
) => boolean;

export interface iSearchFunction {
    list: any[],
    pattern: string,
    isFoundFunction: tIsFoundFunction,
}

export interface iUseSearch {
    searchboxReference: any,
    list: any[],
    isFoundFunction: tIsFoundFunction,
}
