let armas = ["Raio laser", "Míssil", "Canhão", "Metralhadora", "Cerra elétrica", "Lança chamas", "Pistola"];
let ataque = [];

ataque.push("CJ");
ataque.push(armas[1]);
ataque.push(armas[2]);
ataque.push(armas[5]);
ataque.push(armas[0]);

for (let i = 0; i < ataque.length; i++) {
    if (i == 0) {
        console.log(`Nome do Robô: ${ataque[i]}`);
    } else {
        console.log(`Ataque ${i}: ${ataque[i]}`);
    }
}