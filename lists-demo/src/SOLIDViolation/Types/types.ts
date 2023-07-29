import { NoteData, PicturesData, ProgressType, ToDoData } from '../../Types/dataTypes'

export type OneOfLists = "Notes" | "ToDoList" | "Photos"

export type tSetDoneStage = (val: ProgressType) => void;
export type tSetIsDoneState = (val:boolean) => void;
export type tEditNote = (newValue: string) => void;

export interface iList {
    type: OneOfLists,
}

export interface iAddItem {
    index: number,
    addItem: (index: number) => void
}

export interface iListItem {
    type: OneOfLists,
    data: OneOfListsData,
    id: number | string,
    setIsDone?: tSetIsDoneState,
    setDoneStage?: tSetDoneStage,
    editNote?: tEditNote,
    editMessage?: tEditNote,
    deleteItem?: () => void,
    toggleChart?: () =>  void
}

export interface iNoteListItem {
    data: NoteData,
    editMessage: tEditNote,
    id: number | string,
    deleteItem?: () => void,
}

export type tDeleteItem = (index: number) => void;

export interface iToDosListItem {
    message: string,
    doneStage: ProgressType,
    isDone: boolean,
    notes?: string,
    id: number | string,
    setDoneStage?: tSetDoneStage,
    setIsDone?: tSetIsDoneState,
    editMessage?: tEditNote,
    editNote?: tEditNote,
    deleteItem?: () => void,
}

export interface iPicturesData {
    title: string,
    price: number,
    message: string,
    stockLevel: ProgressType,
    imageName: string,
    isInChart: boolean,
    id: number | string,
    toggleChart: () => void,
}

export interface iDoneStage {
    level: ProgressType,
    setDoneStage: tSetDoneStage,
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
    data?: any,
}
