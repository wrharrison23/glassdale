export const note = (noteObject) => {
  return `
  <section class="card text-center border-secondary mb-3 h-100 note-card" style="width: 18rem">
   <div class="card-body">
   <p class="card-text"><strong>Date:</strong> ${noteObject.date}</p>
   <p class="card-text"><strong>Suspect ID:</strong> ${noteObject.suspectID}</p> 
   <p class="card-text"><strong>Note:</strong> ${noteObject.noteText}</p>
   </section>
  `;
}
