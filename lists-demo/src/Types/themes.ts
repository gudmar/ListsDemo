export type CustomTheme = {
    customBackground: string,
    listBackground: string,
    customFontStyles:  string,
    customColor: string,
    customNavBackground: string,
    listItemHoverBackground: string,
    listTitleColor: string,
    saveButtonColor: string,
    saveButtonBackground: string,
    saveButtonBgHover: string,
    saveButtonBgActive: string,
}

export type NamedTheme = {
    theme: CustomTheme,
    name: string,
}