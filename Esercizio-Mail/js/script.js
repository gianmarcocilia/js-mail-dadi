// Lista di mail approvate
const mailApproved = ["pippo@mail.com", "paperino@mail.com", "pluto@mail.com"];
console.log(mailApproved);
// Richiesta della mail utente
const userMail = prompt("Scrivi qui la tua mail:");
console.log(userMail);
// Controllo la mail con le altre della lista 
let access = false;

for (let i = 0; i < mailApproved.length; i++) {
    if (userMail === mailApproved[i]) {
        access = true;
    }
}
// Preparo i 2 messaggi
let message = ""
if (access) {
    message = `<h1>Accesso consentito per <span class="green">${userMail}</span></h1> :)`
} else {
    message = `<h1>Accesso negato per <span class="red">${userMail}</span></h1> :(`
}
// OUTPUT
console.log(message);

document.querySelector(".div").innerHTML = message;