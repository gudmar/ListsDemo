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
        listTitleColor: '#D0D0E0',
        saveButtonColor: '#DDDD99',
        saveButtonBackground: '#228822',
        saveButtonBgHover: '#115511',
        saveButtonBgActive: '#55BB55',

    }, 
    name: DARK_THEME,
}