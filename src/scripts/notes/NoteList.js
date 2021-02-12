import {getNotes, useNotes, deleteNote} from "./NoteProvider.js"
import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"
import { NoteForm } from "./NoteForm.js";
const contentTarget = document.querySelector(".noteContainer");

const render = (noteCollection, criminalCollection) => {
  contentTarget.innerHTML = noteCollection.map((note) => {
    // Find the related criminal
    let relatedCriminal = criminalCollection.find(
      (criminal) => criminal.id === +note.criminalId
    );

    return `
            
              <div class="card col-sm-3">
                <h5>Note about ${relatedCriminal.name}</h5>
                <p class="card-text">${note.noteText}</p>
                <a href="#" class="btn btn-primary btn-sm" id="deleteNote-${note.id}">Delete</a>
              </div>
            
        `;
  }
  ).join("");
};

export const NoteList = () => {
  getNotes()
    .then(getCriminals)
    .then(() => {
      const notes = useNotes();
      const criminals = useCriminals();
      render(notes, criminals);
    });
};

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  NoteList();
  NoteForm()
}); 

const eventHub = document.querySelector(".noteContainer");

eventHub.addEventListener("click", (e) => {
  if (e.target.id.startsWith("deleteNote")) {
    const idToDelete = e.target.id.slice(11);
    deleteNote(idToDelete)
    getNotes().then(NoteList)
    
  }
});