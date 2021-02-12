import { getCriminals, useCriminals } from './CriminalProvider.js'
import {criminal} from "./Criminal.js"

const criminalHTML = document.querySelector("#requested-info-container")

export const CriminalList = (convictionFilter,officerFilter) => {
    getCriminals().then(() => {
        let criminals = useCriminals();
        let criminalHTMLString = ""
        
        if(convictionFilter){
            criminals = criminals.filter(currentCriminal => {
                return currentCriminal.conviction === convictionFilter
            })
        } else if(officerFilter){
            criminals = criminals.filter(currentCriminal => {
                return currentCriminal.arrestingOfficer === officerFilter
            })
        } 
            criminals.forEach(
                (criminalObject) => {
                criminalHTMLString += criminal(criminalObject)
            })
        
        
       ;
        criminalHTML.innerHTML = `
        <h2>Criminals</h2>
        <section class= "criminal-list">
        ${criminalHTMLString}
        </section>`;
    })
}

document.querySelector("#criminals-nav-link").addEventListener("click", () => {
    CriminalList()
})