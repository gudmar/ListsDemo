import { DARK_THEME } from "../Const/const";
import { NamedTheme } from "../Types/themes";

export const DarkNamedTheme: NamedTheme = {
    theme: {
        customBackground: '#AAA',
        listBackground: '#CCCCCC88',
        customFontStyles:  `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
        customColor: '#fff',
        customNavBackground: '#444',
        listItemHoverBackground: '#DDDDDD',
    }, 
    name: DARK_THEME,
}