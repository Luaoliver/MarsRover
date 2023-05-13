import { useContext, useEffect } from 'react';
import { ModalContext } from '../context/modalContext';
import api from '../api';

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
                                    for="description">Local de pouso</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="start_position_x"
                                    placeholder="Posição eixo x"
                                    value={api.start_position_x}
                                />
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="start_position_y"
                                    placeholder="Posição eixo y"
                                    value={api.start_position_y}
                                />
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="start_direction"
                                    placeholder="Direção"
                                    value={api.start_direction}
                                />
                                <small class="help">A posição no eixo y, por padrão é assumida como 0.</small>
                            </div>
    
                            <div class="input-group">
                                <label 
                                    class="sr-only" 
                                    for="description">Instrução</label>
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="instruction"
                                    placeholder="Instrução de movimento"
                                    value={api.instruction}
                                />
                                <small class="help">Lembre-se que: você só pode adicionar comandos 'L', 'R' e 'M'. 'L' significa um giro de 90º a esquerda, 'R' gira em 90º a direita e 'M' move o rover em uma casa na direção em que ele aponta.</small>
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