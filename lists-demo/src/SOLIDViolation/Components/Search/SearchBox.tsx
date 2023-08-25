import { forwardRef, useState, useRef, useImperativeHandle} from "react";
import { useSearchStyles } from "./styles";
import SearchIcon from '../../../Icons/SearchIcon'

const INITIAL_VALUE = '';

const SearchBox = forwardRef( ({
    placeholder,
    onPatternChange
}: any, ref) => {
    const classes = useSearchStyles();
    const [value, setValue] = useState(INITIAL_VALUE)
    const [isEditMode, setIsEditMode] = useState(false);
    const inputBox = useRef(null);
    useImperativeHandle(ref, () => {
        return {
            reset() {setValue(INITIAL_VALUE)},
            getPattern() {return value},
        }
    })
    return(
        <div className = {classes.wrapper}>
            <div className={classes.icon}>
                <SearchIcon />
            </div>
            <div>
                <div
                    className={`${classes.placeholder} ${isEditMode ? classes.background : ''}`}
                    onClick={() => {
                        setIsEditMode(true);
                        const inputElement: any = inputBox.current
                        if (inputBox?.current) inputElement!.focus();
                    }}
                >Search</div>
                <div
                    ref={inputBox}
                    className={classes.inputBox}
                    contentEditable={true}
                    onFocus={() => setIsEditMode(true)}
                    onBlur={() => {if (value === '') setIsEditMode(false)}}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                        onPatternChange(event.target.innerText);
                        setValue(event.target.innerText)
                    }}
                ></div>
            </div>
        </div>
    )
})

export default SearchBox;
