let counter = 0
let result = document.getElementById("count-el")
let savedResults = document.getElementById("saved-results")






function increment() {
    counter += 1
    result.textContent = counter
    if (counter < 0) {
        zeroSetter()
    }
}


function decrement() {
    counter -= 1
    result.textContent = counter
    if (counter < 0) {
        zeroSetter()

    }
}


function save() {
    let countString = counter + " - "
    savedResults.textContent += countString
    zeroSetter()

}



function zeroSetter() {
    result.textContent = 0
    counter = 0
}