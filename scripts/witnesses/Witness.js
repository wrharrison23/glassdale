export const witness = (witnessObject) => {
    return `
    <section class="witness-card">
    <h3 class="witness-name">
    ${witnessObject.name}
    </h3>
    <p>${witnessObject.statements}</p>
    </section>
    `
}