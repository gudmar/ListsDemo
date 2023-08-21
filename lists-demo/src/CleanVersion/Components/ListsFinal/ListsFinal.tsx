import { link } from "fs";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useGalleryState } from "../../Hooks/useGalleryState";
import { useNotesState } from "../../Hooks/useNotesState";
import { useTodosState } from "../../Hooks/useTodosState";
import { tIsFoundFunction } from "../../Types/types";
import withSearchableList from "../withSearchableList/withSearchableList";
import NotesItem from "./NotesItem/NotesItem";
import PicturesItem from "./PhotoListItem/PhotoListItem";
import ToDosItem from "./ToDosItem/ToDosItem";

const save = () => {}

const ListsFinal = () => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const {
        galleryItems,
        setGalleryState,
        toggleGalleryIsInChart
    } = useGalleryState();
    const {
        notes, editNote, addNote, deleteNote, setNotes
    } = useNotesState()
    const {
        todos, editTodosMessage, editTodosNotes, editTodosDoneStage, editTodosIsDone, setTodosState, addTodosItem, deleteTodosItem
    } = useTodosState()

    const Notes = withSearchableList(NotesItem);
    const ToDos = withSearchableList(ToDosItem);
    const Pictures = withSearchableList(PicturesItem);
    const isFoundNotesFunction: tIsFoundFunction = (listItem: any, pattern: string) => {
        const isFound = listItem.message.includes(pattern);
        return isFound;
    }

    return (
        <>
        <div className={classes.button} onClick={save}>Save</div>
            <div className={classes.board}>
                <Notes
                    items={notes}
                    setItems={setNotes}
                    addItem={addNote}
                    listTitle={'Notes'}
                    isFoundFunction={isFoundNotesFunction}
                    
                />
                {/* <SearchableList
                    items={notes}
                    setItems={setNotes}
                /> */}
                <ToDos
                    items={todos}
                    addItem={addTodosItem}
                    listTitle={'To do list'}
                    setItems={setTodosState}
                    isFoundFunction={isFoundNotesFunction}
                />
                {/* <SearchableList
                    items={todos}
                    setItems={setTodosState}
                /> */}
                <Pictures
                    items={galleryItems}
                    listTitle={'Buy a picture'}
                    setItems={setGalleryState}
                    isFoundFunction={isFoundNotesFunction}
                />
                {/* <SearchableList
                    items={galleryItems}
                    setItems={setGalleryState}
                /> */}
            </div>
        </>
    )
}

export default ListsFinal;
