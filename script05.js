let paes = ["Pão Australiano", "Pão Brioche", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

let hamburger = [];

hamburger.push(paes[2]); //index 0
hamburger.push(molhos[0]); //index 1
hamburger.push(saladas[1]); //index 2
hamburger.push(carnes[1]); //index 3
hamburger.push(queijos[0]); //index 4

for ( let i = 0; i < hamburger.length; i++) {
    console.log(hamburger[i])
}