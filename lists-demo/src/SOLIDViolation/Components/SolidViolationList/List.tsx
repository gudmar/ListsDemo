import { useEffect, useRef } from "react";
import { notesContent } from "../../../Data/notesContent";
import { toDoContent } from "../../../Data/toDoContent";
import { picturesContent } from "../../../Data/picturesContent";
import { NOTES, PHOTOS, TO_DOS } from "../../../Const/const";
import { AnyObject, iAddItem, iList, OneOfLists, OneOfListsData, ProgressType, ToDoData } from "../../../Types/dataTypes";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import ListItem from "./ListItem";
import { useListsState } from "./useListsState";
import SearchBox from "../Search/SearchBox";
import { useSearch } from "../Search/useSearch";
import ShoppingChartIcon from "../../../Icons/ShoppingChartIcon";
import { useModal } from "../../hooks/useModal";
import ChartContent from "../ChartContent/ChartContent";
import AddIcon from "../../../Icons/Add";

// COMPARE: withSearchabelList.tsx

// SRP:
// useDoWithStateHandler passes the state somewhere, so it has to be kept in 2 places
// state should not be managed in a slingle reducer, as 3 lists will have 3 owners,
// state should not be managed in List, as List seems a component that may be used in may places, and should be closed for modifications,
//   Manageing state here means that when someone wants to use List in his feature, that person MODIFIES List and risks all possible regression

// OCP:
// List component has a 'switch' structure, to add next list type, or some other data for photos
// list one would have to modify it, no extension possible
// as list depends on fetchers, too little props passed

//LSP
// flush functions says, that something may not be needed in some cases
// if statements changing what is displayed depending on type
// THis has to be put somewhere, but this is not the proper 
// component. Lists wrapper should be responsible for this

// DIP
// List component knows how to fetch data,
// konwledge about filter function 
// knowledge about icons used


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

const useDoWithStateHandler = (doWithStateFunction: (nextState:any) => void, state: any) => {
    useEffect(() => {
        doWithStateFunction(state);
    }, [state ,doWithStateFunction])
}

const flush = (val: any) => {}

const List = ({
    type, doWithState
    // doWithState LOOKS LIKE violation of single responsibility principle,
    // what parent wants to do with the state? 
    // This is just a setter of the state in reality, but 
    // second place where state is kept smells bad.
    // If state if fetched by LIST, why it is saved by parent?
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

    useDoWithStateHandler(doWithState || flush, data);

    const {modal: Modal, open: openModal} = useModal(<ChartContent items={data}/>)
    const searchRef = useRef(null);
    useEffect(() => {
        // DIP violation, list knows how to fetch data, and fetches it. 
        // It knows about ALL data types it may store!!
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
        return item.message.includes(pattern);
    }

    const { filteredList, onPatternChange } = useSearch({searchboxReference: searchRef, list: data, isFoundFunction: filterItem })

    return (
            <div className={`${classes.listWrapper} ${type===PHOTOS && classes.extraWidthForList}`}>
                {Modal}
            {/* Violation of DIP with this type prop */}
            <div className={classes.pictureHeader}>
                <div className={classes.listTitle}>{getListTitle(type)}</div>
                {type === PHOTOS && <div className={`${classes.center} ${classes.marginRight}`}>
                        <ShoppingChartIcon className={`${classes.cursorPointer}`} onClick={openModal}/>
                    </div>
                }
                {(type === NOTES || type === TO_DOS) && <div className={`${classes.center} ${classes.marginRight}`}>
                        <AddIcon className={`${classes.cursorPointer}`} onClick={() => addItem(data, 0)}/>
                    </div>
                }

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
                                            addItem(data, index + 1)
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
