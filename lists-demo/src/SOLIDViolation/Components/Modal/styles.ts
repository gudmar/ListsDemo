import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
    wrapper: {
        position: 'fixed',
        display: 'inline-block',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#88888888',
        top: '0',
        zIndex: '1000',
    },
    info: {
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '70%',
        height: '70%',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        opacity: '1',
        zIndex: '1100',
        borderRadius: '1rem',
    }
});
