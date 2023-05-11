import { ModalContext } from "../context/modalContext"
import { useContext } from "react"

function RoverButton() {
    const { isOpen, setIsOpen } = useContext(ModalContext)

    return(
        <div class="card">
            <a href="#"
            onClick={() => setIsOpen(true)}
            class="button new">+ Adicionar Novo Rover</a>
        </div>
    )
}

export default RoverButton