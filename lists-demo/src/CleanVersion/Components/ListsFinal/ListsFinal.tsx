import { useThemesAPI } from "../../../Context/useThemeAPI";
import { CustomTheme } from "../../../Types/themes";
import { useStyles } from "./styles";

const ListsFinal = () => {
    const { theme } = useThemesAPI();
    const classes = useStyles(theme as CustomTheme);

    return (
        <div className={classes.board}>

        </div>
    )
}

export default ListsFinal;
