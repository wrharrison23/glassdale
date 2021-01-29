import {getNotes, useNotes} from "./NoteProvider.js"
import {note} from "./Note.js"
const noteHTML = document.querySelector("#requested-info-container");

export const NoteList = () => {
  getNotes().then(() => {
    let notes = useNotes()
    let noteHTMLString = ""
    notes.forEach(
      (noteObject) => noteHTMLString += note(noteObject)
    )
  noteHTML.innerHTML = `<section class="note-container">${noteHTMLString}</section>`;
  }
  )
  
}

document.querySelector("#notes-nav-link").addEventListener("click", () => {
  NoteList();
});