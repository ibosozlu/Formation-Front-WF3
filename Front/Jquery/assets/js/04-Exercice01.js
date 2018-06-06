
$(function(){

    $("#MonFormulaire").submit(function(e){
        var nom = $('#nomcomplet').val();
        $('#MonFormulaire').hide('slow');  
        e.preventDefault();

        var txt = "<p></p>";
        $("body").append(txt);
        $("p").append("Bonjour " + nom);
   });

});
    


