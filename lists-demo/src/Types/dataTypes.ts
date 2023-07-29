export type NoteData = {
    message: string,
}

export type ProgressType =  0 | 1 | 2 | 3 | 4 | 5;

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
    isInChart: boolean,
    toggleChart: () => void,
}

export interface AnyObject {
    [key: string]: any
}
