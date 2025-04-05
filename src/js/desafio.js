const prompt = require('prompt-sync')()

let nome = prompt("Digite o nome do Herói: ")
let xp = Number(prompt("Digite a quantidade de energia: "))
let nivel = ""

console.log("=============== Nível do seu Herói ===============")

if (xp > 0 && xp < 1001) {
    nivel = "Ferro"
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
}else if (xp > 1000 && xp < 2001) {
    nivel = "Bronze"
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
}else if (xp > 2000 && xp < 5001) {
    nivel = "Prata"
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
}else if (xp > 5000 && xp < 7001) {
    nivel = "Ouro"
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
} else if (xp > 7000 && xp < 8001) {
    nivel = "Platina"
    console.log(`O Herói de nome **R{nome}** está no nível de **${nivel}**`)
}else if (xp > 8000 && xp < 9001) {
    nivel = "Ascendente"
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
}else if (xp > 9000 && xp < 10001) {
    nivel = "Imortal"
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
}else {
    nivel = "Radiante"
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`)
}