import { useEffect, useRef } from "react";
import { iAddItem, iList, OneOfLists, OneOfListsData } from "../../Types/types";
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
import ShoppingChartIcon from "../../../Icons/ShoppingChartIcon";
import Modal from "../Modal/Modal";
import { useModal } from "../../hooks/useModal";
import ChartContent from "../ChartContent/ChartContent";

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

// const openModalIfReport = (items: OneOfListsData[], openFunction: ()=>{} ) => {
//     if (shouldDisplayBoughtReport(items)) openFunction();
// }


const List = ({
    type
}: iList) => {
    window['React2' as any] = require('react');

    
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const {
        data,
        setState,
        setMessage,
        setNotes,
        setIsDone,
        setDoneStage,
        toggleChart,
        deleteItem,
        addItem,
    } = useListsState();
    const {modal: Modal, open: openModal} = useModal(<ChartContent items={data}/>)
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
        if (!dataFromStorage) {
            const initialData = getData(type)
            initialData.forEach((data: OneOfListsData, index: number) => setState(data, index))
        } else {
            dataFromStorage.forEach((data: OneOfListsData, index: number) => setState(data, index))
        }
        
    }, []) // LOAD DATA. Violates DIP

    const filterItem = (item: any, pattern: string) => {
        console.log(item, pattern)
        return item.message.includes(pattern);
    }

    const { filteredList, onPatternChange } = useSearch({searchboxReference: searchRef, list: data, isFoundFunction: filterItem })

    return (
            <div className={`${classes.listWrapper} ${type===PHOTOS && classes.extraWidthForList}`}>
                {Modal}
            {/* Violation of DIP with this type prop */}
            <div className={classes.pictureHeader}>
                <div className={classes.listTitle}>{getListTitle(type)}</div>
                {type === PHOTOS && <ShoppingChartIcon className={`${classes.center} ${classes.marginRight}`} onClick={openModal}/>}
            </div>
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
                                toggleChart={() => toggleChart(index)}
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
