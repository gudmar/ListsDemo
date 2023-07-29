import { createUseStyles } from "react-jss";

export const useSearchStyles = createUseStyles({
    icon: {
        width: '1.5rem',
        display: 'inline-block',
        paddingLeft: '0.5rem'
    },
    wrapper: {
        display: 'flex',
        flexGrow: '5',
        backgroundColor: 'white',
        borderRadius: '1.5rem',
        width: '90%',
        margin: 'auto'
    },
    inputBox: {
        backgroundColor: 'white',
        display: 'inline-block',
        // width: '15rem',
        lineHeight: '3rem',
        fontSize: '1.8rem',
        margin: 'auto',
        height: '3rem',
        paddingLeft: '0.5rem',
        width: '90%',
        outline: '0px solid transparent',
        
    },
    placeholder: {
        position: 'absolute',
        paddingLeft: '0.5rem',
        fontSize: '1.8rem',
        lineHeight: '3rem',
        color: '#838383'
    },
    background: {
        opacity: '0'
    }
});