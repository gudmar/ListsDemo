import { useState } from "react";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import RemoveShoppingChartIcon from "../../../Icons/RemoveShoppingChartIcon";
import { iPicturesData, OneOfListsData } from "../../../Types/dataTypes";
import { useStyles } from "./styles";
import { getBoughtItems, isPictureType } from "./utils";

const removeBoughtItem = (items: OneOfListsData[], index: number, setItemsFunction: (items: iPicturesData[]) => void) => {
    const previousBoughtItems = getBoughtItems(items as iPicturesData[]);
    (previousBoughtItems as iPicturesData[])[index].isInChart = false;
    const boughtItems = [...getBoughtItems(items as iPicturesData[])]
    setItemsFunction(boughtItems as iPicturesData[]);
}

const ChartContent = ({items}: {items: OneOfListsData[]}) => {
    const [boughtItems, setBoughtItems] = useState(getBoughtItems(items))
    const classes = useStyles();
    const { theme } = useThemesAPI();
    const classesGlobal = useListStyles(theme);
    const isPicture = isPictureType(items);
    if (!isPicture) return (<></>)
    if (!boughtItems.length) return (<>Nothing added to chart</>)
    return (
        <div className={classes.tableContainer}>
             <div className={classes.headline}>
               Bought items
            </div>

            <div className={classes.tableHead}>
                <div className={classes.th}>Id</div>
                <div className={classes.th}>Title</div>
                <div className={classes.th}>Preview</div>
                <div className={classes.th}>Price</div>
                <div className={classes.th}>Remove</div>
            </div>
            <div className={classes.tableBody}>
                {
                    boughtItems.map((item, index) => (
                        <>
                            <div className={classes.td}>{index}</div>
                            <div className={classes.td}>{(item as iPicturesData).title}</div>
                            <div className={classes.td}><img className={classes.thumbnail} src={`./${(item as iPicturesData).imageName}`} alt={''} /></div>
                            <div className={classes.td}>${(item as iPicturesData).price}</div>
                            <div className={classes.td}>
                                <RemoveShoppingChartIcon 
                                    className={`${classes.bin} ${classesGlobal.cursorPointer}`}
                                    onClick={() => removeBoughtItem(items, index, setBoughtItems)}
                                />
                            </div>
                        </>
                        ),
                    )
                }
            </div>
        </div>
    )
}

export default ChartContent;
