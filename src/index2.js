
let saldoVitorias = calculo(2, 20)


function calculo(vitorias, derrotas){
    let rankeadas = Math.abs(vitorias - derrotas)
    return rankeadas
}

if (saldoVitorias <= 10){
    nivel = "Ferro"
    console.log("O Herói tem de saldo de " + 
saldoVitorias + " está no nível de " + nivel)
}else if (saldoVitorias >= 11 && saldoVitorias <= 20){
    nivel = "Bronze"
    console.log("O Herói tem de saldo de " + 
saldoVitorias + " está no nível de " + nivel)
}else if (saldoVitorias >= 21 && saldoVitorias <= 50){
    nivel = "Prata"
    console.log("O Herói tem de saldo de " + 
saldoVitorias + " está no nível de " + nivel)
}else if (saldoVitorias >= 51 && saldoVitorias <= 80){
    nivel = "Ouro"
    console.log("O Herói tem de saldo de " + 
saldoVitorias + " está no nível de " + nivel)
}else if (saldoVitorias >= 81 && saldoVitorias <= 90){
    nivel = "Diamante"
    console.log("O Herói tem de saldo de " + 
saldoVitorias + " está no nível de " + nivel)
}else if (saldoVitorias >= 91 && saldoVitorias <= 100){
    nivel = "Lendário"
    console.log("O Herói tem de saldo de " + 
saldoVitorias + " está no nível de " + nivel)
}else {
    nivel = "Imortal"
    console.log("O Herói tem de saldo de " + 
    saldoVitorias + " está no nível de " + nivel)
}