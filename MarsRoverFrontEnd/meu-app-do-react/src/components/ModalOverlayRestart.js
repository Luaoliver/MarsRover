import { useContext, useEffect } from "react"
import { ModalContext } from "../context/modalContext"

function ModalOverlayRestart() {
    const { isOpen, setIsOpen } = useContext(ModalContext)

    if(isOpen) {
        return(
            <div class="modal-overlayRestart">
                <div class="modal">
                    <div id="form">
                        <h2>Resetar platô</h2>
                        <form action="">
                            <div class="input-group">
                                <label 
                                    class="sr-only" 
                                    for="description">Tamanho do platô</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description"
                                    placeholder="Medida horizontal"
                                />
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description"
                                    placeholder="Medida vertical"
                                />
                            </div>
                            <div class="input-group actions">
                                <a 
                                onClick={() => setIsOpen(false)}
                                href="#" 
                                class="button cancel">Cancelar</a>
                                <button>Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default ModalOverlayRestart