import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import DeleteIcon from "../../../../Icons/DeleteIcon";
import {  iNoteListItem } from "../../../../Types/dataTypes";

const NotesItem = (
{data, editMessage, deleteItem, id}: iNoteListItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div  className={classes.listItem} id={`${id}`}>
            <DeleteIcon
                className={`${classes.notesListRight} ${classes.pointer}`}
                onClick={deleteItem}
            />
            <div className={classes.marginRight} contentEditable onBlur={(e: any) => {editMessage(e.target.outerText)}}>
                {data.message}
            </div>
        </div>
    )
}

export default NotesItem
