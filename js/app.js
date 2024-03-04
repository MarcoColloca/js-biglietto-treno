console.log("JS Trial")

//// Passi da eseguire
/// Creare una costante che corrisponda ad un Prompt in cui venga richiesta la distanza percorsa al passeggero.
/// Creare una costante che corrisponda ad un Prompt in cui venga richiesta l'età al passeggero.
/// Definire una costante con il prezzo per km percorso.
/// Definire una costante con il prezzo totale in base ai dati in possesso.
/// Creare le variabili del biglietto in base all'età seguendo 3 passaggi:
///   1• Se l'età è minore di 18 ridurre il prezzo all' 80%.
///   2• Se l'età è superiore a 65 ridurre il prezzo al 60%.
///   3• Se l'età non corrisponde alle variabili su scritte, ripotrare un prezzo normale.
/// Stampare i prezzi per ogni variabile.
/// Fare in modo che i prezzi stampati non superino le due cifre decimali. 


let distance;
while(isNaN(distance)) {
    distance = parseFloat(prompt("inserisci i km che devi percorrere")); //Number
}

let age;
while (isNaN(age=parseFloat(prompt("Inserisci la tua età")))); //Number

// console.log("Distanza Percorsa " + distance)
// console.log("Età Passeggero " + age)

let price = 0.21; //Number
let totalPrice = price * distance; //Number

// console.log(totalPrice + "€"); //Number + String


if (age < 18){

    let discount = totalPrice * 0.2; //Number
    totalPrice = totalPrice - discount; //Number

} else if (age > 65){

    let discount = totalPrice * 0.4 //Number
    totalPrice = totalPrice - discount; //Number

} 

console.log(totalPrice.toFixed(2) + " €") //String