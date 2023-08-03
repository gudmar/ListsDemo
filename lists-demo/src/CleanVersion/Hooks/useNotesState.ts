import { useEffect, useReducer } from "react"
import { LOCAL_STORAGE_KEY } from "../../Const/const";
import { NoteData } from "../../Types/dataTypes";
import { addNotesItemAction, deleteNotesItemAction, setNotesStateAction } from "../Components/ListsFinal/notesListState/notesActions";
import { getInitialNotesState, notesReducer } from "../Components/ListsFinal/notesListState/notesReducer";
import { editNotesAction } from "../Components/ListsFinal/toDosState/toDosActions";
import { useLoadData } from "./useLoadData";

export const useNotesState = () => {
    const [state, dispatch] = useReducer(notesReducer, getInitialNotesState());
    const {data} = useLoadData(getInitialNotesState(), LOCAL_STORAGE_KEY)
    useEffect(() => {
        setNotesStateAction(data)
    }, [data])
    const editNote = (notes: string, index: number) => dispatch(editNotesAction({data: notes, index}));
    const addNote = (initialState: NoteData, index: number) => dispatch(addNotesItemAction({data: initialState, index}))
    const deleteNote = (index: number) => dispatch(deleteNotesItemAction({index}))
    const setNotes = (newState: NoteData[]) => dispatch(setNotesStateAction(newState))

    return {
        notes: state,
        editNote,
        addNote,
        deleteNote,
        setNotes,
    }
}
