import {getAssociate} from "./criminals/AssociateList.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { FacilityList } from "./facilities/FacilityList.js"
import { OfficerList } from "./officers/OfficerList.js"
import {ConvictionSelect} from "./convictions/ConvictionSelect.js"
import {WitnessList} from "./witnesses/WitnessList.js"
import { OfficersSelect } from "./officers/OfficerSelect.js"

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

  ConvictionSelect()
  OfficersSelect()

