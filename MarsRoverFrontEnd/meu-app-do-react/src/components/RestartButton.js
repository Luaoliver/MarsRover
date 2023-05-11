import { ModalContext } from "../context/modalContext"
import { useContext } from "react"

function RestartButton() {
    const { isOpen, setIsOpen } = useContext(ModalContext)

    return(
        <div class="card">
            <a href="#" 
            onClick={() => setIsOpen(true)}
            class="button new">Reiniciar Platô</a>
        </div>
    )
}

export default RestartButton