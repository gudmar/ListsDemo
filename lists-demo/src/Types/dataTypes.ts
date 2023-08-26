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
    id: number,
    deleteItem?: (id:number) => void,
}

export interface iNoteListItemViolation {
    data: NoteData,
    editMessage: tEditNoteViolation,
    id: number,
    deleteItem?: () => void,
}

export type tEditNoteViolation = (newValue: string) => void;

export type tEditNote = (newValue: string, index: number) => void;

export type OneOfLists = "Notes" | "ToDoList" | "Photos"

export type tSetDoneStage = (val: ProgressType) => void;
export type tSetDoneStageFinal = (val: ProgressType, id: number) => void;
export type tSetIsDoneState = (val:boolean) => void;
export type tSetIsDoneStateFinal = (val: boolean, id: number) => void

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
    id: number,
    setIsDone?: tSetIsDoneState,
    setDoneStage?: tSetDoneStage,
    editNote?: tEditNote,
    editMessage?: tEditNote,
    deleteItem?: () => void,
    toggleChart?: () =>  void
}

export interface iListItemViolation {
    type: OneOfLists,
    data: OneOfListsData,
    id: number,
    setIsDone?: tSetIsDoneState,
    setDoneStage?: tSetDoneStage,
    editNote?: tEditNoteViolation,
    editMessage?: tEditNoteViolation,
    deleteItem?: () => void,
    toggleChart?: () =>  void
}


export interface iNoteListItem {
    data: NoteData,
    editMessage: tEditNote,
    id: number,
    deleteItem?: (id: number) => void,
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
    id: number,
    setDoneStage?: tSetDoneStage,
    setIsDone?: tSetIsDoneState,
    editMessage?: tEditNote,
    editNote?: tEditNote,
    deleteItem?: () => void,
}

export interface iToDosListItemFinal {
    message: string,
    doneStage: ProgressType,
    isDone: boolean,
    notes?: string,
    id: number,
    setDoneStage: tSetDoneStageFinal,
    setIsDone: tSetIsDoneStateFinal,
    editMessage: tEditNote,
    editNote: tEditNote,
    deleteItem: (index: number) => void,
}

export interface iToDosListItemViolation {
    message: string,
    doneStage: ProgressType,
    isDone: boolean,
    notes?: string,
    id: number,
    setDoneStage?: tSetDoneStage,
    setIsDone?: tSetIsDoneState,
    editMessage?: tEditNoteViolation,
    editNote?: tEditNoteViolation,
    deleteItem?: () => void,
}


type tToDosDataType = {
    message: string,
    doneStage: 0,
    isDone: boolean,
    notes: string,
}

export interface iToDosWithAddButton extends iToDosListItemFinal {
    addItem: (index: number) => void,
    data: tToDosDataType,
}

type tPicturesItemDataFinal = {
    title: string,
    stockLevel: ProgressType,
    imageName: string,
    message: string,
    price: number,
    isInChart: boolean,
}

export interface iPicturesDataFinal {
    data: tPicturesItemDataFinal,
    isInChart: boolean,
    toggleChart: (id: number) => void,
    id: number,
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
