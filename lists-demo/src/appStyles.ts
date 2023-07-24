import { createUseStyles } from "react-jss";
import { CustomTheme } from "./Types/themes";

export const useListStyles = createUseStyles( (theme: CustomTheme) => ({
    selectWrapper: {
        display: 'inline-block',
        width: '12rem',
    },
    button: {
        backgroundColor: '#46dd86',
        color: '#111144',
        height: '2.5rem',
        lineHeight: '2.5rem',
        fontWeight: 'bold',
        padding: '0 1rem 0 1rem',
        borderRadius: '0.5rem',
        textAlign: 'center',
        '&:hover': {
            transitionDuration: '0.3s',
            backgroundColor: '#36ad36',
        }
    },
    row: {
        transitionDuration: '0.3s',
        padding: '0 1rem 0 1rem',
        '&:hover': {
            backgroundColor: '#999911',
            width: '100%',
            transitionDuration: '0.3s',
        }
    },
    hiddenMenu: {
        position: 'absolute',
        overflow: 'hidden',
        visibility: 'hidden',
        transitionDuration: '0.3s',
        opacity: '0',
        zIndex: '10',
        lineHeight: '2rem',
        backgroundColor: '#aaaa11',
        borderRadius: '0.5rem',
        
    },
    display: {
        '&:hover': {
            cursor: 'pointer',
            
        },
        '&:hover $hiddenMenu': {
            visibility: 'visible',
            transitionDuration: '0.3s',
            opacity: '1',
        }
    },
}));
