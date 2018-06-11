// -- Initialisation de jQuery (DOM READY)
$(function() {
    
    // -- Déclaration de Variables
    var CollectionDeContacts = [];

    /* --------------------------------------------------------------
                        DECLARATION DES FONCTIONS
    -------------------------------------------------------------- */

    // -- Fonction ajouterContact(Contact) : Ajouter un Contact dans le tableau de Contacts, mettre à jour le tableau HTML, réinitialiser le formulaire et afficher une notification.
    function ajouterContact(UnContact) {}

    // -- Fonction RéinitialisationDuFormulaire() : Après l'ajout d'un contact, on remet le formulaire à 0 !
    function reinitialisationDuFormulaire() {}

    // -- Affichage d'une Notification
    function afficheUneNotification() {}

    // -- Vérification de la présence d'un Contact dans Contacts
    function estCeQunContactEstPresent(UnEmail) {

            // -- Booleen qui indique la présence d'un contact dans ma collection
            let estPresent = false;

            // -- On parcourt le tableau à la recherche d'une correspondance
            for(let i = 0; i < CollectionDeContacts.length ; i++){

                if (UnEmail === CollectionDeContacts[i].email){
                    estPresent = true;
                    break;
                }

            }
            return estPresent
    }
    // -- Vérification de la validité d'un Email
    // : https://paulund.co.uk/regular-expression-to-validate-email-address
    function validateEmail(email){}

    /* --------------------------------------------------------------
                    TRAITEMENT DE MON FORMULAIRE
    -------------------------------------------------------------- */

    // -- Détection de la soumission de mon Formulaire
        $('#contact').on('submit', function(e) {
        l = e => console.log(e)

        // -- Voir le contenu de l'évènement
        l(e);

        // -- Stopper la redirection de la page
        event.preventDefault();

        // -- Récupération des champs à vérifier
        const prenom,nom,email,tel;
        nom = $('#nom');
        prenom = $('#prenom');
        email = $('#email');
        tel = $('#tel');


        // -- Vérification des informations...
        let mesInformationsSontValides = true;

        // -- Vérification du Prénom
        if (prenom.val().length === 0){
            // -- Le champ est incorrect, car il n'a pas été rempli ...
            mesInformationsSontValides = false;
        }
        // -- Vérification du Nom
        if (nom.val().length === 0){
            mesInformationsSontValides = false;
        }
        // -- Vérification du Tel
        let tel_regex = /^(\+33 |0)[1-9 ]( \d\d){4}$/

        if(!tel_regex.test(tel.val())){
            mesInformationsSontValides = false;
        }
        // -- Vérification du Mail
        let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if(!email_regex.test(email.val())){
            mesInformationsSontValides = false; 
        }


        if(mesInformationsSontValides) {
            
            // -- Tous est correct, Préparation du Contact
            let Contact = {
                // cle     // valeur
                nom         : nom.val(),
                prenom      : prenom.val(),
                email       : email.val(),
                tel         : tel.val(),

            }
            // -- Observons dans la console
            console.log(Contact);

            // -- Vérification avec EstCeQunContactEstPresent
            if(!estCeQunContactEstPresent(Contact.email)) {   
                
                // -- Ajout du Contact
                ajouterContact(Contact);

            } else {                    
                // -- Alert si contact présent
                alert('ATTENTION\nCE CONTACT EST DEJA PRESENT');
            }

        } else {
            // -- Alert si erreur dans l'un des champs
            alert('ATTENTION\nVeuillez bien remplir tous les champs');
        }       

    });

}); // -- Fin de jQuery READY !