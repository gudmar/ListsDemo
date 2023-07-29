import { useIconStyles } from "./styles"
import { ReactComponent as ShoppingChartImage } from './shoppingChartImage.svg'

const ShoppingChartIcon = ({...props}) => {
    const classes = useIconStyles();

    return (
        <div className={props.className} onClick={props.onClick}>
            <ShoppingChartImage className={classes.icon}/>
        </div>
    )
}

export default ShoppingChartIcon
