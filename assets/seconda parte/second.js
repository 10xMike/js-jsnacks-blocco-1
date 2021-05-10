// 1a. Creare un oggetto palla che abbia le seguenti proprietà

var Palla = {
    nome: "palla",
    peso: 10,
}

// 1b. Attraverso un prompt dare la possibilità all'utente di modificare il peso della palla

Palla.peso =  parseInt(prompt('Modifica il peso della palla'));

// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza
// Calcolare perimetro e area

var Triangolo = {
    base: 20,
    altezza: 30,
}

var perimetro = Triangolo.base + Triangolo.altezza + Triangolo.altezza;
console.log(perimetro);
var area = ((Triangolo.base * Triangolo.altezza)/2);
console.log(area);