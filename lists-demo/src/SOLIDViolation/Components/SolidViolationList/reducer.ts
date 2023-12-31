import { OneOfListsData, PicturesData, ToDoData, tPayload } from '../../../Types/dataTypes';
import { ADD_ITEM, DELETE_ITEM, EDIT_DONE_STAGE, EDIT_IS_DONE, EDIT_MESSAGE, EDIT_NOTES, SET_STATE, TOGGLE_CHART } from './actions'

// COMPARE:
// notesReducer, TodosReducer, galleryReducer

// SRP
// Too many list types handeld by a single reducer. Owners of 
// GaleryList, Notes, Todos may want change in logic causing
// confilcts and regression problems
// getInitialState too big

// OCP
// Closed architecture, new user scenarios added to this reducer, and
// it is already complex

export const getInitialState = ():OneOfListsData[] => [({
    message: '',
    doneStage: 0,
    isDone: false,
    notes: '',
    // =================
    title: '',
    price: 0,
    stockLevel: 0,
    imageName: '',
    isInChart: false,
})]

const getDoneStageWhenIsDoneChanged = ({state, payload, index}: {state: OneOfListsData[], payload: tPayload, index: number}) => {
    const isDone = payload.data;
    const MAX_DONE_STAGE = 5;
    const LESS_THEN_MAX = 4;
    const doneStage = (state[index] as ToDoData).doneStage;
    if (doneStage === MAX_DONE_STAGE && isDone === false ) return LESS_THEN_MAX
    if (isDone === true) return MAX_DONE_STAGE;
    return doneStage
}

interface iStatePropModifier {
    index: number,
    propName: string,
    state: OneOfListsData[],
    data: any
}

const getStateWithModifiedProp = ({index, propName, state, data}: iStatePropModifier) => {
    const modifiedObject: OneOfListsData = state[index];
    state[index] = {...modifiedObject, [propName]: data}
    return [...state]; // returning not a new object, but the object that will be passed to listItem is new
}

export const reducer = (state: OneOfListsData[], { type, payload }: { type: string, payload: tPayload} ): OneOfListsData[] => {
    const {data, index }: {data?: any, index: number} = payload;
    switch(type) {
        case EDIT_MESSAGE: {
            const resultState = getStateWithModifiedProp({index, data, state, propName: 'message'});
            return resultState
        }
        case EDIT_NOTES:{
            const resultState = getStateWithModifiedProp({index, data, state, propName: 'notes'})
            return resultState;
        }
        case EDIT_DONE_STAGE:
            const doneStage = data;
            const objectToModify: OneOfListsData = state[index];
            const newIsDone = (doneStage === 5) ? true : false;
            state[index] = {...objectToModify, doneStage, isDone: newIsDone};
            return [...state];
        
        case EDIT_IS_DONE: {
            const newDoneStage = getDoneStageWhenIsDoneChanged({state, payload, index})
            const objectToModify: OneOfListsData = state[index];
            state[index] = {...objectToModify, doneStage: newDoneStage, isDone: data}
            return [...state];
        }
        case SET_STATE: {
            state[index] = data
            return [...state];
        }
        case ADD_ITEM: {
            const newState = [...state];
            newState.splice(index, 0, data);
            return newState;
        }
        case DELETE_ITEM: {
            const stateCp = [...state]
            stateCp.splice(index, 1);
            return [...stateCp];
        }
        case TOGGLE_CHART: {
            const stateCp = [...state]
            const objectToModify: PicturesData = state[index] as PicturesData
            stateCp[index] = {...stateCp[index], isInChart: !objectToModify.isInChart}
            return stateCp;
        }
        default: throw new Error('Unpossible')
    }
}
