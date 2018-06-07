  // -- 1. Attente que le DOM soit chargé !
  $(function() {

    // -- 2. Ecouter l'évènement "submit" du Formulaire
    $('#MonFormulaire').submit(function(event) {

        // -- 3. Stopper l'envoi du Formulaire
        event.preventDefault();

        // -- 4. Récupération des informations
        let fullname    = $('#fullname').val();
        let email       = $('#email').val();
        let tel         = $('#tel').val();
        let sujet       = $('#sujet').val();
        let message     = $('#message').val();

        // -- 5. Récapitulatif
        $(this).replaceWith(`
            <p>
                Bonjour <strong>${fullname}</strong>
                <em> ( ${email} ) </em> <br><br>
                Vous nous avez contacté au sujet de : <strong>${sujet}</strong>.<br>
                Nous reviendrons vers vous dans les plus brefs délais au 
                <strong>${tel}</strong><br><br>
                <u>Ci-dessous votre message :</u><br>
                ${message}
            </p>
        `);

    }); 
}); 
