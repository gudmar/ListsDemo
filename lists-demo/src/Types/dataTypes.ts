import { ReactChild } from 'react';

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

export interface iNoteListItem {
    data: NoteData,
    editMessage: tEditNote,
    id: number | string,
    deleteItem?: () => void,
}

export type tEditNote = (newValue: string) => void;

export type OneOfLists = "Notes" | "ToDoList" | "Photos"

export type tSetDoneStage = (val: ProgressType) => void;
export type tSetIsDoneState = (val:boolean) => void;

export type tChildren = ReactChild | ReactChild[]

export interface iList {
    type: OneOfLists,
    doWithState?: (nextState: any) => void
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
    addItem?: (index: number) => void,
}

export interface iWithAddItem {
    children: tChildren,
    addItem: (index: number) => void,
    id: number,
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

export interface iModal {
    children: tChildren,
    isOpen: boolean,
    setClose: () => void,
}


// ==============================================
