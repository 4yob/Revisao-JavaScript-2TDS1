let quantidadePalmas = 10;
let palmas = "👏";

for (let i = 1; i <= quantidadePalmas; i++) {
    palmas++;
    console.log("👏");
    if (i % 5 === 0) {
        console.log("🎉");
    }
}