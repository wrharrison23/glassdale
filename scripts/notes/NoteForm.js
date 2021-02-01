import { saveNote } from "./NoteProvider.js";

const contentTarget = document.querySelector(".noteFormContainer");

export const NoteForm = () => {
  contentTarget.innerHTML = `
        <label for="note-text">Note:</label>
        <input type="text" id="note-text" label="Note">
        <label for="date">Date:</label>
        <input type="text" id="date">
        <label for="suspect">Suspect Name:</label>
        <input type="text" id="suspect">
        <button id="saveNote">Save Note</button>
    `;
};

const eventHub = document.querySelector("main");

eventHub.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === "saveNote") {
    let noteInput = document.getElementById("note-text").value;
    let dateInput = document.getElementById("date").value;
    let suspectInput = document.getElementById("suspect").value;
    // Make a new object representation of a note
    const newNote = {
      noteText: noteInput,
      date: dateInput,
      suspect: suspectInput,
    };

    // Change API state and application state

    saveNote(newNote).then(NoteList); // Refresh your list of notes once you've saved your new one
  }
});

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  NoteForm();
});