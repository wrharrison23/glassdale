import {getNotes, useNotes} from "./NoteProvider.js"
import {note} from "./Note.js"
const noteHTML = document.querySelector(".noteContainer");

export const NoteList = () => {
  getNotes().then(() => {
    let notes = useNotes()
    notes.forEach(
      (noteObject) => noteHTML.innerHTML = note(noteObject)
    )
  }
  )
}