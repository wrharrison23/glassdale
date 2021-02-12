export const facility = (facilityObject) => {
    return `
    <section class="card text-center border-secondary mb-3 align-middle" style="width: 20rem;>
    <h3 class="facility-name">
    ${facilityObject.facilityName}
    </h3>
    </section>
    `;
}