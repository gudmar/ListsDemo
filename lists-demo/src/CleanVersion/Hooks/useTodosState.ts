import { useEffect, useReducer } from "react"
import { LOCAL_STORAGE_TODOS } from "../../Const/const";
import { editDoneStageAction } from "../../SOLIDViolation/Components/SolidViolationList/actions";
import { ProgressType, ToDoData } from "../../Types/dataTypes";
import { addTodosItemAction, deleteTodosItemAction, editTodosIsDoneAction, editTodosMessageAction, editTodosNotesAction, setTodosStateAction } from "../Components/ListsFinal/toDosState/toDosActions";
import { getInitialTodosState, todosReducer } from "../Components/ListsFinal/toDosState/toDosReducer"
import { useLoadData } from "./useLoadData";

export const useTodosState = () => {
    const [state, dispatch] = useReducer(todosReducer, getInitialTodosState());
    const {data} = useLoadData(getInitialTodosState(), LOCAL_STORAGE_TODOS)
    useEffect(() => {
        setTodosState(data)
    }, [data])
    const editTodosMessage = (index: number, newMessage: string) => dispatch(editTodosMessageAction({data: newMessage, index}))
    const editTodosNotes = (index: number, newNote: string) => dispatch(editTodosNotesAction({data: newNote, index}))
    const editTodosDoneStage = (index: number, newDoneStage: ProgressType) => dispatch(editDoneStageAction({data: newDoneStage, index}))
    const editTodosIsDone = (index: number, newIsDone: boolean) => dispatch(editTodosIsDoneAction({data: newIsDone, index}))
    const setTodosState = (newState: ToDoData[]) => dispatch(setTodosStateAction(newState))
    const addTodosItem = (index: number, newTodosItem: ToDoData) => dispatch(addTodosItemAction({data: newTodosItem, index}))
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