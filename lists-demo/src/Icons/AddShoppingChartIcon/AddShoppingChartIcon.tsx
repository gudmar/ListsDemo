import { useIconStyles } from "./styles"
import { ReactComponent as AddShoppingChartImage } from './AddShoppingChartImage.svg'

const AddShoppingChartIcon = ({...props}) => {
    const classes = useIconStyles();

    return (
        <div className={props.className} onClick={props.onClick}>
            <AddShoppingChartImage className={classes.icon}/>
        </div>
    )
}

export default AddShoppingChartIcon
