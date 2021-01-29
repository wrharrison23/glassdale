export const criminal = (criminalObject) => {
    return `
    <section class="card text-center border-secondary mb-3 h-100" style="width: 18rem;>
    <div class="card-body">
    <h4 class="criminal-name">
    ${criminalObject.name}
    </h4>
    <p class="card-text"><strong>Age:</strong> ${criminalObject.age}</p>
    <p class="card-text"><strong>Crime:</strong> ${
      criminalObject.conviction
    }</p>
    <p class="card-text"><strong>Term start:</strong> ${new Date(
      criminalObject.incarceration.start
    ).toLocaleDateString("en-US")}</p>
    <p class="card-text"><strong>Term end:</strong> ${new Date(
      criminalObject.incarceration.end
    ).toLocaleDateString("en-US")}
    <div id="button-div">
    <button class="associate-button" id="associates--${
      criminalObject.id
    }" onclick="this.disabled=true">Known Associates</button>
    </div>
    <div id="associate-container-${criminalObject.id}"></div>
    </div>
    </section>
    `;
} 