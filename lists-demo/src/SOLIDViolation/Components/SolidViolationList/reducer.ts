import { tState } from '../../Types/types';
import { EDIT_DONE_STAGE, EDIT_IS_DONE, EDIT_MESSAGE, EDIT_NOTES, SET_STATE } from './actions'

export const getInitialState = ():tState => ({
    message: '',
    doneStage: 0,
    isDone: false,
    notes: ''
    // title: '',
    // price: 0,
    // stockLevel: 0,
    // imageName: '',

})

const getDoneStageWhenIsDoneChanged = (state: tState, payload:boolean) => {
    const MAX_DONE_STAGE = 4
    const LESS_THEN_MAX = 3;
    const {doneStage} = state;
    if (doneStage === MAX_DONE_STAGE && payload === false ) return LESS_THEN_MAX
    if (payload === true) return MAX_DONE_STAGE;
    return doneStage
}

export const reducer = (state: tState, { type, payload }: { type: string, payload: any} ): tState => {
    switch(type) {
        case EDIT_MESSAGE: {
            const newState = {...state, message: payload};
            return newState;
        }
        case EDIT_NOTES:{
            const newState = {...state, notes: payload};
            return newState;
        }
        case EDIT_DONE_STAGE: {
            const newIsDone = state.doneStage === 4 ? true : false;
            const newState = {...state, doneStage: payload, isDone: newIsDone};
            return newState;
        }
        case EDIT_IS_DONE: {
            const newDoneStage = getDoneStageWhenIsDoneChanged(state, payload)
            const newState = {...state, doneStage: newDoneStage, isDone: payload}
            return newState;
        }
        case SET_STATE: {
            return payload;
        }
        default: throw new Error('Unpossible')
    }
}
