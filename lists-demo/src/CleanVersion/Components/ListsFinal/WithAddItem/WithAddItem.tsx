import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import { iAddItem, iWithAddItem } from "../../../../Types/dataTypes"

const AddItem = ({
    index,
    addItem,
}: iAddItem) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return (
        <div
            className={classes.addItem}
            onClick={() => addItem(index)}
        >
            <span className={classes.addButton}>+</span>
        </div>
    )
}

const WithAddItem = ({
    children, addItem, id
}: iWithAddItem) => {
    return (
        <>
            {children}
            <AddItem
                addItem={addItem}
                index={id}
            />
        </>
    )
}

export default WithAddItem
