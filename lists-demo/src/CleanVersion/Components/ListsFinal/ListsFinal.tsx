import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useGalleryState } from "../../Hooks/useGalleryState";
import { useNotesState } from "../../Hooks/useNotesState";
import { useTodosState } from "../../Hooks/useTodosState";
import SearchableList from "../SearchableList/SearchableList";

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

    return (
        <>
        <div className={classes.button} onClick={save}>Save</div>
            <div className={classes.board}>
                <SearchableList
                    items={notes}
                    setItems={setNotes}
                />
                <SearchableList
                    items={todos}
                    setItems={setTodosState}
                />
                <SearchableList
                    items={galleryItems}
                    setItems={setGalleryState}
                />
            </div>
        </>
    )
}

export default ListsFinal;
