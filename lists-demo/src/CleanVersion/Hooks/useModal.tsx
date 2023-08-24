import { useState } from "react";
import { tChildren } from "../../Types/dataTypes";
import Modal from "../Components/ListsFinal/Modal/Modal";

export const useModal = (children: tChildren) => {
    const [isOpen, setIsOpen] = useState(false);
    const modal = (
        <Modal
            children={children}
            isOpen={isOpen}
            setClose={() => setIsOpen(false)}
        />
    );
    return ({
        open: (() => { console.log('open model'); setIsOpen(true)}),
        modal
    })
}