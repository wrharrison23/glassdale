import { getOfficers, useOfficers } from './OfficerProvider.js'
import {officer} from "./Officer.js"

const officerHTML = document.querySelector("#officer-container")

export const OfficerList = () => {
    getOfficers().then(() => {
        let officers = useOfficers();
        officers.forEach(
            (officerObject) => {
            officerHTML.innerHTML += officer(officerObject)
        });
    })
}

document.querySelector("#officers-nav-link").addEventListener("click", () => {
    OfficerList()
})