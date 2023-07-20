import { useReducer } from "react";
import { ProgressType } from "../../../Types/dataTypes";
import { tState } from "../../Types/types";
import { editDoneStageAction, editIsDoneAction, editMessageAction, editNotesAction, setStateAction } from "./actions";
import { getInitialState, reducer } from "./reducer";

export const useListsState = () => {
    const [data, dispatch] = useReducer(reducer, getInitialState());
    const setState = (newState: tState) => dispatch(setStateAction(newState));
    const setMessage = (msg: string) => dispatch(editMessageAction(msg));
    const setNotes = (notes: string) => dispatch(editNotesAction(notes));
    const setIsDone = (isDone: boolean) => dispatch(editIsDoneAction(isDone));
    const setDoneStage = (doneStage: ProgressType) => dispatch(editDoneStageAction(doneStage));
    return {
        data,
        setState,
        setMessage,
        setNotes,
        setIsDone,
        setDoneStage,
    }
}