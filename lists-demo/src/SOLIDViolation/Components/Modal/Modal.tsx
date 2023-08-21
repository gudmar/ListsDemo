import { createPortal } from "react-dom";
import { iModal } from "../../../Types/dataTypes";
import { useStyles } from "./styles";

const Modal = ({children, isOpen, setClose}: iModal) => {

    const classes = useStyles();
    if (!isOpen) return (<></>)
    return createPortal((
        <div className={classes.wrapper} onClick={setClose}>
            <div className={classes.info} onClick={(event)=>{event.stopPropagation()}}>
                {children}
            </div>
        </div>
    ), document.getElementsByTagName('body')[0]
    )
}

export default Modal;
