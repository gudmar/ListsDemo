import { useState } from "react";
import { tChildren } from "../../Types/dataTypes";
import Modal from '../Components/Modal/Modal'

// GOOD EXAMPLE
// SRP:
// Feature agnostic thanks to children usage,
// passes only open function and modal component
// No one will want to change this

// OCP:
// NO need to change this component

// LSP:
// children used, type agnostic

// ISP:
// Everything is used

// DIP:
// children prop

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
        open: (() => { setIsOpen(true)}),
        modal
    })
}