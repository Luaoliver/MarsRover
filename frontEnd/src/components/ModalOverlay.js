import { useContext, useEffect } from 'react';
import { ModalContext } from '../context/modalContext';

function ModalOverlay() {
    const { isOpen, setIsOpen } = useContext(ModalContext)
    useEffect(() => {console.log(isOpen)}, [])

    if(isOpen) {
        return(
            <div class="modal-overlay">
                <div class="modal">
                    <div id="form">
                        <h2>Adicionar novo Rover</h2>
                        <form action="">
                            <div class="input-group">
                                <label 
                                    class="sr-only" 
                                    for="description">Local de pouso x</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description"
                                    placeholder="Posição eixo x"
                                />
                            </div>

                            <div class="input-group">
                                <label 
                                    class="sr-only" 
                                    for="description">Local de pouso y</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description"
                                    placeholder="Posição eixo y"
                                />
                            </div>
    
                            <div class="input-group">
                                <label 
                                    class="sr-only" 
                                    for="description">Instrução</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description"
                                    placeholder="Instrução de movimento"
                                />
                                <small class="help">'L' - giro de 90º a esquerda. 'R' - giro de 90º a direita. 'M' move o rover em uma casa na direção em que ele aponta.</small>
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

export default ModalOverlay