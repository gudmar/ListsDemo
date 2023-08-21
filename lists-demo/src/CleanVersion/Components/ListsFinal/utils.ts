import { OneOfListsData, ToDoData, tPayload } from "../../../Types/dataTypes";

interface iStatePropModifier {
    index: number,
    propName: string,
    state: OneOfListsData[],
    data: any
}

export const getStateWithModifiedProp = ({index, propName, state, data}: iStatePropModifier) => {
    const modifiedObject: OneOfListsData = state[index];
    state[index] = {...modifiedObject, [propName]: data}
    return [...state];
}

export const getDoneStageWhenIsDoneChanged = ({state, payload, index}: {state: OneOfListsData[], payload: tPayload, index: number}) => {
    const isDone = payload.data;
    const MAX_DONE_STAGE = 5;
    const LESS_THEN_MAX = 4;
    const doneStage = (state[index] as ToDoData).doneStage;
    if (doneStage === MAX_DONE_STAGE && isDone === false ) return LESS_THEN_MAX
    if (isDone === true) return MAX_DONE_STAGE;
    return doneStage
}

