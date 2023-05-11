import { ModalContext } from "../context/modalContext"
import { useContext } from "react"

function RestartButton() {
    const { isOpenRestart, setIsOpenRestart } = useContext(ModalContext)

    return(
        <div class="card">
            <a href="#" 
            onClick={() => setIsOpenRestart(true)}
            class="button new">Reiniciar Platô</a>
        </div>
    )
}

export default RestartButton