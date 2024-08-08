let idadeAluno = 45;
let idadeMinima = 7;

if (idadeAluno < idadeMinima) {
    console.log("Desculpe, você ainda não pode se matricular nesta escola!")
} else {
    console.log("Matrícula realizada com sucesso!")
    if (idadeAluno === idadeMinima && idadeAluno <= 10) {
        console.log("Categoria Infantil.")
    } else if (idadeAluno === 11 && idadeAluno <= 15) {
        console.log("Categoria Juvenil.")
    } else if (idadeAluno === 16 && idadeAluno <= 18) {
        console.log("Categoria Adolescente.")
    } else if (idadeAluno === 19 && idadeAluno <= 23) {
        console.log("Categoria Jovem Adulto.")
    } else {
        console.log("Categoria Adulto.")
    }
}
