import { useIconStyles } from "./styles"
import { ReactComponent as AddImage } from './AddImage.svg'

const AddIcon = ({...props}) => {
    const classes = useIconStyles();

    return (
        <div className={props.className} onClick={props.onClick}>
            <AddImage className={classes.icon}/>
        </div>
    )
}

export default AddIcon
