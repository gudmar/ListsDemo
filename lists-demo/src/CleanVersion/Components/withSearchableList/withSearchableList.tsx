import { FC } from "react"
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useSearchbox } from "../../Hooks/useSearchbox/useSearchbox";
import { tIsFoundFunction } from "../../Types/types";

// COMPARE: List in SolidViolation folder

// GOOD EXAMPLE:
// SRP: 
// No violation, iListItem contains only props related to List functionalities,
// so no feature owner will want to change this

// OCP
// No need to change, as this HOC does not know what will be displayed
// opened for extentions, as it is a HOC

// LSP
// ...rest used, this HOC is displayed components agnostic,
// each type is handled by some other item component

// ISP
// No unused props/imports
// ...rest used to make sure only used props are passd

// DIP
// HOC, ...rest, 

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
        return (
        <div className={`${classes.listWrapper}`}>
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
