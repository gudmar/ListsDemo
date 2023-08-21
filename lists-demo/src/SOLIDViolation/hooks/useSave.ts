import { useState } from "react"
import { NOTES, PHOTOS, TO_DOS } from "../../Const/const"
import { OneOfLists, OneOfListsData } from "../../Types/dataTypes"

export const useSave = () => {
    const [notes, setNotes] = useState([])
    const [toDos, setToDos] = useState([])
    const [pictures, setPictures] = useState([])

    const setData = (type: OneOfLists, data: OneOfListsData[]) => {
        localStorage.setItem(type, JSON.stringify(data));
    }
    const save = () => {
        setData(NOTES, notes);
        setData(TO_DOS, toDos);
        setData(PHOTOS, pictures)
    }
    return ({
        setNotes,
        setToDos,
        setPictures,
        save,
    })
}