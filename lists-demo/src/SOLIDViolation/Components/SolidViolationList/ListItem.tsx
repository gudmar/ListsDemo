import { DONE_STAGE_MAX_POINTS, NOTES, TO_DOS } from "../../../Const/const";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { iListItem, iNoteListItem, iToDosListItem, iDoneStage, iPicturesData } from "../../Types/types"
import { CustomTheme } from '../../../Types/themes'
import { PicturesData, ProgressType, ToDoData } from "../../../Types/dataTypes";

const NoteListItem = ({data}: iNoteListItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            {data.message}
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
}: iToDosListItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const onDoneStageChange = (val: ProgressType) => {
        setDoneStage!(val);
    }
    return (
        <div className={classes.listItem}>
            <div className={classes.horizontal}>
                <input type="checkbox" checked={isDone} id={`${id}`} onChange={() => { setIsDone!(!isDone)}}/>
                <div>
                    <label htmlFor={`${id}`} className={classes.message}>{message}</label>
                    <hr/>
                    <div>{notes}</div>
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
    id,
}: iPicturesData) => {
    const { theme }: { theme: CustomTheme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            <div className={classes.pictureTitle}>{title}</div>
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
    type, data, id, setIsDone, setDoneStage,
}: iListItem) => {
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
            />
        )
    } else if (type === NOTES) {
        return (
            <NoteListItem 
                data={data}
                id={id}
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
                id={id} 
            />
        )
    }
}

export default ListItem;
