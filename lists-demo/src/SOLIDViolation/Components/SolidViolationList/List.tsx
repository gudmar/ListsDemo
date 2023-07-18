import { useEffect, useState } from "react";
import { iList, OneOfLists, OneOfListsData } from "../../Types/types";
import { notesContent } from "../../../Data/notesContent";
import { toDoContent } from "../../../Data/toDoContent";
import { picturesContent } from "../../../Data/picturesContent";
import { NOTES, PHOTOS, TO_DOS } from "../../../Const/const";
import { AnyObject } from "../../../Types/dataTypes";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import ListItem from "./ListItem";

const getData = (type: OneOfLists): OneOfListsData[] => {
    if (type === NOTES) return notesContent;
    if (type === TO_DOS) return toDoContent;
    if (type === PHOTOS) return picturesContent;
    throw new Error(`Type ${type} is not supported yet`);
}

const List = ({
    type
}: iList) => {

    const [data, setData] = useState<OneOfListsData[]>([])
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    
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
            setData(initialData)
        } else {
            setData(dataFromStorage);
        }
        
    }, []) // LOAD DATA. Violates DIP

    return (
        <div className={classes.listWrapper}>
            {
                data.map((item) => {
                    <ListItem
                        type={type}
                        data={item}
                    />
                })
            }
        </div>
    )
}

export default List;
