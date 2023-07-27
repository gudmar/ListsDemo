import { tPayload } from "../../Types/types";

export const EDIT_MESSAGE = 'edit message';
export const EDIT_DONE_STAGE = 'edit done stage';
export const EDIT_IS_DONE = 'edit if task is done';
export const EDIT_NOTES = 'edit notes';
export const SET_STATE = 'set state';
export const DELETE_ITEM = 'delete item';
export const ADD_ITEM = 'add item';

export const editMessageAction = (payload: tPayload) => ({
    type: EDIT_MESSAGE, payload
})

export const editDoneStageAction = (payload: tPayload) => ({
    type: EDIT_DONE_STAGE, payload
})

export const editIsDoneAction = (payload: tPayload) => ({
    type: EDIT_IS_DONE, payload
})

export const editNotesAction = (payload: tPayload) => ({
    type: EDIT_NOTES, payload
})

export const deleteItemAction = (payload: tPayload) => ({
    type: DELETE_ITEM, payload
})

export const addItemAction = (payload: tPayload) => ({
    type: ADD_ITEM, payload,
})

export const setStateAction = (payload: tPayload) => ({type: SET_STATE, payload})
