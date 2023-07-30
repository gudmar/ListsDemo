import { useState } from "react";
import { tChildren } from "../Types/types";
import Modal from '../Components/Modal/Modal'

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