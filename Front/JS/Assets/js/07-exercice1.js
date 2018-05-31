function hello(){
var Prenom = prompt("Quel est votre Prenom ?");

alert("Bonjour " + Prenom + "." );

var Age = parseInt(prompt("Quel âge as-tu ?"));
var DateDuJour        = new Date();

alert("Tu es donc né en " + (DateDuJour.getFullYear() - Age) ) ;


document.write("Bonjour " + Prenom + " tu as " + Age +" ans !"); };

hello();