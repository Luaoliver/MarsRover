import { useContext } from "react"
import { RoverContext } from "../context/roverContext"

function Summary() {
    const { ordenates, setOrdenates } = useContext(RoverContext)

    function formatArray(array) {
        return array.join(' ')
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
                            <th>Id</th>
                            <th>Local de Pouso</th>
                            <th>Instrução</th>
                            <th>Posição final</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ordenates.map(info => (
                            <tr>
                                <td class="description">{info.id}</td>
                                <td class="description">{formatArray(info.landingPosition)}</td>
                                <td class="description">{info.instruction}</td>
                                <td class="description">{formatArray(info.finalPosition)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )

}

export default Summary