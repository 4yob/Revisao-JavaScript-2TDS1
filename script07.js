let metaLivros = 3;
let livrosLidos = ["O Guarani", "Agora Estou Sozinha", "Coraline"];

for (let i = 0; i < livrosLidos.length; i++) {
    console.log(`Livros lidos: ${livrosLidos[i]}`);
}

if (metaLivros > livrosLidos.length) {
    console.log("Você está progredindo! Faltam ", metaLivros - livrosLidos.length, "livros para atingir sua meta.");
} else {
    console.log("Parabéns! Você atingiu sua meta de leitura!")
}