import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useGalleryState } from "../../Hooks/useGalleryState";
import { useNotesState } from "../../Hooks/useNotesState";
import { useTodosState } from "../../Hooks/useTodosState";
import withSearchableList from "../withSearchableList/withSearchableList";

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

    return (
        <>
        <div className={classes.button} onClick={save}>Save</div>
            <div className={classes.board}>
                <Notes
                    items={notes}
                    setItems={setNotes}
                />
                {/* <SearchableList
                    items={notes}
                    setItems={setNotes}
                /> */}
                <ToDos
                    items={todos}
                    setItems={setTodosState}
                />
                {/* <SearchableList
                    items={todos}
                    setItems={setTodosState}
                /> */}
                <Pictures
                    item={galleryItems}
                    setItems={setGalleryState}
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
