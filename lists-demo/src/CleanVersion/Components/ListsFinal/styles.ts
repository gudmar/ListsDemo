import { createUseStyles } from "react-jss";
import { CustomTheme } from "../../../Types/themes";

export const useStyles = createUseStyles({
    board: (theme: CustomTheme) => ({
        backgroundColor: theme.customBackground,
        width: '100vw',
        height: '100vh',
        fontFamily: theme.customFontStyles,
        color: theme.customColor
    })
})