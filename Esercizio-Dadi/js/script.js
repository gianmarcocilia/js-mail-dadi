/* Genero il numero randomico del giocatore
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber);

// Genero il numero randomico del computer
const cpuNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);*/


const btnStart = document.querySelector("button")

let message = ""
// Controllo dei numeri
btnStart.addEventListener("click", function () {
    const userNumber = Math.floor(Math.random() * 6) + 1;
    const cpuNumber = Math.floor(Math.random() * 6) + 1;
if (userNumber === cpuNumber) {
    message = "Pareggio!"
} else if (userNumber > cpuNumber) {
    message = "Hai Vinto!"
} else {
    message = "Hai Perso!"
}
console.log(`Il tuo numero è: ${userNumber}`);
console.log(`Il numero della cpu è: ${cpuNumber}`);
console.log(message);
})
