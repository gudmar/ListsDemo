import { TO_DOS } from "../../Const/const";
import { ToDoData } from "../../Types/dataTypes";
import { saveData } from "./saveData";

export const saveToDos = async(data: ToDoData[]) => {
    await saveData<ToDoData>(TO_DOS, data)
}
