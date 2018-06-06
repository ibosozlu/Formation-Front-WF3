/*--------------------------------------------------------------------------------------
                    ~ LA DISPONIBILITE DU DOM ~

A partir du moment ou mon DOM, c'est à dire l'ensemble de l'arborescence de ma page HTML est complètement chargé;
je peux commencer à utiliser jQuery.

Je vais mettre l'ensemble de mon code dans une fonction, cette fonction sera appelée AUTOMATIQUEMENT !!! par jQuery
lorsque le DOM sera entièrement défini.

3 façons de faire : 

--------------------------------------------------------------------------------------*/
// -- 1er possibilité :

jQuery(document).ready(function(){
    // -- Ici, le DOM est entièrement chargé , je peux procéder à mon code JS !
    // 
    // alert('Bievenue dans ce cours JQUERY !');
    // EN JS
    document.getElementById('TexteEnJquery').innerHTML = "<strong> Mon texte en JS </strong>";
    // EN Jquery
    $('#TexteEnJquery').html('Mon texte en JQ');
    // 
    // 
    // 
})


// -- 2ème possibilité : 

$(document).ready(function(){
    // -- Ici, le DOM est entièrement chargé , je peux procéder à mon code JS !
    // 
    // alert('Bievenue dans ce cours JQUERY !');
    // 
    // 
    // 
})

// -- 3ème possibilité : 

$(function(){
    // -- Ici, le DOM est entièrement chargé , je peux procéder à mon code JS !
    // 
    // 
    // 
    // 
    // 
    // 
})