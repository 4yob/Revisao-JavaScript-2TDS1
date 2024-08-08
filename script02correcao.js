//Atividade 02: A cada 3 ingressos comprados, o cliente ganhará uma porção de batatas fritas.

let quantidadeIngressos = 12;
let promocaoBatata = 0;

for (let i = 1; i <= quantidadeIngressos; i++){
    if (i % 3 === 0){
        promocaoBatata++;
    }
}

let nome = "Alejandra";

console.log("Parabéns, " + nome + "! Você ganhou " + promocaoBatata + " porções de batatas fritas.");