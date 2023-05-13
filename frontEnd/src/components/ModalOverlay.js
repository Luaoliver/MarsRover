import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../context/modalContext';
import api from '../api';
import { RoverContext } from '../context/roverContext';

function ModalOverlay() {
    const { isOpen, setIsOpen } = useContext(ModalContext)
    const { createRover } = useContext(RoverContext)

    const [ positionX, setPositionX ] = useState()
    const [ positionY, setPositionY ] = useState()
    const [ direction, setDirection ] = useState()
    const [ instruction, setInstruction ] = useState()

    function handleCreateRover (event) {
        event.preventDefault();
        createRover({
            startPositionX: positionX,
	        startPositionY: positionY,
	        instruction: instruction,
	        startDirection: direction
        })
    }

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
                                    value={positionX}
                                    onChange={(e) => setPositionX(e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="start_position_y"
                                    placeholder="Posição eixo y"
                                    value={positionY}
                                    onChange={(e) => setPositionY(e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="start_direction"
                                    placeholder="Direção"
                                    value={direction}
                                    onChange={(e) => setDirection(e.target.value)}

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
                                    value={instruction}
                                    onChange={(e) => setInstruction(e.target.value)}

                                />
                                <small class="help">Lembre-se que: você só pode adicionar comandos 'L', 'R' e 'M'. 'L' significa um giro de 90º a esquerda, 'R' gira em 90º a direita e 'M' move o rover em uma casa na direção em que ele aponta.</small>
                            </div>
    
                            <div class="input-group actions">
                                <a 
                                onClick={() => setIsOpen(false)}
                                href="/" 
                                class="back button">Voltar</a>
                                <button onClick={handleCreateRover} type='submit'>Salvar</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

export default ModalOverlay