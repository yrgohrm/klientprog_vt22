let userInput = prompt("Skriv in antal paragrafer!")
let numPs = Number(userInput)

if (numPs > 10) {
    numPs = 10
}

if (isNaN(numPs)) {
    alert("Skriv rätt...")
}

for (let i = 0; i < numPs; ++i) {
    let p = document.createElement('p')
    p.innerText = "Lite text"
    document.body.appendChild(p)
}
