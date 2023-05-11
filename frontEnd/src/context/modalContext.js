import { createContext, useState } from 'react';

export const ModalContext = createContext({})
export function ModalProvider(props) {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isOpenRestart, setIsOpenRestart ] = useState(false);

    return(
        <ModalContext.Provider value={{ isOpen, setIsOpen, isOpenRestart, setIsOpenRestart }}>
            {props.children}
        </ModalContext.Provider>
    )
}