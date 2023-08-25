import { memo } from "react";
import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import AddShoppingChartIcon from "../../../../Icons/AddShoppingChartIcon";
import RemoveShoppingChartIcon from "../../../../Icons/RemoveShoppingChartIcon";
import { iPicturesData, iPicturesDataFinal, ProgressType } from "../../../../Types/dataTypes";
import DoneStage from "../DoneStage/DoneStage";

const Image = memo(({src}: {src: string}) => {
    return (
        <img src={src} alt='sold graphic representation'/>
    )
});

const PicturesItem = ({
    data,
    // title,
    // price,
    // message,
    // stockLevel,
    // imageName,
    isInChart,
    id,
    toggleChart,
}: iPicturesDataFinal) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    console.log(data)
    return (
        <div className={classes.listItem}>
            <div className={classes.pictureHeader}>
                <div className={classes.pictureTitle}>{data.title}</div>
                <div className={classes.shoppingChartItem} onClick={() => { toggleChart(id); console.log('Togging') }}>
                    <div className={`${classes.center} ${classes.marginRight}`}>
                        {data.isInChart ? 
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
            <div className={classes.picturePrice}>Buy for: ${data.price}</div>
            <div className={classes.pictureMessage}>{data.message}</div>
            <div className={`${classes.center} ${classes.stockLevel}`}>
                Stock level: 
                <DoneStage level={data.stockLevel} setDoneStage={(val:ProgressType)=>{}}/>
            </div>
            <div className={classes.center}>
                {/* <img src={`./${data.imageName}`} alt='sold graphic representation'/> */}
                <Image src={`./${data.imageName}`} />
            </div>
            
        </div>
    )
}

export default PicturesItem
