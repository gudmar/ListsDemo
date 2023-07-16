import { useThemesAPI } from "../../Context/useThemeAPI";
import { NamedTheme } from "../../Types/themes";

const ListsFinal = () => {
    const { theme } = useThemesAPI();
    const classes = useStyles(theme as any);
}