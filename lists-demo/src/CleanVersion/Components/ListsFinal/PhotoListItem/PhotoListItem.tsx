import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import AddShoppingChartIcon from "../../../../Icons/AddShoppingChartIcon";
import RemoveShoppingChartIcon from "../../../../Icons/RemoveShoppingChartIcon";
import { iPicturesData, ProgressType } from "../../../../Types/dataTypes";
import DoneStage from "../DoneStage/DoneStage";

const PicturesItem = ({
    title,
    price,
    message,
    stockLevel,
    imageName,
    isInChart,
    toggleChart,
}: iPicturesData) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            <div className={classes.pictureHeader}>
                <div className={classes.pictureTitle}>{title}</div>
                <div className={classes.shoppingChartItem} onClick={() => { toggleChart(); console.log('Togging') }}>
                    <div className={`${classes.center} ${classes.marginRight}`}>
                        {isInChart ? 
                            <RemoveShoppingChartIcon
                                className={classes.cursorPointer}
                            />: 
                            <AddShoppingChartIcon
                                className={classes.cursorPointer}
                            />
                        }
                    </div>
                </div>
            </div>
            
            <hr/>
            <div className={classes.picturePrice}>Buy for: ${price}</div>
            <div className={classes.pictureMessage}>{message}</div>
            <div className={`${classes.center} ${classes.stockLevel}`}>
                Stock level: 
                <DoneStage level={stockLevel} setDoneStage={(val:ProgressType)=>{}}/>
            </div>
            <div className={classes.center}>
                <img src={`./${imageName}`} alt='sold graphic representation'/>
            </div>
            
        </div>
    )
}

export default PicturesItem
