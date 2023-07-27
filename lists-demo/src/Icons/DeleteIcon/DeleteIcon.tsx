import { useListStyles } from "./styles"
import { ReactComponent as DeleteIconImage } from './DeleteIconImage.svg'

const DeleteIcon = ({...props}) => {
    const classes = useListStyles();

    return (
        <div className={props.className} onClick={props.onClick}>
            <DeleteIconImage className={classes.icon}/>
        </div>
    )
}

export default DeleteIcon
