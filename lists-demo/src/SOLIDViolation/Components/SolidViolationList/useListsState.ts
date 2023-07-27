import { useReducer } from "react";
import { ProgressType } from "../../../Types/dataTypes";
import { OneOfListsData, tState } from "../../Types/types";
import { deleteItemAction, editDoneStageAction, editIsDoneAction, editMessageAction, editNotesAction, setStateAction, addItemAction } from "./actions";
import { getInitialState, reducer } from "./reducer";

export const useListsState = () => {
    const [data, dispatch] = useReducer(reducer, getInitialState());
    const setState = (newState: OneOfListsData, index: number) => 
        dispatch(setStateAction({data: newState, index}));
    const setMessage = (msg: string, index: number) => 
        dispatch(editMessageAction({data:msg, index}));
    const setNotes = (notes: string, index: number) => 
        dispatch(editNotesAction({data: notes, index}));
    const setIsDone = (isDone: boolean, index: number) => dispatch(editIsDoneAction({data: isDone, index}));
    const setDoneStage = (doneStage: ProgressType, index: number) => dispatch(editDoneStageAction({data: doneStage, index}));
    const addItem = (initialState: any, index: number) => dispatch(addItemAction({ data: initialState, index }))
    const deleteItem = (index: number) => dispatch(deleteItemAction({ index }))
    return {
        addItem,
        data,
        deleteItem,
        setState,
        setMessage,
        setNotes,
        setIsDone,
        setDoneStage,
    }
}