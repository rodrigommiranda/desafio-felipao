let xp = 15.000
let nome = "Daianny" 
let nivel;

if (xp <= 1.000){
    nivel = "Ferro"
    console.log("O Herói de nome " + nome +
     " está no nível de " + nivel)
}else if(xp >= 1.001 && xp <= 2.000){
    nivel = "Bronze"
    console.log("O Herói de nome " + nome + 
    " está no nível de " + nivel)
}else if(xp >= 2.001 && xp <= 5.000){
    nivel = "Prata"
    console.log("O Herói de nome " + nome + 
    " está no nível de " + nivel)
}else if(xp >= 6.001 && xp <= 7.000){
    nivel = "Ouro"
    console.log("O Herói de nome " + nome + 
    " está no nível de " + nivel)
}else if(xp >= 7.001 && xp <= 8.000){
    nivel = "Platina"
    console.log("O Herói de nome " + nome + 
    " está no nível de " + nivel)
}else if(xp >= 8.001 && xp <= 9.000){
    nivel = "Ascendente"
    console.log("O Herói de nome " + nome + 
    " está no nível de " + nivel)
}else if(xp >= 9.001 && xp <= 10.000){
    nivel = "Imortal"
    console.log("O Herói de nome " + nome + 
    " está no nível de " + nivel)
}else {
    nivel = "Radiante"
    console.log("O Herói de nome " + nome + 
    " está no nível de " + nivel)
}