let counter = 0
let result = document.getElementById("count-el")


function increment() {
    counter = counter + 1
    result.innerHTML = counter
    if (counter < 0) {
        result.innerHTML = 0
        counter = 0
    }
}


function decrement() {
    counter = counter - 1
    result.innerHTML = counter
    if (counter < 0) {
        result.innerHTML = 0
        counter = 0

    }
}


function save() {
    console.log(counter)
}

