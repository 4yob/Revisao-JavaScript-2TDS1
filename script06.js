let armas = ["CJ", "Raio laser", "Míssil", "Canhão", "Metralhadora", "Cerra elétrica", "Lança chamas", "Pistola"];
let ataque = [];

ataque.push(armas[1]); //0
ataque.push(armas[5]); //1
ataque.push(armas[3]); //2

for ( let i = 0; i < ataque.length; i++) {
    if (ataque[i] == armas[1]) {
        console.log("Nome do Robô: " + armas[0]);
    }
    console.log("Ataque", i+1 + ": " + ataque[i]);
}