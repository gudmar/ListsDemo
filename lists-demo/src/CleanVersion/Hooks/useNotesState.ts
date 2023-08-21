import { useEffect, useReducer } from "react"
import { LOCAL_STORAGE_NOTES } from "../../Const/const";
import { NoteData } from "../../Types/dataTypes";
import { addNotesItemAction, deleteNotesItemAction, editNotesMessageAction, setNotesStateAction } from "../Components/ListsFinal/notesListState/notesActions";
import { getInitialNotesState, notesReducer } from "../Components/ListsFinal/notesListState/notesReducer";
import { useLoadData } from "./useLoadData";

export const useNotesState = () => {
    const [state, dispatch] = useReducer(notesReducer, getInitialNotesState());
    const {data} = useLoadData(getInitialNotesState(), LOCAL_STORAGE_NOTES)
    useEffect(() => {
        setNotes(data)
    }, [data])
    const editNote = (notes: string, index: number) => dispatch(editNotesMessageAction({data: notes, index}));
    const addNote = (index: number) => dispatch(addNotesItemAction({data: getInitialNotesState(), index}))
    const deleteNote = (index: number) => dispatch(deleteNotesItemAction({index}))
    const setNotes = (newState: NoteData[]) => dispatch(setNotesStateAction(newState))

    return {
        notes: state,
        editNote,
        addNote,
        deleteNote,
        setNotes,
        initialNotesState: getInitialNotesState()
    }
}
