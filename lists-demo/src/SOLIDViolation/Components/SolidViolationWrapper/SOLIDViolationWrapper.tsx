import { NOTES, PHOTOS, TO_DOS } from "../../../Const/const"
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import { useSave } from "../../hooks/useSave";
import List from "../SolidViolationList/List"

// COMPARE: ListsFinal

// SRP
// Each list loads data it needs, so each list should save it
// In this case SOLIDViolationList wants to save each lists data,
// this violates SRP, as state is copied to useSave

// LSP
// Setting type to List says, that there is a switch statement in List
// List serves many types, so it's role is 'main' class role, but
// in reality THIS compoent (SOLIDViolationList) is a Main, 
// so List should not know about any type

// DIP
// No 'items' prop passed to list makes it know about data it displays,
// because there is a type PROP it also konws about data displayed by
// other list types, so DIP violation

export const SOLIDViolationList = () => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const {
        setNotes, setToDos, setPictures, save
    } = useSave();
    return(
        <>
        <div className={classes.button} onClick={save}>Save</div>
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
