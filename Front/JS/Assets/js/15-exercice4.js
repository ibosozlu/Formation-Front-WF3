/* -------------------------------------  ETAPE 1 --------------------------------------*/


var pseudo = document.getElementById('pseudo');
var msg = document.getElementsByClassName('pseudoError');
var boutton = document.getElementById("submit").disabled = false;



function test(){
msg[0].style.display = "none";
document.getElementById("submit").disabled = false;
titre.textContent = "";
for( let i = 0 ; i < membres.length ; i++ ){ 
    console.log(pseudo.value);
    console.log(membres[i].pseudo);
   
    if( pseudo.value == membres[i].pseudo){
        msg[0].style.display = "block";
        document.getElementById("submit").disabled = true;
        break;
    }
   else if( i == membres.length-1){
    titre.textContent = "Bonjour" + " " + pseudo.value;
    
   }
}
}

pseudo.addEventListener('change', test);



/* -------------------------------------  ETAPE 2 --------------------------------------*/




var msg2 = document.getElementsByClassName('ageError');
var majorite = 18;
var age = document.getElementById('age');


function test2(){
    msg2[0].style.display = "none";
    document.getElementById("submit").disabled = false;

    if(age.value < majorite || isNaN(age.value)){
        msg2[0].style.display = "block";
        document.getElementById("submit").disabled = true;
        
    }

}


age.addEventListener('change', test2);


/* -------------------------------------  ETAPE 3 --------------------------------------*/



var titre = document.getElementById('Bienvenue');








/* -------------------------------------  ETAPE 4 --------------------------------------*/
