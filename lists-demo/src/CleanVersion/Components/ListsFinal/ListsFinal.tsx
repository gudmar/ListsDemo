import { useMemo } from "react";
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import AddIcon from "../../../Icons/Add";
import ShoppingChartIcon from "../../../Icons/ShoppingChartIcon";
import { saveNotes } from "../../Functions/saveNotes";
import { saveToDos } from "../../Functions/saveToDos";
import { useGalleryState } from "../../Hooks/useGalleryState";
import { useModal } from "../../Hooks/useModal";
import { useNotesState } from "../../Hooks/useNotesState";
import { useTodosState } from "../../Hooks/useTodosState";
import { tIsFoundFunction } from "../../Types/types";
import ChartContent from "../ChartContent/ChartContent";
import withSearchableList from "../withSearchableList/withSearchableList";
import NotesItemWithAddButton from "./NotesItem/NotesItem";
import PicturesItem from "./PhotoListItem/PhotoListItem";
import { ToDosItemWithAddButton } from "./ToDosItem/ToDosItem";

// COMPARE: SOLIDViolationWrapper

// SRP
// State kept in 'main' component, that knows about all lists 
// and data it displayes
// THis is a main component,
// HOC adds abstraction, so DIP is not violated
// ...rest props are used by HOC adding abstraction in proper way

// useMemo necessarry for HOC, as otherwise function that creates lists
// would be recreated every rerender cycle and list would scroll its
// self to the top

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
    
    const save = async () => {
        await saveNotes(notes);
        await saveToDos(todos);
    }    

    const {modal: Modal, open: openModal} = useModal(<ChartContent items={galleryItems}/>)
    const showShoppingChart = () => openModal();
    const Notes = useMemo(
       () => {
            return withSearchableList(NotesItemWithAddButton, AddIcon, () => addNote(0))
       }, 
    []);
    const ToDos = useMemo(
        () => withSearchableList(ToDosItemWithAddButton, AddIcon, () => addTodosItem(0)),
        []
    );
    const Pictures = useMemo(
        () => withSearchableList(PicturesItem, ShoppingChartIcon, showShoppingChart),
        []
    );
    const isFoundNotesFunction: tIsFoundFunction = (listItem: any, pattern: string) => {
        const isFound = listItem.message.includes(pattern);
        return isFound;
    }
    
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
                <Pictures
                    items={galleryItems}
                    listTitle={'Buy a picture'}
                    setItems={setGalleryState}
                    isFoundFunction={isFoundNotesFunction}
                    toggleChart={toggleGalleryIsInChart}
                />
            </div>
        </>
    )
}

export default ListsFinal;
