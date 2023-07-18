import { NOTES } from "../../Const/const";
import { NoteData } from "../../Types/dataTypes";
import { saveData } from "./saveData";

export const saveNotes = async(data: NoteData[]) => {
    await saveData<NoteData>(NOTES, data)
}
