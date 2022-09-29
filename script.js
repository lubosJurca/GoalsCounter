let counter = 0


function increment() {
    counter = counter + 1
    console.log(counter)
    document.getElementById("count-el").innerHTML = counter
}


function decrement() {
    counter = counter - 1
    document.getElementById("count-el").innerHTML = counter
}


// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function summary(a, b, c) {
//     return sum = a + b + c
// }

// console.log(summary(lap1, lap2, lap3))

    // let lapsCompleted = 0

    // function increment() {
    //     lapsCompleted = lapsCompleted + 1
    //     console.log(lapsCompleted)
    // }

    // increment()
    // increment()