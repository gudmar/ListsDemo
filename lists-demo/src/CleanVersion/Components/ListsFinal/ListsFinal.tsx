import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useListsState } from "../../Hooks/useListsState";
import SearchableList from "../SearchableList/SearchableList";

const save = () => {}

const ListsFinal = () => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const {
        noteItems,
        setNoteItems,
        toDoItems,
        setToDoItems,
        galeryItems,
        setGaleryItems,
    } = useListsState();
    return (
        <>
        <div className={classes.button} onClick={save}>Save</div>
            <div className={classes.board}>
                <SearchableList
                    items={noteItems}
                    setItems={setNoteItems}
                />
                <SearchableList
                    items={toDoItems}
                    setItems={setToDoItems}
                />
                <SearchableList
                    items={galeryItems}
                    setItems={setGaleryItems}
                />
            </div>
        </>
    )
}

export default ListsFinal;
