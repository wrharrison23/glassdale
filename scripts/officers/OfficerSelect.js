import {getOfficers, useOfficers} from "./OfficerProvider.js"
import {CriminalList} from "/scripts/criminals/CriminalList.js"


const contentTarget = document.querySelector("#filters__officers")

const eventHub = document.querySelector("main")

export const OfficersSelect = () => {
    getOfficers().then(() => {
        let officers = useOfficers();
        render(officers)
    
})

const render = officersCollection => {
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${
                officersCollection.map(officer => {
                    const officerName = officer.name
                    return `<option>${officerName}</option>`
                })
            }
        </select>
    `
}
}




eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Write your code here
        CriminalList(null,selectedOfficer)
    }
})