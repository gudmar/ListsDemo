import { NOTES, PHOTOS, TO_DOS } from "../../../Const/const"
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useSave } from "../../hooks/useSave";
import List from "../SolidViolationList/List"

export const SOLIDViolationList = () => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const {
        setNotes, setToDos, setPictures, save
    } = useSave();
    return(
        <>
        <button onClick={save}>Save</button>
            <div className={classes.board}>
                <List
                    type={NOTES}
                    doWithState={setNotes}
                />
                <List 
                    type={TO_DOS}
                    doWithState={setToDos}
                />
                <List
                    type={PHOTOS}
                    doWithState={setPictures}
                />
            </div>
        </>
    )
}
