/* ---------------------------------
    LES EVENEMENTS
-----------------------------------*/

/* Les évènements vont me permettre de déclencher une fonction c'est à dire une série d'instruction; suite à une action de mon utilisateur...

OBJECTIF : Etre en mesure de capturer ces évènements afin d'éxecuter une fonction. */

/*
Les evenements : MOUSE ( Souris )
    click      : au clic sur un élément;
    mouseenter : la souris passe au dessus de la zone d'un élément;
    mouseleave : la souris sors de cette zone.

Les evenements : KEYBOARD ( Clavier )
    keyup      : une touche du clavier a été relachée;
    keydown    : une touche est enfoncée.

Les Evenements : WINDOW ( Fenêtre )
    scroll     : défilement de la fenêtre;
    resize     : redimentionnement de la fenêtre.

Les evenements : FORM ( Formulaire )
    change     : pour les éléments <input>, <select> et <textarea> ;
    submit     : à l'envoi (soumission) du formulaire;
    input      : pour capter la saisie d'un utilisateur sur un champ <input>. */



/*
############## LES ECOUTEURS D'EVENEMENTS #########################

Pour attacher un évènement à un élément, ou autrement dit, pour déclarer un écouteur d'évènement qui se chagera de déclencher une fonction, je vais utiliser la syntaxe suivante :

------------------------------------------------------------------------------------------------------------ */

var p = document.getElementById('MonParagraphe');

// -- Je souhaite que mon paragraphe soit rouge au clic de la souris

function changerLaCouleurEnRouge(){
    p.style.color = "red";
}



p.addEventListener('click',changerLaCouleurEnRouge);


var input = document.createElement('input');
input.setAttribute('type', 'text');
input.setAttribute('placeholder','Saisissez un Contenu...');

input.id = "MonID";


document.body.appendChild(input);

function voirLaSaisieDeMonInput(){
    alert(input.value);
}

input.addEventListener('change',voirLaSaisieDeMonInput);

