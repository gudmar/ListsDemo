import { forwardRef, useState, useRef, useImperativeHandle } from "react";
import SearchIcon from "../../../../Icons/SearchIcon";
import { useSearchStyles } from "./styles";


const INITIAL_VALUE = '';

const SearchBox =({
    placeholder,
    onPatternChange
}: any)=> {
    const classes = useSearchStyles();
    const [value, setValue] = useState(INITIAL_VALUE)
    const [isEditMode, setIsEditMode] = useState(false);
    const inputBox = useRef(null);
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
}

export default SearchBox;
