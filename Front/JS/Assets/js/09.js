/* ---------------------------------
           LES BOUCLES 🙏
-----------------------------------*/

// -- Pour i = 0 ; Tant que i est strictement inférieur ou égale à 10; alors , j'incrémente i de 1.

for( let i = 0; i <= 10; i++) {
    document.write('<p> Instruction executée : <strong>' + i + '</strong></p>');
}

document.write('<hr>');


var j =1;
while (j <= 10){
    document.write('<p> Instruction executée : <strong>' + j + '</strong></p>');
    j++;
}

/* ---------------------------------
           EXERCICE
-----------------------------------*/
document.write('<hr>');

var Prenoms = [ 'Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Hugo', 'Jacques'];
let nb = Prenoms.length;

for ( var i = 0 ; i < nb ; i++ ){
    console.log(Prenoms[i]);
}

console.log('----');

// -- Avec la Boucle forEach
// -- ATTENTION A LA PERFORMANCE !!

Prenoms.forEach(afficheUnPrenom);

function afficheUnPrenom(prenom, i){
    console.log(i + ' ' + prenom);
}

