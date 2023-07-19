import { NOTES, PHOTOS, TO_DOS } from "../../../Const/const"
import { useThemesAPI } from "../../../Context/useThemeAPI";
import { useListStyles } from "../../../GlobalStyling/styleList";
import List from "../SolidViolationList/List"

export const SOLIDViolationList = () => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    return(
        <>
            <div className={classes.board}>
                <List
                    type={NOTES}
                />
                <List type={TO_DOS}/>
                <List type={PHOTOS}/>
            </div>
        </>
    )
}
