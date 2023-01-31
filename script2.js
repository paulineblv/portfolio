let compteur =0;


function afficher(identifiant){

  if (compteur%2 == 0) {
    $("." + identifiant).slideDown(1000);
    /*$("." + identifiant + " p").css("display", "-webkit-box");
    $("." + identifiant + " img").css("display", "-webkit-box");*/
     }

     if (compteur%2 == 1) {
     $("." + identifiant).slideUp(1000);
    /*$("." + identifiant + " p").css("display", "none");
     $("." + identifiant + " img").css("display", "none");*/
     }

     compteur = compteur + 1 ; 
}

