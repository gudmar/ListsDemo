import { DONE_STAGE_MAX_POINTS, IMG_PATH } from "../../../Const/const";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { iListItem, iNoteListItem, iToDosListItem, iDoneStage, iPicturesData } from "../../Types/types"

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
    const stages = Array(DONE_STAGE_MAX_POINTS).map((_, index) => index >= level ? false : true)
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
            <input type="checkbox" checked={isDone} id={`${id}`}/>
            <label htmlFor={`${id}`}>{message}</label>
            {notes}
            <DoneStage level={doneStage} />
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
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            <div className={classes.pictureTitle}>{title}</div>
            <div className={classes.picturePrice}>{price}</div>
            <div className={classes.pictureMessage}>{message}</div>
            <DoneStage level={stockLevel} />
            <img src={`${IMG_PATH}${imageName}`} alt='sold graphic representation'/>
        </div>
    )
}

const ListItem = ({
    type, data,
}: iListItem) => {

}

export default ListItem;
