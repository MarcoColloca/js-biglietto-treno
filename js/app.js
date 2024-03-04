console.log("JS Trial")





const distance = parseFloat(prompt("Inserisci i km che vuoi percorrere (solo il numero)")); //Number
const age = parseFloat(prompt("Inserisci la tua età (solo il numero)")); //Number

// console.log("Distanza Percorsa " + distance)
// console.log("Età Passeggero " + age)

const price = 0.21; //Number
const totalPrice = price * distance; //Number

// console.log(totalPrice + "€"); //Number + String


if (age < 18){

    const totalPrice = price * distance * 0.8;
    console.log(totalPrice.toFixed(2) + " €"); //Number + String

} else if (age > 65){

    const totalPrice = price * distance * 0.6;
    console.log(totalPrice.toFixed(2) + " €"); //Number + String

} else{

    const totalPrice = price * distance;
    console.log(totalPrice.toFixed(2) + " €"); //Number + String

}