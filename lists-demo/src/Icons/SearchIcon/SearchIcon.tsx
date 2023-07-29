import { useIconStyles } from "./styles"
import { ReactComponent as SearchIconImage } from './SearchIconImage.svg'

const SearchIcon = ({...props}) => {
    const classes = useIconStyles();

    return (
        <div className={props.className} onClick={props.onClick}>
            <SearchIconImage className={classes.icon}/>
        </div>
    )
}

export default SearchIcon
