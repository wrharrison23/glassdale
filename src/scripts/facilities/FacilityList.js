import { getFacilities, useFacilities } from './FacilityProvider.js'
import {facility} from "./Facility.js"

const facilityHTML = document.querySelector("#requested-info-container")

export const FacilityList = () => {
    getFacilities().then(() => {
        let facilities = useFacilities();
        let facilityHTMLString = ""
        facilities.forEach(
            (facilityObject) => {
            facilityHTMLString += facility(facilityObject)
        });
        facilityHTML.innerHTML = `
        <h2>Facilities</h2>
        <section class="facility-container">
        ${facilityHTMLString}
        </section>`
    })
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    FacilityList()
})