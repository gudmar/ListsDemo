import { FC } from "react"
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { ProgressType } from "../../../Types/dataTypes";
import { useSearchbox } from "../../Hooks/useSearchbox/useSearchbox";
import { tIsFoundFunction } from "../../Types/types";

type tDoWithItem = (index: number, item: any) => void;

interface iListItem {
    items: any[],
    addItem?: tDoWithItem,
    editItem?: tDoWithItem,
    deleteItem?: (index: number) => void,
    setItems: (items: any[]) => void,
    isFoundFunction: tIsFoundFunction,
    listTitle: string,
    [restProps: string]: any
    
}

const withSearchableList = (ListItem: FC<any>) => ({
    items,
    // addItem,
    // deleteItem,
    setItems,
    editItem,
    isFoundFunction,
    listTitle,
    restProps,
}: iListItem) => {
    const List = () => {
        const { theme } = useThemesAPI();
        const classes = useListStyles(theme);
        const {filteredList, SearchBox} = useSearchbox(items, isFoundFunction)
        // new Error('Implement this')
        return (
            // <div className={`${classes.listWrapper} ${type===PHOTOS && classes.extraWidthForList}`}>
            // {Modal} WIDTH should be controlled by item width
        // Violation of DIP with this type prop
        <div className={classes.pictureHeader}>
            <div className={classes.listTitle}>{listTitle}</div>
        {SearchBox}
        <div className={classes.overflowAuto}>
            {
                // data.map((item, index) => {
                filteredList.map((item: any, index: number) => {
                    return (
                        <>
                        <ListItem
                            data={item}
                            id={index}
                            key={JSON.stringify(item)}
                            restProps={restProps}
                            // Add item is part of this
                        />
                        </>
                    )
                })
            }
        </div>
    </div>

        )
    }
    return List()
}

export default withSearchableList
