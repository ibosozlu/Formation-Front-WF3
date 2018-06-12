$(function() {

    // --1. Je récupère la valeur saisie par mon utilisateur
    $('#search').on('change', function() {
        // --2. Je récupère la valeur saisie
        let search = $(this).val();

        // -- 3. 


    $.ajax('https://jsonplaceholder.typicode.com/users')
    .done(function(data) {
        $(".resultat").empty();
        for (let i = 0; i < data.length ; i++){
            let regex= new RegExp( search,'i');

            // if ( search === data[i].name || search === data[i].username || search === data[i].email || search === data[i].phone){
                if(regex.test(data.username) || regex.test(data.name) ||regex.test(data.email) ||regex.test(data.phone)){
                $( `
            <div class="membre">
                <div class="membre_informations">
                    <p>Nom Complet :${data[i].name}</p>
                    <p>Username :${data[i].username}</p>
                    <p>Email :${data[i].email}</p>
                    <p>Téléphone :${data[i].phone}</p>
                </div>
            </div>
            `).appendTo($('.resultat'));
            }
        };
    });
});
});
