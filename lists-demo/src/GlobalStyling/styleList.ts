import { createUseStyles } from "react-jss";
import { CustomTheme } from "../Types/themes"

export const useListStyles = createUseStyles({
    board: (theme: CustomTheme) => ({
        backgroundColor: theme.customBackground,
        width: '100vw',
        height: '100vh',
        fontFamily: theme.customFontStyles,
        color: theme.customColor
    }),
    listWrapper: (theme: CustomTheme) => ({
        width: '50px',
        height: '100%',
        border: 'solid thin black',
        backgroundColor: '#888',
        '&:hover': {
            cursor: 'pointer',
        }
    }),
    listItem: (theme: CustomTheme) => ({
        backgroundColor: 'white',
        color: 'black'
    }),
    
    doneStageWrapper: (theme: CustomTheme) => ({
        display: 'flex',
    }),
    notDoneStage: (theme: CustomTheme) => ({
        borderRadius: '50%',
        border: 'black solid thin',
        width: '1rem',
        height: '1rem',
    }),
    doneStage:  (theme: CustomTheme) => ({
        borderRadius: '50%',
        border: 'black solid thin',
        width: '1rem',
        height: '1rem',
        backgroundColor: 'black',
    }),
    pictureTitle: (theme: CustomTheme) => ({
        fontWeight: 'bold',
        fontSize: '2rem',
    }),
    picturePrice: (theme: CustomTheme) => ({
        fontWeight: 'bold',
    }),
    pictureMessage: (theme: CustomTheme) => ({
        fontStyle: 'italic',
    })

})