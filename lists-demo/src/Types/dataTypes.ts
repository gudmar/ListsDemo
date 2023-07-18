export type NoteData = {
    message: string,
}

export type ProgressType =  0 | 1 | 2 | 3 | 4;

export type ToDoData = {
    message: string,
    doneStage: ProgressType,
    isDone: boolean,
    notes?: string,
}

export type PicturesData = {
    title: string,
    price: number,
    message: string,
    stockLevel: ProgressType,
    imageName: string,
}

export interface AnyObject {
    [key: string]: any
}
