import { getOfficers, useOfficers } from './OfficerProvider.js'
import {officer} from "./Officer.js"

const officerHTML = document.querySelector("#requested-info-container")

export const OfficerList = () => {
    getOfficers().then(() => {
        let officers = useOfficers();
        let officerHTMLString = ""
        officers.forEach(
            (officerObject) => {
            officerHTMLString += `
            ${officer(officerObject)}
            `
        });
        officerHTML.innerHTML = `
        <h2>Officers</h2>
        <section class="officer-container">
        ${officerHTMLString}
        </section>`
    }
    )
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    OfficerList()
})