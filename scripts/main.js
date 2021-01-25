
import { CriminalList } from "./criminals/CriminalList.js"
import { FacilityList } from "./facilities/FacilityList.js"
import { OfficerList } from "./officers/OfficerList.js"

// CriminalList()
// OfficerList()
// FacilityList()

const darkModeButton = document.querySelector("#dark-mode")
darkModeButton.addEventListener("click", function(){
    // Select the entire body tag
    const bodyElement = document.querySelector("body")
  
    // Add a class
    bodyElement.classList.toggle("dark-background")
  })