import { DONE_STAGE_MAX_POINTS } from "../../../../Const/const";
import { useThemesAPI } from "../../../../Context/useThemeAPI";
import { useListStyles } from "../../../../GlobalStyling/styleList";
import { iDoneStage, ProgressType } from "../../../../Types/dataTypes";

const DoneStage = ({level, setDoneStage}: iDoneStage) => {
    const { theme } = useThemesAPI();
    const classes = useListStyles(theme);
    const stages = Array(DONE_STAGE_MAX_POINTS).fill(null).map((_, index) => index >= level ? false : true)
    return (
        <div className={classes.doneStageWrapper}>
            {
                stages.map((stage, index) => (
                    <span data-index={index} className={`${stage ? classes.doneStage: classes.notDoneStage}`} key={index} onClick={() => setDoneStage(index + 1 as ProgressType)}></span>
                ))
            }
        </div>
    )    
}

export default DoneStage;
