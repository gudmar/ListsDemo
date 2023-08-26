import { DONE_STAGE_MAX_POINTS, NOTES, TO_DOS } from "../../../Const/const";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { CustomTheme } from '../../../Types/themes'
import { iDoneStage, iListItem, iListItemViolation, iNoteListItemViolation, iPicturesData, iToDosListItem, iToDosListItemViolation, PicturesData, ProgressType, ToDoData } from "../../../Types/dataTypes";
import DeleteIcon from "../../../Icons/DeleteIcon"; 
import { useStyles } from "./styles";
import RemoveShoppingChartIcon from "../../../Icons/RemoveShoppingChartIcon";
import AddShoppingChartIcon from "../../../Icons/AddShoppingChartIcon";

const NoteListItem = ({data, editMessage, deleteItem}: iNoteListItemViolation) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const localClasses = useStyles();
    return (
        <div  className={classes.listItem}>
            <DeleteIcon
                className={`${localClasses.right} ${classes.pointer}`}
                onClick={deleteItem}
            />
            <div className={classes.marginRight} contentEditable onBlur={(e: any) => {editMessage(e.target.outerText)}}>
                {data.message}
            </div>
        </div>
    )
}

const DoneStage = ({level, setDoneStage}: iDoneStage) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const stages = Array(DONE_STAGE_MAX_POINTS).fill(null).map((_, index) => index >= level ? false : true)
    return (
        <div className={classes.doneStageWrapper}>
            {
                stages.map((stage, index) => (
                    <span data-index={index} className={`${stage ? classes.doneStage: classes.notDoneStage}`} key={index} onClick={() => setDoneStage(index + 1 as ProgressType)}></span>
                ))
            }
        </div>
    )    
}

const ToDosListItem = ({
    message,
    doneStage,
    isDone,
    notes,
    id,
    setIsDone,
    setDoneStage,
    editMessage,
    editNote,
    deleteItem,
}: iToDosListItemViolation) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const localClasses = useStyles();
    const onDoneStageChange = (val: ProgressType) => {
        setDoneStage!(val);
    }
    return (
        <div className={classes.listItem}>
            <DeleteIcon
                className={`${localClasses.right} ${classes.pointer}`}
                onClick={deleteItem}
            />
            <div className={classes.horizontal}>
                <input className={classes.pointer} type="checkbox" checked={isDone} id={`${id}`} onChange={() => { setIsDone!(!isDone)}}/>
                <div>
                    <label className={`${classes.message} ${classes.checkboxLabel}`} spellCheck={false}  contentEditable onBlur={(e: any) => {editMessage!(e.target.outerText)}}>{message}</label>
                    <hr/>
                    <div className={classes.note} spellCheck={false} contentEditable onBlur={(e: any) => {editNote!(e.target.outerText)}}>{notes}</div>
                    <DoneStage level={doneStage} setDoneStage={onDoneStageChange}/>
                </div>
                
            </div>
        </div>
    )
}

const PhotoListItem = ({
    title,
    price,
    message,
    stockLevel,
    imageName,
    isInChart,
    toggleChart,
    id,
}: iPicturesData) => {
    const { theme }: { theme: CustomTheme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            <div className={classes.pictureHeader}>
                <div className={classes.pictureTitle}>{title}</div>
                <div className={classes.shoppingChartItem} onClick={() => { toggleChart();}}>
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

const ListItem = ({
    type, data, id, setIsDone, setDoneStage, editMessage, editNote, deleteItem, toggleChart,
}: iListItemViolation) => {
    if (type === TO_DOS) {
        return (
            <ToDosListItem
                id={id}
                message={data.message}
                doneStage={(data as ToDoData).doneStage}
                isDone={(data as ToDoData).isDone}
                notes={(data as ToDoData).notes}
                setIsDone = {setIsDone}
                setDoneStage={setDoneStage}
                editMessage={editMessage}
                editNote={editNote}
                deleteItem={deleteItem}
            />
        )
    } else if (type === NOTES) {
        return (
            <NoteListItem 
                data={data}
                editMessage={editMessage!}
                id={id}
                deleteItem={deleteItem}
            />
        )
    } else {
        return (
            <PhotoListItem 
                title = {(data as PicturesData).title}
                price= {(data as PicturesData).price}
                message = {(data as PicturesData).message}
                stockLevel = {(data as PicturesData).stockLevel}
                imageName = {(data as PicturesData).imageName}
                isInChart = {(data as PicturesData).isInChart}
                toggleChart = {toggleChart!}
                id={id} 
            />
        )
    }
}

export default ListItem;
