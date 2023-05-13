import { useContext } from "react"
import { RoverContext } from "../context/roverContext"

function Summary() {
    const { ordenates, setOrdenates } = useContext(RoverContext)

    function formatArray(array) {
        if(array !== undefined) {
            return array.join(' ')
        }
    }

    return(
        <section id="summary">
            <div class="card total">
                <h3>
                    <span>
                        Resumo
                    </span>
                </h3>
                <table id="data-table">
                    <thead>
                        <tr>
                            <th>Plateau de referência</th>
                            <th>Local de Pouso da rover</th>
                            <th>Instrução</th>
                            <th>Posição final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordenates.map(info => (
                            <tr>
                                <td class="description">{info.plateauId}</td>
                                <td class="description">{formatArray(info.landingPosition)}</td>
                                <td class="description">{info.instruction}</td>
                                <td class="description">{formatArray(info.currentPosition)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )

}

export default Summary