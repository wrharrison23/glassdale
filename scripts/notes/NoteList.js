import {getNotes, useNotes} from "./NoteProvider.js"
import {getCriminals, useCriminals} from "../criminals/CriminalProvider.js"
const contentTarget = document.querySelector("#requested-info-container");

const render = (noteCollection, criminalCollection) => {
  contentTarget.innerHTML = noteCollection.map((note) => {
    // Find the related criminal
    let relatedCriminal = criminalCollection.find(
      (criminal) => criminal.id == note.criminalId
    );

    return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `;
  });
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
}); 