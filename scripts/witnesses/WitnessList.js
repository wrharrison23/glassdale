import {getWitnesses, useWitnesses} from "./WitnessProvider.js"
import {witness} from "./Witness.js"

const witnessHTML = document.querySelector("#requested-info-container")

export const WitnessList = () => {
    getWitnesses().then(() => {
        let witnesses = useWitnesses();
        let witnessHTMLString = ""
        witnesses.forEach(
            (witnessObject) => {
            witnessHTMLString += `
            ${witness(witnessObject)}
            `
        });
        witnessHTML.innerHTML = `
        <h2>Witnesses</h2>
        <section class="witness-container">
        ${witnessHTMLString}
        </section>`
    }
    )
}

document.querySelector("#witness-nav-link").addEventListener("click", () => {
    WitnessList()
})