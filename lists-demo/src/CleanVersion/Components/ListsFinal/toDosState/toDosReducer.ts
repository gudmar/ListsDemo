import { ToDoData, tPayload } from "../../../../Types/dataTypes";
import { getDoneStageWhenIsDoneChanged, getStateWithModifiedProp } from "../utils";
import { ADD_TODOS_ITEM, DELETE_TODOS_ITEM, EDIT_TODOS_DONE_STAGE, EDIT_TODOS_IS_DONE, EDIT_TODOS_MESSAGE, EDIT_TODOS_NOTES, SET_TODOS_STATE } from "./toDosActions";

export const getInitialTodosState = ():ToDoData[] => [({
    message: '',
    doneStage: 0,
    isDone: false,
    notes: '',
})]

export const todosReducer = (state: ToDoData[], { type, payload }: { type: string, payload: tPayload} ): ToDoData[] => {
    const {data, index }: {data?: any, index: number} = payload;
    switch(type) {
        case EDIT_TODOS_MESSAGE: {
            const resultState = getStateWithModifiedProp({index, data, state, propName: 'message'}) as ToDoData[];
            return resultState
        }
        case EDIT_TODOS_NOTES:{
            const resultState = getStateWithModifiedProp({index, data, state, propName: 'notes'}) as ToDoData[]
            return resultState;
        }
        case EDIT_TODOS_DONE_STAGE:
            const doneStage = data;
            const objectToModify: ToDoData = state[index];
            const newIsDone = (doneStage === 5) ? true : false;
            state[index] = {...objectToModify, doneStage, isDone: newIsDone};
            return [...state];
        
        case EDIT_TODOS_IS_DONE: {
            const newDoneStage = getDoneStageWhenIsDoneChanged({state, payload, index})
            const objectToModify: ToDoData = state[index];
            state[index] = {...objectToModify, doneStage: newDoneStage, isDone: data}
            return [...state];
        }
        case SET_TODOS_STATE: {
            state[index] = data
            return [...state];
        }
        case ADD_TODOS_ITEM: {
            const newState = [...state];
            newState.splice(index, 0, data);
            return newState;
        }
        case DELETE_TODOS_ITEM: {
            const stateCp = [...state]
            stateCp.splice(index, 1);
            return [...stateCp];
        }
        default: throw new Error('Unpossible')
    }
}