import { tPayload } from "../../../../Types/dataTypes";

export const EDIT_TODOS_MESSAGE = 'edit todos message';
export const EDIT_TODOS_DONE_STAGE = 'edit todos done stage';
export const EDIT_TODOS_IS_DONE = 'edit if task is done';
export const EDIT_TODOS_NOTES = 'edit todos notes';
export const SET_TODOS_STATE = 'set todos state';
export const DELETE_TODOS_ITEM = 'delete todos item';
export const ADD_TODOS_ITEM = 'add todos item';

export const editMessageAction = (payload: tPayload) => ({
    type: EDIT_TODOS_MESSAGE, payload
})

export const editDoneStageAction = (payload: tPayload) => ({
    type: EDIT_TODOS_DONE_STAGE, payload
})

export const editIsDoneAction = (payload: tPayload) => ({
    type: EDIT_TODOS_IS_DONE, payload
})

export const editNotesAction = (payload: tPayload) => ({
    type: EDIT_TODOS_NOTES, payload
})

export const deleteItemAction = (payload: tPayload) => ({
    type: DELETE_TODOS_ITEM, payload
})

export const addItemAction = (payload: tPayload) => ({
    type: ADD_TODOS_ITEM, payload,
})

export const setStateAction = (payload: tPayload) => ({type: SET_TODOS_STATE, payload})
