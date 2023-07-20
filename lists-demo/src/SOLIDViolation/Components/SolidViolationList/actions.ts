import { ProgressType } from "../../../Types/dataTypes";
import { tState } from "../../Types/types";

export const EDIT_MESSAGE = 'edit message';
export const EDIT_DONE_STAGE = 'edit done stage';
export const EDIT_IS_DONE = 'edit if task is done';
export const EDIT_NOTES = 'edit notes';
export const SET_STATE = 'set state'

export const editMessageAction = (payload: string) => ({
    type: EDIT_MESSAGE, payload
})

export const editDoneStageAction = (payload: ProgressType) => ({
    type: EDIT_DONE_STAGE, payload
})

export const editIsDoneAction = (payload: boolean) => ({
    type: EDIT_NOTES, payload
})

export const editNotesAction = (payload: string) => ({
    type: EDIT_NOTES, payload
})

export const setStateAction = (payload: tState) => ({type: SET_STATE, payload})
