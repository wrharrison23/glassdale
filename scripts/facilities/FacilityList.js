import { getFacilities, useFacilities } from './FacilityProvider.js'
import {facility} from "./Facility.js"

const facilityHTML = document.querySelector("#facility-container")

export const FacilityList = () => {
    getFacilities().then(() => {
        let facilities = useFacilities();
        facilities.forEach(
            (facilityObject) => {
            facilityHTML.innerHTML += facility(facilityObject)
        });
    })
}

document.querySelector("#facilities-nav-link").addEventListener("click", () => {
    FacilityList()
})