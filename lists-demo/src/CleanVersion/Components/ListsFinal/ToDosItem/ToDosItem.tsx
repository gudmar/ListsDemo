import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import DeleteIcon from "../../../../Icons/DeleteIcon";
import { iToDosListItem, iToDosListItemFinal, iToDosWithAddButton, ProgressType } from "../../../../Types/dataTypes";
import DoneStage from "../DoneStage/DoneStage";
import WithAddItem from "../WithAddItem/WithAddItem";

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
}: iToDosListItemFinal) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div className={classes.listItem}>
            <DeleteIcon
                className={`${classes.notesListRight} ${classes.pointer}`}
                onClick={() => deleteItem(id)}
            />
            <div className={classes.horizontal}>
                <input className={classes.pointer} type="checkbox" checked={isDone} id={`${id}`} onChange={() => { setIsDone!(!isDone, id)}}/>
                <div>
                    <label className={`${classes.message} ${classes.checkboxLabel}`} spellCheck={false}  contentEditable onBlur={(e: any) => {editMessage!(e.target.outerText, id)}}>{message}</label>
                    <hr/>
                    <div className={classes.note} spellCheck={false} contentEditable onBlur={(e: any) => {editNote!(e.target.outerText, id)}}>{notes}</div>
                    <DoneStage level={doneStage} setDoneStage={(val) => setDoneStage(val, id)}/>
                </div>
                
            </div>
        </div>
    )
}

export const ToDosItemWithAddButton = ({
    addItem,
    data,
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
}: iToDosWithAddButton) => {
    return (
        <WithAddItem
            addItem={addItem}
            id={parseInt(`${id}`)}
        >
            <ToDosItem
                message={data.message}
                doneStage={data.doneStage}
                isDone={data.isDone}
                notes={data.notes}
                id={id}
                setIsDone={setIsDone}
                setDoneStage={setDoneStage}
                editMessage={editMessage}
                editNote={editNote}
                deleteItem={deleteItem}
                key={JSON.stringify(`${data.message}${data.notes}`)}
            />
        </WithAddItem>
    )

}

export default ToDosItemWithAddButton
