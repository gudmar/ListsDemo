import { DONE_STAGE_MAX_POINTS, NOTES, TO_DOS } from "../../../Const/const";
import { IMG_PATH } from "../../../Const/photoPath";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { iListItem, iNoteListItem, iToDosListItem, iDoneStage, iPicturesData } from "../../Types/types"
import { CustomTheme } from '../../../Types/themes'
import { PicturesData, ToDoData } from "../../../Types/dataTypes";

const NoteListItem = ({data}: iNoteListItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            {data.message}
        </div>
    )
}

const DoneStage = ({level}: iDoneStage) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const stages = Array(DONE_STAGE_MAX_POINTS).fill(null).map((_, index) => index >= level ? false : true)
    console.log(stages)
    return (
        <div className={classes.doneStageWrapper}>
            {
                stages.map((stage) => (
                    <span className={`${stage ? classes.doneStage: classes.notDoneStage}`}></span>
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
}: iToDosListItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            <div className={classes.horizontal}>
                <input type="checkbox" checked={isDone} id={`${id}`}/>
                <div>
                    <label htmlFor={`${id}`} className={classes.message}>{message}</label>
                    <hr/>
                    <div>{notes}</div>
                    <DoneStage level={doneStage} />
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
            <div className={classes.picturePrice}>{price}</div>
            <div className={classes.pictureMessage}>{message}</div>
            <div className={classes.center}>
                Stock level: 
                <DoneStage level={stockLevel} />
            </div>
            <div className={classes.center}>
                <img src={`./${imageName}`} alt='sold graphic representation'/>
            </div>
            
        </div>
    )
}

const ListItem = ({
    type, data, id
}: iListItem) => {
    if (type === TO_DOS) {
        return (
            <ToDosListItem
                id={id}
                message={data.message}
                doneStage={(data as ToDoData).doneStage}
                isDone={(data as ToDoData).isDone}
                notes={(data as ToDoData).notes}
            
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
