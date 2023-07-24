import { useEffect, useLayoutEffect, useReducer, useState } from "react";
import { iList, OneOfLists, OneOfListsData, tState } from "../../Types/types";
import { notesContent } from "../../../Data/notesContent";
import { toDoContent } from "../../../Data/toDoContent";
import { picturesContent } from "../../../Data/picturesContent";
import { NOTES, PHOTOS, TO_DOS } from "../../../Const/const";
import { AnyObject } from "../../../Types/dataTypes";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import ListItem from "./ListItem";
import { useListsState } from "./useListsState";

const getData = (type: OneOfLists): OneOfListsData[] => {
    if (type === NOTES) return notesContent;
    if (type === TO_DOS) return toDoContent;
    if (type === PHOTOS) return picturesContent;
    throw new Error(`Type ${type} is not supported yet`);
}

const getListTitle = (type: OneOfLists): string => {
    if (type === NOTES) return 'Notes';
    if (type === TO_DOS) return 'To-do list';
    if (type === PHOTOS) return 'Gallery';
    throw new Error(`Type ${type} is not supported yet`);
}

const List = ({
    type
}: iList) => {
    window['React2' as any] = require('react');
    
    // const [data, setData] = useState<OneOfListsData[]>([])
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    // const classes = {listWrapper: '', extraWidthForList: '', overflowAuto: '', listTitle: ''}
    const {
        data,
        setState,
        setMessage,
        setNotes,
        setIsDone,
        setDoneStage,
    } = useListsState();
    
    useEffect(() => {
        const getDataFromLocalStorage: <T = AnyObject>(key: string) => (null | T[]) = (key: string) => {
            const dataFromStorage:string | null = localStorage.getItem(key);
            if (dataFromStorage === null) {
                return null;
            } else {
                const parsedData = JSON.parse(dataFromStorage);
                return parsedData
            }
        }
        const dataFromStorage = getDataFromLocalStorage<OneOfListsData>(type);
        // const initialData = getData(type)
        // const dataSource = dataFromStorage || initialData;
        // console.log(dataFromStorage)
        // console.log(initialData)
        // dataSource.forEach((data: OneOfListsData, index: number) => setState(data, index))        
        if (!dataFromStorage) {
            const initialData = getData(type)
            initialData.forEach((data: OneOfListsData, index: number) => setState(data, index))
        } else {
            dataFromStorage.forEach((data: OneOfListsData, index: number) => setState(data, index))
        }
        
    }, []) // LOAD DATA. Violates DIP

    useEffect(() => {console.log(data)}, [data])

    return (
        <div className={`${classes.listWrapper} ${type===PHOTOS && classes.extraWidthForList}`}>
            <button onClick ={() => console.log(data)}>log data</button>
            {/* Violation of DIP with this type prop */}
            <div className={classes.listTitle}>{getListTitle(type)}</div> 
            {/* //violation of open close principle with getListTitle and knowledge of type*/}
            {/* Also violation of DIP as this is a generic component and it should not know about type */}
            <div className={classes.overflowAuto}>
                {
                    data.map((item, index) => {
                        return (
                            <ListItem
                                type={type}
                                data={item}
                                id={index}
                                key={item.toString()}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List;
