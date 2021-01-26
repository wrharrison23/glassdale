let crimes = []

export const useConvictions = () => convictions.slice()

export const getConvictions = () => {
    return fetch("https://criminals.glassdale.us/crimes")
    .then(response => response.json())
    .then(
        parsedCrimes => {
            console.table(parsedCrimes)
            crimes = parsedCrimes
        }
    )
}

getConvictions()