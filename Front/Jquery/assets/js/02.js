/*--------------------------------------------------------------------------------------
                    ~ LES SELECTEURS jQUERY ~

--------------------------------------------------------------------------------------*/

// -- Format : $('selecteur');
// -- En jQuerry, tous les selecteurs CSS sont disponibles ...

$(function(){
    // -- DOM READY !
    l = e => console.log(e);

    // -- Selectionner toutes les balises SPAN !
    l(document.getElementsByTagName('span'));
    l($('span'));

    // -- Je veux selectionner menu grâce à son ID

    // En JS
    l(document.getElementById('menu'));

    // En JQ
    l($('menu'));

     // -- Je veux selectionner une classe ...

    // En JS
    l(document.getElementsByClassName('MaClasse'));

    // En JQ
    l($('.MaClasse'));

    // -- Selectionner un Attribut

    l($('[href="https://www.google.fr"]'));
})