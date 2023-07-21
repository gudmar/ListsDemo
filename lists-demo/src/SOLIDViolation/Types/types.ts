import { NoteData, PicturesData, ProgressType, ToDoData } from '../../Types/dataTypes'

export type OneOfLists = "Notes" | "ToDoList" | "Photos"

export interface iList {
    type: OneOfLists,
}

export interface iListItem {
    type: OneOfLists,
    data: OneOfListsData,
    id: number | string,
}

export interface iNoteListItem {
    data: NoteData,
    id: number | string,
}

export interface iToDosListItem {
    message: string,
    doneStage: ProgressType,
    isDone: boolean,
    notes?: string,
    id: number | string,
}

export interface iPicturesData {
    title: string,
    price: number,
    message: string,
    stockLevel: ProgressType,
    imageName: string,
    id: number | string,
}

export interface iDoneStage {
    level: ProgressType,
}

export type OneOfListsData = ToDoData|NoteData|PicturesData;

export type tState = {
    message: string,
    doneStage: ProgressType,
    isDone: boolean,
    notes: string,
    // title: string,
    // price: number,
    // stockLevel: ProgressType,
    // imageName: string,
    // User may not manipulate stockLevel or imageNames, that is why this should not be in state
}

export type tPayload = {
    index: number,
    data: any,
}
