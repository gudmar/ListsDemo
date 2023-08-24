import { FC } from "react"
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { ProgressType } from "../../../Types/dataTypes";
import { useSearchbox } from "../../Hooks/useSearchbox/useSearchbox";
import { tIsFoundFunction } from "../../Types/types";

type tDoWithItem = (index: number, item: any) => void;

interface iListItem {
    items: any[],
    addItem?: (index: number) => void,
    editItem?: tDoWithItem,
    deleteItem?: (index: number) => void,
    setItems: (items: any[]) => void,
    isFoundFunction: tIsFoundFunction,
    listTitle: string,
    [restProps: string]: any   
}

const withSearchableList = (ListItem: FC<any>, HeaderIcon: FC<any>, headerIconAction: () => void) => ({
    items,
    isFoundFunction,
    listTitle,
    ...rest
}: iListItem) => {
    const List = () => {
        const { theme } = useThemesAPI();
        const classes = useListStyles(theme);
        const {filteredList, SearchBox} = useSearchbox(items, isFoundFunction)
        // new Error('Implement this')
        return (
        <div className={`${classes.listWrapper}`}>
            {/* // ${type===PHOTOS && classes.extraWidthForList}`}> */}
            <button onClick={() => console.log(items) }>STATE</button>
            <div className={classes.pictureHeader}>
                <div className={classes.listTitle}>{listTitle}</div>
                <HeaderIcon className={`${classes.cursorPointer}`} onClick={headerIconAction}/>
            </div>
                    {SearchBox}
                    <div className={classes.overflowAuto}>
                        {
                            filteredList.map((item: any, index: number) => {
                                return (
                                    <ListItem
                                        data={item}
                                        id={index}
                                        key={JSON.stringify(item)}
                                        {...rest}
                                    />
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
