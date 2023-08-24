import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import AddIcon from "../../../Icons/Add";
import ShoppingChartIcon from "../../../Icons/ShoppingChartIcon";
import { useGalleryState } from "../../Hooks/useGalleryState";
import { useModal } from "../../Hooks/useModal";
import { useNotesState } from "../../Hooks/useNotesState";
import { useTodosState } from "../../Hooks/useTodosState";
import { tIsFoundFunction } from "../../Types/types";
import ChartContent from "../ChartContent/ChartContent";
import withSearchableList from "../withSearchableList/withSearchableList";
import NotesItemWithAddButton from "./NotesItem/NotesItem";
import NotesItem from "./NotesItem/NotesItem";
import PicturesItem from "./PhotoListItem/PhotoListItem";
import ToDosItem, { ToDosItemWithAddButton } from "./ToDosItem/ToDosItem";
import WithAddItem from "./WithAddItem/WithAddItem";

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
    

    const {modal: Modal, open: openModal} = useModal(<ChartContent items={galleryItems}/>)
    const showShoppingChart = () => openModal();
    const Notes = withSearchableList(NotesItemWithAddButton, AddIcon, () => addNote(0));
    const ToDos = withSearchableList(ToDosItemWithAddButton, AddIcon, () => addTodosItem(0));
    const Pictures = withSearchableList(PicturesItem, ShoppingChartIcon, showShoppingChart);
    const isFoundNotesFunction: tIsFoundFunction = (listItem: any, pattern: string) => {
        const isFound = listItem.message.includes(pattern);
        return isFound;
    }
    
    console.log(galleryItems)
    return (
        <>
        <div className={classes.button} onClick={save}>Save</div>
            {Modal}
            <div className={classes.board}>
                <Notes
                    items={notes}
                    setItems={setNotes}
                    addItem={(index: number) => addNote(index + 1)}
                    editMessage={editNote}
                    deleteItem={deleteNote}
                    listTitle={'Notes'}
                    isFoundFunction={isFoundNotesFunction}
                />
                {/* <SearchableList
                    items={notes}
                    setItems={setNotes}
                /> */}
                <ToDos
                    items={todos}
                    message={todos}
                    addItem={(index: number) => addTodosItem(index + 1)}
                    listTitle={'To do list'}
                    setItems={setTodosState}
                    isFoundFunction={isFoundNotesFunction}
                    editNote={editTodosNotes}
                    editMessage={editTodosMessage}
                    setDoneStage={editTodosDoneStage}
                    deleteItem={deleteTodosItem}
                    setIsDone={editTodosIsDone}
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
                    toggleChart={toggleGalleryIsInChart}
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
