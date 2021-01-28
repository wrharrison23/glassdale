export const note = (noteObject) => {
  return `
  <section class="card text-center border-secondary mb-3 h-100" style="width: 18rem">
   <div class="card-body">
   <p class="card-text">Date: ${noteObject.date}</p>
   <p class="card-text">Suspect: ${noteObject.suspect}</p> 
   <p class="card-text">Note: ${noteObject.noteText}</p>
  `;
}