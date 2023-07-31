import { createUseStyles } from "react-jss";

const TABLE_BG = '#dedede';

export const useStyles = createUseStyles({
    headline: {
        fontWeight: 'bold',
        fontSize: '2rem',
        margin: '2rem 0 2rem 0',
        textAlign: 'center',
        width: '100%',
        marginTop: '2rem'
    },
    thumbnail: {
        width: '16rem'
    },

    tableContainer: {
        width: '100%',
        height: '100%',
        overflow: 'hidden',
    },
    th: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'black',
        display: 'inline-block',
        border: '0.125rem solid white',
    },
    tableHead: {
        display: 'grid',
        gridTemplateColumns: '1fr 4fr 4fr 1fr'
    },
    tableBody: {
        display: 'grid',
        height: '70%',
        gridTemplateColumns: '1fr 4fr 4fr 1fr',
        overflow: 'auto',
        width: '100.5%'

    },
    tableRow: {
        width: '100%'
    },
    td: {
        // display: 'inline-block',
        border: '0.125rem solid white',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        color: '#555555',
        '&:nth-child(8n+5)': {
            backgroundColor: TABLE_BG
        },
        '&:nth-child(8n+6)': {
            backgroundColor: TABLE_BG
        },

        '&:nth-child(8n+7)': {
            backgroundColor: TABLE_BG
        },
        '&:nth-child(8n+8)': {
            backgroundColor: TABLE_BG
        },
        '&:nth-child(4n+2)': {
            fontWeight: 'bold',
            
        },



    }

});
