let counter = 0
let result = document.getElementById("count-el")
let savedResults = document.getElementById("saved-results")





function increment() {
    counter += 1
    result.textContent = counter
    if (counter < 0) {
        result.textContent = 0
        counter = 0
    }
}


function decrement() {
    counter -= 1
    result.textContent = counter
    if (counter < 0) {
        result.textContent = 0
        counter = 0

    }
}


function save() {
    let countString = counter + " - "

    savedResults.textContent += countString



}

