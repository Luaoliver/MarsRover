import { useContext, useEffect, useState } from "react"
import { ModalContext } from "../context/modalContext"
import { PlateauContext } from "../context/plateauContext"

function ModalOverlayRestart() {
    const { isOpenRestart, setIsOpenRestart } = useContext(ModalContext)
    const { createPlateau } = useContext(PlateauContext)

    const [ xAxis, setXAxis ] = useState()
    const [ yAxis, setYAxis ] = useState()

    function handleCreatePlateau (event) {
        event.preventDefault();
        createPlateau({
            xAxis: xAxis,
	        yAxis: yAxis,
        })
    }

    if(isOpenRestart) {
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
                                    value={xAxis}
                                    onChange={(e) => setXAxis(e.target.value)}
                                />
                                <input 
                                    type="text" 
                                    id="description" 
                                    name="description"
                                    placeholder="Medida vertical"
                                    value={yAxis}
                                    onChange={(e) => setYAxis(e.target.value)}
                                />
                                <small>A medida vertical deve menor que a medida horizontal para que retorne um plateau retangular</small>
                            </div>
                            <div class="input-group actions">
                                <a 
                                onClick={() => setIsOpenRestart(false)}
                                href="/" 
                                class="back button">Voltar</a>
                                <button 
                                onClick={handleCreatePlateau}
                                type="submit">Salvar</button>
                            </div>
                        </form>
                    </div>
                </div>
    
            </div>
        )
    }
}

export default ModalOverlayRestart