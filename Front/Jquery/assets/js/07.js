$(function(){
    $('#contact').submit(function(event){
        event.preventDefault();
        
        let nom     = $('#nom');
        let prenom  = $('#prenom');
        let email   = $('#email');
        let tel     = $('#tel');
        let email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let tel_regex = /^(\+33 |0)[1-9 ]( \d\d){4}$/

        $('#contact').find('input').removeClass('is-invalid');
        $(".invalid-feedback").empty();
        $('#contact .alertdanger').remove();
        

        if((nom.val()).length === 0){
            nom.addClass('is-invalid');
            $(`
            <div class="invalid-feedback">
                Vous devez saisir votre nom.
            </div>
            `).appendTo(nom.parent());
        }
        if(prenom.val().length  === 0){
            prenom.addClass('is-invalid');
            $(`
            <div class="invalid-feedback">
                Vous devez saisir votre prénom.
            </div>
            `).appendTo(prenom.parent());
        }
        if(!email_regex.test(email.val())){
            email.addClass('is-invalid');
            $(`
            <div class="invalid-feedback">
                Vous devez saisir votre email.
            </div>
            `).appendTo(email.parent());
             
        }
        if(!tel_regex.test(tel.val())){
            tel.addClass('is-invalid');
            $(`
            <div class="invalid-feedback">
                Vous devez saisir votre numéro de téléphone.
            </div>
            `).appendTo(tel.parent());
             
        }
        if( $(this).find('.is-invalid').length === 0 ) {

            $(this).replaceWith(`
                <div class="alert alert-success" role="alert">
                    Votre contact à bien été transmis !
                    Nous vous répondrons dans les meilleurs délais.
                </div>
            `);

        } else {

            $(this).prepend(`
                <div class="alert alert-danger" role="alert">
                    Nous n'avons pas été en mesure de valider votre contact. 
                    Vérifiez vos informations.
                </div>
            `);

        }

 });   
        
       
});