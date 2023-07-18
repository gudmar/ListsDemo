import {NOTES} from '../../Const/const'
import { NoteData, PicturesData, ProgressType, ToDoData } from '../../Types/dataTypes'

export type OneOfLists = "Notes" | "ToDoList" | "Photos"

export interface iList {
    type: OneOfLists,
}

export interface iListItem {
    type: OneOfLists,
    data: OneOfListsData,
}

export interface iNoteListItem {
    data: NoteData,
    id: number,
}

export interface iToDosListItem {
    message: string,
    doneStage: ProgressType,
    isDone: boolean,
    notes?: string,
    id: number,
}

export interface iPicturesData {
    title: string,
    price: number,
    message: string,
    stockLevel: ProgressType,
    imageName: string,
    id: number,
}

export interface iDoneStage {
    level: ProgressType,
}

export type OneOfListsData = NoteData | ToDoData | PicturesData;
