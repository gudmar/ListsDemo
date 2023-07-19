import { createUseStyles } from "react-jss";
import { CustomTheme } from "../Types/themes"

const TITLE_SIZE = '2.5rem';
const TITLE_MARGIN = '1rem';
const TITLE_LOST = '4.5rem';

export const useListStyles = createUseStyles({
    board: (theme: CustomTheme) => ({
        backgroundColor: theme.customBackground,
        // overflow: 'auto',
        // width: '100vw',
        height: '100vh',
        fontFamily: theme.customFontStyles,
        color: theme.customColor,
        position: 'relative',
    }),
    listTitle: (theme: CustomTheme) => ({
        fontWeight: 'bold',
        color: theme.listTitleColor,
        textAlign: 'center',
        fontSize: TITLE_SIZE,
        margin: TITLE_MARGIN,


    }),
    horizontal: {
        display: 'flex',
    },
    message: {
        fontWeight: 'bold',
    },
    listWrapper: (theme: CustomTheme) => ({
        widthMin: '200px',
        width: '25%',
        maxHeight: '100%',
        borderRadius: '15px',
        display: 'inline-block',
        position: 'relative',
        zIndex: '1',
        // overflow: 'auto',
        backgroundColor: theme.listBackground,
        margin: '1rem'
    }),
    listItem: (theme: CustomTheme) => ({
        backgroundColor: 'white',
        display: 'block',
        position: 'relative',
        color: 'black',
        margin: '1.5rem',
        padding: '1rem',
        transitionDuration: '0.3s',
        borderRadius: '8px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.listItemHoverBackground,
            transitionDuration: '0.3s',
        },
        '&:before, &:after':{
            content: '" "',
            display: 'inline-block',
            position: 'absolute',
            border: 'solid black thin',
            width: '30%',
            height: '15%',
            top: '50%',
            boxShadow: '-3px 25px 29px 9px rgba(66, 68, 90, 1)',
            zIndex: '-1'
        },
        '&:before': {
            left: '10%',
            transform: 'rotate(-10deg)'
        },
        '&:after':{
            right: '10%',
            transform: 'rotate(10deg)'
        },
        '& img': {
            // width: 'calc(100% - 1.5rem)',
            width: '90%',
            border: 'solid thin #ccc',
            borderRadius: '0.5rem',
            padding: '0.5rem',
            // margin: '0.5rem'
        }
    }),
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    doneStageWrapper: (theme: CustomTheme) => ({
        display: 'flex',
    }),
    notDoneStage: (theme: CustomTheme) => ({
        borderRadius: '50%',
        border: 'black solid thin',
        width: '0.7rem',
        height: '0.7rem',
        margin: '0.2rem'
    }),
    doneStage:  (theme: CustomTheme) => ({
        borderRadius: '50%',
        border: 'black solid thin',
        width: '0.7rem',
        height: '0.7rem',
        backgroundColor: 'black',
        margin: '0.2rem'
    }),
    pictureTitle: (theme: CustomTheme) => ({
        fontWeight: 'bold',
        fontSize: '2rem',
    }),
    picturePrice: (theme: CustomTheme) => ({
        fontWeight: 'bold',
        fontStyle: 'italic',
        margin: '0.5rem 0 0.5rem 0'
    }),
    pictureMessage: (theme: CustomTheme) => ({
        fontStyle: 'italic',
        fontWeight: '150',
        margin: '0.5rem 0 0.5rem 0'
    }),
    stockLevel: {
        margin: '0.5rem 0 0.5rem 0'
    },
    extraWidthForList: () => ({
        width: '35%'
    }),
    overflowAuto: {
        height: `calc(100vh - ${TITLE_LOST})`,
        overflow: 'auto'
    }

})