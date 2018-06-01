/*
 I. Créer un Tableau 3D "PremierTrimestre" contenant la moyenne d'un étudiant pour plusieurs matières.

    Nous auront donc pour un étudiant, sa moyenne à plusieurs matières.
    
    Par exemple : Hugo LIEGEARD : [ Francais : 12, Math : 19, Physique 4], ... etc
    
    **** Vous allez créez au minimum 5 étudiants ****

II. Afficher sur la page (à l'aide de document.write) pour chaque étudiant, la liste (ul et li) 
de sa moyenne à chaque matière, puis sa moyenne générale. 
*/

// -- Les Flemards.js
function l(e) {
    console.log(e);
}
function w(e) {
    document.write(e);
}

var PremierTrimestre = [
    {'prenom':'Hugo','nom':'LIEGEARD','MatiereNote':{
                                                'Français':'12','Anglais':'13','Histoire':'14','Sport':'15'}},
    {'prenom':'Rodrigue','nom':'NOUEL','MatiereNote':{
                                                'Histoire':'12','Allemand':'13','Latin':'14','Français':'15'}},
    {'prenom':'Nathanael','nom':'DORDONNE','MatiereNote':{
                                                'Economie':'12','Anglais':'13','Management':'14'}},
    {'prenom':'Ibo','nom':'SOZLU','MatiereNote':{
                                                'Anglais':'12','Economie':'11','Sport':'15','Allemand':'08'}},
    {'prenom':'Jean','nom':'ROP','MatiereNote':{
                                                'Math':'12','Anglais':'13','Latin':'15'}}
];

l(PremierTrimestre);
var j = 0;


for(let i =0; i < PremierTrimestre.length; i++ ){
    w(PremierTrimestre[i].prenom+ " " +PremierTrimestre[i].nom + " : " + '<br>');
  

    while ( j < 5){
    
        l('<ul>'+ PremierTrimestre[i].MatiereNote[j] +'</ul>'); 
        j++;   
    }
    
    j=0;
}





