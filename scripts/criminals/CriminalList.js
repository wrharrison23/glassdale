import { getCriminals, useCriminals } from './CriminalProvider.js'
import {criminal} from "./Criminal.js"

const criminalHTML = document.querySelector("#requested-info-container")

export const CriminalList = () => {
    getCriminals().then(() => {
        let criminals = useCriminals();
        let criminalHTMLString = ""
        criminals.forEach(
            (criminalObject) => {
            criminalHTMLString += criminal(criminalObject)
        });
        criminalHTML.innerHTML = `
        <h2 class="criminal-head">Criminals</h2>
        <section class= "criminal-list">
        ${criminalHTMLString}
        </section>`
    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})