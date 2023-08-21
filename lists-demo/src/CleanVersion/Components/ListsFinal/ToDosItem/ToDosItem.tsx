import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import DeleteIcon from "../../../../Icons/DeleteIcon";
import { iToDosListItem, ProgressType } from "../../../../Types/dataTypes";
import DoneStage from "../DoneStage/DoneStage";

const ToDosItem = ({
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
}: iToDosListItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const onDoneStageChange = (val: ProgressType) => {
        setDoneStage!(val);
    }
    return (
        <div className={classes.listItem}>
            <DeleteIcon
                className={`${classes.notesListRight} ${classes.pointer}`}
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

export default ToDosItem
