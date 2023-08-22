import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import DeleteIcon from "../../../../Icons/DeleteIcon";
import ListItem from "../../../../SOLIDViolation/Components/SolidViolationList/ListItem";
import {  iNoteListItem } from "../../../../Types/dataTypes";
import WithAddItem from "../WithAddItem/WithAddItem";

const NotesItem = (
{data, editMessage, deleteItem, id}: iNoteListItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div  className={classes.listItem} id={`${id}`}>
            <DeleteIcon
                className={`${classes.notesListRight} ${classes.pointer}`}
                onClick={() => deleteItem!(id)}
            />
            <div className={classes.marginRight} contentEditable onBlur={(e: any) => {editMessage(e.target.outerText, id)}}>
                {data.message}
            </div>
        </div>
    )
}

const NotesItemWithAddButton = ({
    data, editMessage, deleteItem, id, addItem
}: iNoteListItem) => {
    return (
        <WithAddItem
            addItem={addItem || ((index) => {}) }
            id={parseInt(`${id}`)}
        >
            <NotesItem
                editMessage={editMessage}
                deleteItem={deleteItem}
                data={data}
                id={id}
                key={JSON.stringify(data)}
            />
        </WithAddItem>
    )
}

export default NotesItemWithAddButton
