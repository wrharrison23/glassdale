export const witness = (witnessObject) => {
    return `
    <section class="card text-center border-secondary mb-3 h-100" style="width: 18rem;>
    <h3 class="witness-name">
    ${witnessObject.name}
    </h3>
    <p>${witnessObject.statements}</p>
    </section>
    `;
}