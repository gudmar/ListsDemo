import { useEffect, useReducer } from "react"
import { LOCAL_STORAGE_TODOS } from "../../Const/const";
import { ProgressType, ToDoData } from "../../Types/dataTypes";
import { addTodosItemAction, deleteTodosItemAction, editTodosDoneStageAction, editTodosIsDoneAction, editTodosMessageAction, editTodosNotesAction, setTodosStateAction } from "../Components/ListsFinal/toDosState/toDosActions";
import { getInitialTodosState, todosReducer } from "../Components/ListsFinal/toDosState/toDosReducer"
import { useLoadData } from "./useLoadData";

export const useTodosState = () => {
    const [state, dispatch] = useReducer(todosReducer, getInitialTodosState());
    const {data} = useLoadData(getInitialTodosState(), LOCAL_STORAGE_TODOS)
    useEffect(() => {
        setTodosState(data)
    }, [data])
    const editTodosMessage = (newMessage: string, index: number) => dispatch(editTodosMessageAction({data: newMessage, index}))
    const editTodosNotes = (newNote: string, index: number) => dispatch(editTodosNotesAction({data: newNote, index}))
    const editTodosDoneStage = (newDoneStage: ProgressType, index: number) => dispatch(editTodosDoneStageAction({data: newDoneStage, index}))
    const editTodosIsDone = (newIsDone: boolean, index: number) => dispatch(editTodosIsDoneAction({data: newIsDone, index}))
    const setTodosState = (newState: ToDoData[]) => dispatch(setTodosStateAction(newState))
    const addTodosItem = (index: number) => dispatch(addTodosItemAction({data: getInitialTodosState(), index}))
    const deleteTodosItem = (index: number) => dispatch(deleteTodosItemAction({index}))

    return {
        todos: state,
        editTodosMessage,
        editTodosNotes,
        editTodosDoneStage,
        editTodosIsDone,
        setTodosState,
        addTodosItem,
        deleteTodosItem,
    }

}