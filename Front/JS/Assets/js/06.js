/* ~ ~ ~ ~ ~ LES FONCTIONS ~ ~ ~ ~ ~ ~ ~ */


/**
 * Déclarer une fonction
 * NOTA BENE: Cette fonction ne retourne aucune valeur et ne prend pas de paramètres.
 */

function Salut() {

    
/**
 * Déclarer une fonction
 * les instruction ci-dessous seront exécutées ...
 */
    alert('Bonjour !');
}



/**
 * Je vais appeler ma fonction "Bonjour" et déclencher ses instructions.
 */
Salut();

// function NomDeMaFonction(Argument 1, Argument 2, Argument n) {
//      les instructions...
// }



/**
 * Déclarer une fonction qui prend un argument (un paramètre)

 * */

 function DitBonjour(Prenom, Nom){
     document.write("<p>Bonjour <Strong>" + Prenom + " " + Nom + "</strong> ! </p>")
 }

 DitBonjour("Ibo", "SOZLU");

/* ~ ~ ~ ~ ~ Exercice  ~ ~ ~ ~ ~ ~ ~ */
// Créez une fonction permettant d'effectuer l'addition de deux nombres (nb1 et nb2) passés en paramètres.

function Addition(nb1, nb2){
    return nb1 + nb2;
}

document.write("<p> Le résultat de l'addition est :" + Addition(10,15) + "</p>");
 