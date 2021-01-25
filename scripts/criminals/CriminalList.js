import { getCriminals, useCriminals } from './CriminalProvider.js'
import {criminal} from "./Criminal.js"

const criminalHTML = document.querySelector("#criminal-container")

export const CriminalList = () => {
    getCriminals().then(() => {
        let criminals = useCriminals();
        criminals.forEach(
            (criminalObject) => {
            criminalHTML.innerHTML += criminal(criminalObject)
        });
    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})