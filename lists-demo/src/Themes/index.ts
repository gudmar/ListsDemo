import { NamedTheme } from "../Types/themes";
import { DarkNamedTheme } from "./DarkTheme";
import { LightNamedTheme } from "./LightTheme";

export const THEMES:NamedTheme[] = [
    DarkNamedTheme,
    LightNamedTheme,
]

export const INITIAL_THEME = LightNamedTheme;
