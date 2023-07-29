import { useIconStyles } from "./styles"
import { ReactComponent as RemoveShoppingChartImage } from './RemoveShoppingChartImage.svg'

const RemoveShoppingChartIcon = ({...props}) => {
    const classes = useIconStyles();

    return (
        <div className={props.className} onClick={props.onClick}>
            <RemoveShoppingChartImage className={classes.icon}/>
        </div>
    )
}

export default RemoveShoppingChartIcon
