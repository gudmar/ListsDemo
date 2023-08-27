import { NoteData, tPayload } from "../../../../Types/dataTypes";
import { getStateWithModifiedProp } from "../utils";
import { ADD_NOTES_ITEM, DELETE_NOTES_ITEM, EDIT_NOTES_MESSAGE, SET_NOTES_STATE } from "./notesActions";

// COMPARE:
// reducer

export const getInitialNotesState = ():NoteData[] => [({
    message: '',
})]

export const notesReducer = (state: NoteData[], { type, payload }: { type: string, payload: tPayload | NoteData[]} ): NoteData[] => {
    const {data, index }: {data?: any, index: number} = payload as tPayload;
    switch(type) {
        case EDIT_NOTES_MESSAGE: {
            const resultState = getStateWithModifiedProp({index, data, state, propName: 'message'});
            return resultState
        }
        case SET_NOTES_STATE: {
            state = payload as NoteData[]
            return [...state];
        }
        case ADD_NOTES_ITEM: {
            const newState = [...state];
            newState.splice(index, 0, data);
            return newState;
        }
        case DELETE_NOTES_ITEM: {
            const stateCp = [...state]
            stateCp.splice(index, 1);
            return [...stateCp];
        }
        default: throw new Error('Unpossible')
    }
}