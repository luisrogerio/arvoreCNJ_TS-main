export interface IMainResponse<T>{
    return: IItem<T>;
}

export interface IItem<T>{
    item: Array<T>;
    Item: Array<T>;
}