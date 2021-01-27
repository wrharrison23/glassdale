import { CriminalList } from "/scripts/criminals/CriminalList.js"
import { useConvictions, getConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector("#filters__crime")

export const ConvictionSelect = () => {
    getConvictions().then(() => {
        let convictions = useConvictions();
        render(convictions)
    
})

const render = convictionsCollection => {
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(conviction => {
                    const crimeName = conviction.name
                    return `<option>${crimeName}</option>`
                })
            }
        </select>
    `
}
}

// This won't throw an error, but it will fire any time there's a change event anywhere in the main container
const eventHub = document.querySelector("main")

eventHub.addEventListener("change", (eventObject) => {
    // console.log("You clicked somewhere in the main container")

    // To be more specific, we need to know specifically what we clicked on
    // console.log("Here is the element you clicked on: ", eventObject.target)

    if(event.target.id === "crimeSelect"){
        // console.log("You selected something from the crime dropdown")
        // console.log("This is the crime that was selected: ", eventObject.target.value)
        
        CriminalList(eventObject.target.value,null)
    }
})