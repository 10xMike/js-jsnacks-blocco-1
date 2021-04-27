


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

var nome = prompt("Qual è il tuo nome?"); 
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

}
