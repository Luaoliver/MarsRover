import RoverButton from "./RoverButton"
import RestartButton from "./RestartButton"
import Summary from "./Summar"

function Main() {
    return(
        <main class="container">
            <section id="start">
                <RoverButton />
                <RestartButton />
            </section>
            <Summary />
        </main>
    )
}

export default Main