export const Criminal = (criminalObject, facilities) => {
  return `
    <div class="criminal card text-center">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(
                  criminalObject.incarceration.start
                ).toLocaleDateString()} and
                ${new Date(
                  criminalObject.incarceration.end
                ).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div class="text-center">
                <h3>Facilities</h3>
                <ul class="text-center">
                    ${facilities
                      .map((f) => `<li>${f.facilityName}</li>`)
                      .join("")}
                </ul>
            </div>
            <button class="associate-button" id="associates--${
              criminalObject.id
            }">Show Associates</button>
        </div>
        <div id="associate-container-${criminalObject.id}"></div>
    </div>
    `;
};
