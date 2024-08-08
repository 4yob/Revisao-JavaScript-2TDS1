//Atividade 02: A cada 3 ingressos comprados, o cliente ganhará uma porção de batatas fritas.

let quantidadeIngressos = 6;
let promocaoBatata = 0;

for (let i = 3; i <= quantidadeIngressos; i += 3) {
    promocaoBatata++;
}

console.log("Promoção! Você ganhou " + promocaoBatata + " porções de batatas!")