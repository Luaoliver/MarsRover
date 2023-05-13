import RoverButton from "./RoverButton"
import RestartButton from "./RestartButton"
import Summary from "./Summar"
import { Link } from "react-router-dom"

function Main() {
    return(
        <main class="container">
            <section id="start">
                <Link to ='/rover'>
                    <RoverButton />
                </Link>
                <Link to='/plateau'>
                    <RestartButton />
                </Link>
            </section>
            <Summary />
        </main>
    )
}

export default Main