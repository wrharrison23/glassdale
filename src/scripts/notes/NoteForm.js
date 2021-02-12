import { saveNote } from "./NoteProvider.js";
import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"
import {NoteList} from "./NoteList.js"
const contentTarget = document.querySelector(".noteFormContainer");

export const NoteForm = () => {
  getCriminals()
  .then(() => {
    let criminals = useCriminals();
    contentTarget.innerHTML = `
        <label for="note-text">Note:</label>
        <input type="text" id="note-text" label="Note">
         <label for="suspect">Suspect:</label>
        <select id="noteForm--criminal" class="criminalSelect">
        ${criminalOptions(criminals)}
        </select>
        <button id="saveNote">Save Note</button>
    `;

  })
  
};

const eventHub = document.querySelector("main");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    let noteInput = document.getElementById("note-text");
    let suspectInput = document.getElementById("noteForm--criminal");
    // Make a new object representation of a note
    const newNote = {
      noteText: noteInput.value,
      criminalId: suspectInput.value,
    };

    // Change API state and application state

    saveNote(newNote).then(NoteList); // Refresh your list of notes once you've saved your new one
  }
});

// document.querySelector("#notes-nav-link").addEventListener("click", () => {
//   NoteForm();
// });

const criminalOptions = (criminalArray) => {
  
    let optionString = criminalArray.map(
      (criminal) => `<option value="${criminal.id}">${criminal.name}</option>`
      
    );
    return optionString.join("")
  }