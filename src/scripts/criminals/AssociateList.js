
let associate = []

export const useAssociate = () => associate.slice()

export const getAssociate = (criminalID) => {
    return fetch(`https://criminals.glassdale.us/criminals/${criminalID}`)
        .then(response => response.json())
        .then(
            parsedAssociate => {
                
                associate = parsedAssociate.known_associates
            }
        )
}



const associateList = (id) => {
    getAssociate(id).then(() => {
        const associateHTML = document.querySelector(`#associate-container-${id}`)
        let associates = useAssociate()
        
        
        associates.forEach((associate) => {
            
        associateHTML.innerHTML += `
        <section class="associate">
        <p>Name: ${associate.name}</p>
        <p>Alibi: ${associate.alibi}</p>
        </section>`
        }
)
    
}
    )
}

const eventHub = document.querySelector("main")
eventHub.addEventListener("click", function() {
    if(event.target.classList.contains("associate-button")) {
    let id = event.target.id.slice(12)
    associateList(id)
  }
})
