// JSnack-1
// L’utente inserisce due numeri in successione, con due prompt.
var number_1 = Number(prompt('Inserisci un numero'));
var number_2 = Number(prompt('Inserisci un altro numero'));

if(number_1 === number_2){
  console.log('Same number! try again');
} else if (number_1 > number_2) {
  console.log(number_1);
} else {
  console.log(number_2);
}

// L’utente inserisce due parole in successione, con due prompt.
//Il software stampa prima la parola più corta, poi la parola più lunga.

/* var word_1 = prompt('Inserisci una parola');
var word_2 = prompt('Inserisci una seconda parola');

if (word_1.length < word_2.length) {
    console.log(word_1, word_2);
} else if (word_2.length < word_1.length); {
    console.log(word_2, word_1);
} else (word_1.length === word_2.length) {
    console.log(word_1, word_2);
}  */

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
/*
var numbers = Number.prompt('Inserisci un numero')
var somma;

 var foo = 1;
var output = 'Output: ';
switch (foo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 5!');
    console.log(somma);
    document.getElementById('somma').innerHTML = somma;
} */

/* var number_1 = Number(prompt('Type a number'));
var sum = 0;

for(var i = 0; i < 10; i++){
    var numeroutente = Number(prompt('Type a number'));
    sum += numeroutente;
}

console.log(sum); */

//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

/* var nome = prompt("Qual è il tuo nome?"); 
var access = false;

var nomiArray = ["Ottavio", "Giuliano", "Franchino", "Michele", "Manfredi"];

for (var index = 0; index < nomiArray.length; index++) {
    if (nome == nomiArray[index]) {
        access = true;
    }
}

if (access == true) {
    document.getElementById('invito').innerHTML = "Perfetto, puoi entrare"
} else {
    document.getElementById('invito').innerHTML = "Mi spiace, non puoi entrare"

} */

// Snack 5:
//Crea un array vuoto.
//Chiedi per 6 volte all’utente di inserire un numero,
//se è dispari inseriscilo nell’array.

/* var emptyArray = [0]

for (var i = emptyArray; emptyArray < 6; emptyArray++) {
  if (emptyArray % 2 != 0) {
    var oddNumber +=
  }
}
var total = emptyArray.push() */

// JSnack 6
// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.
/* var userNumber = Number(prompt('Inserisci un numero'));
var userNumber = false;
var i;

/* 
do (userNumber) {
  i = Math.cube(userNumber)
} while (userNumber === true) */

/* for (var i = 1; i < userNumber; i++) {
  var cube = Math.cube(userNumber)
}
console.log(cube)  */

// Esercizio 8, snack 8 - blocco 1
//Chiedi un numero di 4 cifre all’utente
//e calcola la somma di tutte le cifre che compongono il numero. 

/* var value = parseInt(prompt('Inserisci un numero di quattro cifre'));
var sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum); */


