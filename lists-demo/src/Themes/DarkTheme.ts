import { DARK_THEME } from "../Const/const";
import { NamedTheme } from "../Types/themes";

export const DarkNamedTheme: NamedTheme = {
    theme: {
        customBackground: '#AAA',
        customFontStyles:  `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
        customColor: '#fff',
        customNavBackground: '#444',
    }, 
    name: DARK_THEME,
}