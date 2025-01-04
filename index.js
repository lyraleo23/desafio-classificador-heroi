let nome_heroi = 'Link';
let xp_heroi = 5908;
let nivel_heroi;

if (xp_heroi <= 1000) {
    nivel_heroi = 'Ferro';
}
else if (xp_heroi > 1000 && xp_heroi <= 2000) {
    nivel_heroi = 'Bronze';
}
else if (xp_heroi > 2000 && xp_heroi <= 5000) {
    nivel_heroi = 'Prata';
}
else if (xp_heroi > 5000 && xp_heroi <= 7000) {
    nivel_heroi = 'Ouro';
}
else if (xp_heroi > 7000 && xp_heroi <= 8000) {
    nivel_heroi = 'Platina';
}
else if (xp_heroi > 8000 && xp_heroi <= 9000) {
    nivel_heroi = 'Ascendente';
}
else if (xp_heroi > 9000 && xp_heroi <= 10000) {
    nivel_heroi = 'Imortal';
}
else if (xp_heroi > 10000) {
    nivel_heroi = 'Radiante';
}

console.log(`O Herói de nome **${nome_heroi}** está no nível **${nivel_heroi}**`);