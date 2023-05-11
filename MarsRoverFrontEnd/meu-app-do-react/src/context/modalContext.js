import { createContext, useState } from 'react';

export const ModalContext = createContext({})
export function ModalProvider(props) {
    const [ isOpen, setIsOpen ] = useState(false);

    return(
        <ModalContext.Provider value={{ isOpen, setIsOpen }}>
            {props.children}
        </ModalContext.Provider>
    )
}