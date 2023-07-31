import { iPicturesData, OneOfListsData } from "../../Types/types";
import { useStyles } from "./styles";
import { getBoughtItems, isPictureType } from "./utils";


const ChartContent = ({items}: {items: OneOfListsData[]}) => {
    const classes = useStyles();
    const isPicture = isPictureType(items);
    if (!isPicture) return (<></>)
    const boughtItems = getBoughtItems(items);
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
            </div>
            <div className={classes.tableBody}>
                {
                    boughtItems.map((item, index) => (
                        <>
                            <div className={classes.td}>{index}</div>
                            <div className={classes.td}>{(item as iPicturesData).title}</div>
                            <div className={classes.td}><img className={classes.thumbnail} src={`./${(item as iPicturesData).imageName}`} alt={''} /></div>
                            <div className={classes.td}>${(item as iPicturesData).price}</div>
                        </>
                        ),
                    )
                }
            </div>
        </div>
    )
}

export default ChartContent;
