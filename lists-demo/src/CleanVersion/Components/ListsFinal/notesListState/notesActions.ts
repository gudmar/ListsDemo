import { tPayload } from "../../../../SOLIDViolation/Types/types";
import { NoteData } from "../../../../Types/dataTypes";

export const EDIT_NOTES_MESSAGE = 'edit notes message';
export const SET_NOTES_STATE = 'set notes state';
export const DELETE_NOTES_ITEM = 'delete notes item';
export const ADD_NOTES_ITEM = 'add notes item';

export const editNotesMessageAction = (payload: tPayload) => ({
    type: EDIT_NOTES_MESSAGE, payload
})

export const deleteNotesItemAction = (payload: tPayload) => ({
    type: DELETE_NOTES_ITEM, payload
})

export const addNotesItemAction = (payload: tPayload) => ({
    type: ADD_NOTES_ITEM, payload,
})

export const setNotesStateAction = (payload: NoteData[]) => ({type: SET_NOTES_STATE, payload})
