export const criminal = (criminalObject) => {
    return `
    <section class="criminal-card">
    <h2 class="criminal-name">
    ${criminalObject.name}
    </h2>
    <p>Age: ${criminalObject.age}</p>
    <p>Crime: ${criminalObject.conviction}</p>
    <p>Term start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</p>
    <p>Term end: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}
    <div id="button-div">
    <button class="associate-button" id="associates--${criminalObject.id}" onclick="this.disabled=true">Known Associates</button>
    </div>
    <div id="associate-container-${criminalObject.id}"></div>
    </section>
    `
}