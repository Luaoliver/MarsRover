function ModalOverlay() {
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
                                name="description"
                                placeholder="Posição eixo x"
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
                                name="description"
                                placeholder="Instrução de movimento"
                            />
                            <small class="help">Lembre-se que: você só pode adicionar comandos 'L', 'R' e 'M'. 'L' significa um giro de 90º a esquerda, 'R' gira em 90º a direita e 'M' move o rover em uma casa na direção em que ele aponta.</small>
                        </div>

                        <div class="input-group actions">
                            <a 
                            onclick="Modal.close()"
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

export default ModalOverlay