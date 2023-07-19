import { LIGHT_THEME } from "../Const/const";
import { NamedTheme } from "../Types/themes";

export const LightNamedTheme: NamedTheme = {
    theme: {
        customBackground: '#AAAAAA',
        listBackground: '#EFEFFF',
        customFontStyles:  `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif`,
        customColor: '#222',
        customNavBackground: '#AAA',
        listItemHoverBackground: '#DDDDDD',
        listTitleColor: '#000010'
    }, 
    name: LIGHT_THEME,
}