 // -- Récupération des différents éléments
 var pseudo              = document.getElementById('pseudo');
 var age                 = document.getElementById('age');
 var email               = document.getElementById('email');
 var mdp                 = document.getElementById('mdp');
 var submit              = document.getElementById('submit');
 var Bienvenue           = document.getElementById('Bienvenue');
 var InscriptionForm     = document.getElementById('InscriptionForm');
 
 var pseudoError         = document.getElementsByClassName('pseudoError')[0];
 var ageError            = document.getElementsByClassName('ageError')[0];		
 
 // -- ETAPE 1 & 3
 pseudo.addEventListener('input', function () {

     // console.log(pseudo.value);
     for( let i = 0 ; i < membres.length ; i++ ) {
         
         // console.log( membres[i] );

         /**
          * Si la saisie d'un pseudo en cours par mon utilisateur
          * correspond à un pseudo dans mon tableau de membres...
          * Alors, ma condition s'applique.
          * NB : La condition vérifie la saisie de mon utilisateur
          * pour tous les membres du tableau !
          */
         if( pseudo.value === membres[i].pseudo ) {

                 /**
                  * Si je trouve une correspondance, j'affiche l'alerte
                  * pseudoError, car le pseudo saisi par mon utilisateur
                  * existe déjà dans le tableau de membre...
                  */
                 pseudoError.style.display = "block";
                 submit.disabled = true;
                  
                 break;

                 // console.log(true);

         } else {

             pseudoError.style.display = "none";
             submit.disabled = false;
              
             // console.log(false);

         }

     } // -- Fin boucle for

 }); // -- Fin de ()addEventListener        

 // -- ETAPE 2
 age.addEventListener('change', function() {

     if( age.value < 18 ) {
         ageError.style.display = "block";
         submit.disabled = true;
     } else {

         ageError.style.display = "none";
         submit.disabled = false;

     }

 });
     
 
 // -- Etape 4
 InscriptionForm.addEventListener('submit', function(e) {

     // -- On va stopper la redirection HTTP
     e.preventDefault(); 

     // -- Créer un Objet membre à ajouter au tableau
     let membre = {
         pseudo  : pseudo.value,
         age     : age.value,
         email   : email.value,
         mdp     : mdp.value
     };

     // console.log(membre);
     membres.push(membre);
     console.log(membres);

     // -- Paragraphe de confirmation
     var p = document.createElement('p');
     p.innerHTML = "Merci " + pseudo.value + " ! <strong>Tu es maintenant inscrit.</strong><br><br><u>Voici la liste de nos membres</u>";
     document.body.appendChild(p);

     // -- Générer la liste des membres
     var ul = document.createElement('ul');
     for(let i = 0 ; i < membres.length ; i++) {

         let li = document.createElement('li');
         let liste = membres[i].pseudo + " : " + membres[i].age + " ans";
         li.textContent = liste;
         ul.appendChild(li);

     }

     // -- Affichage sur ma page
     document.body.appendChild(ul);

 });   

