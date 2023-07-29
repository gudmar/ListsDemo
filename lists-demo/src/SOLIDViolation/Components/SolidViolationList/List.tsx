import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import { iAddItem, iList, OneOfLists, OneOfListsData, tState } from "../../Types/types";
import { notesContent } from "../../../Data/notesContent";
import { toDoContent } from "../../../Data/toDoContent";
import { picturesContent } from "../../../Data/picturesContent";
import { NOTES, PHOTOS, TO_DOS } from "../../../Const/const";
import { AnyObject, ProgressType, ToDoData } from "../../../Types/dataTypes";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import ListItem from "./ListItem";
import { useListsState } from "./useListsState";
import SearchBox from "../Search/SearchBox";
import { useSearch } from "../Search/useSearch";

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

const AddItem = ({
    index,
    addItem,
}: iAddItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div
            className={classes.addItem}
            onClick={() => addItem(index)}
        >
            <span className={classes.addButton}>+</span>
        </div>
    )
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
        deleteItem,
        addItem,
    } = useListsState();
    const searchRef = useRef(null);
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

    const filterItem = (item: any, pattern: string) => {
        console.log(item, pattern)
        return item.message.includes(pattern);
    }

    const { filteredList, onPatternChange } = useSearch({searchboxReference: searchRef, list: data, isFoundFunction: filterItem })

    useEffect(() => console.log(filteredList), [])

    return (
        <div className={`${classes.listWrapper} ${type===PHOTOS && classes.extraWidthForList}`}>
            <button onClick ={() => console.log(data)}>log data</button>
            {/* Violation of DIP with this type prop */}
            <div className={classes.listTitle}>{getListTitle(type)}</div> 
            {/* //violation of open close principle with getListTitle and knowledge of type*/}
            {/* Also violation of DIP as this is a generic component and it should not know about type */}
            <SearchBox
                placeholder={'Search'}
                ref={searchRef}
                onPatternChange = {onPatternChange}
            />
            <div className={classes.overflowAuto}>
                {
                    // data.map((item, index) => {
                    filteredList.map((item: any, index: number) => {
                        return (
                            <>
                            <ListItem
                                type={type}
                                data={item}
                                id={index}
                                key={JSON.stringify(item)}
                                setDoneStage={(val: ProgressType) => setDoneStage(val, index)}
                                setIsDone={() => {
                                    if (type === TO_DOS) {setIsDone(!(data as ToDoData[])[index].isDone, index)}
                                }}
                                editMessage={(notes: string) => setMessage(notes, index)}
                                editNote={(notes: string) => setNotes(notes, index)}
                                deleteItem={() => deleteItem(index)}
                            />
                            {
                                (type===NOTES || type===TO_DOS) && 
                                <AddItem
                                    index={index}
                                    addItem={
                                        (index: number)=> {
                                            addItem(data, index)
                                        }
                                    }
                                / >
                            }
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List;
