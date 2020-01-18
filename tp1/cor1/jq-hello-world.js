$(document).ready(function(){
 
    var coteG = $("#gauche");
    var coteD = $("#droite");


     //Ajoute un FORM à gauche:
     var formGauche = $("<form></form>").appendTo(coteG);
     formGauche.css("margin-top", "50px", "width", "40%", );
     formGauche.css("width", "40%");
     formGauche.css("padding", "30px");
 
    //AJOUTE UNE SEPRATION A DROITE
    coteD.append("<hr>");
 
    //REACTION AU CLIC SUR LE BOUTON LABEL
    $("#droite button:eq(0)").on("click", function(){
 
 
        coteD.append("<div id='labelElmt'> <p>Texte du label: <input type='text' id='inputLabel' > <button id='boutonOK'> OK </button> </p> </div>");
 
        //REACTION AU CLIC SUR BOUTON VALIDER
        $("#boutonOK").on("click", function(){
            //sauvegarde la valeur de l'input:
            var titreLabel = $("#inputLabel").val();
            //l'ajoute à la balise <form> de gauche:
            formGauche.append("<span>" + titreLabel + "</span>");
            //efface le formulaire:
            $("#labelElmt").remove();      
        });
    });
 
    $("#droite button:eq(1)").on("click", function() {
 
 
        coteD.append("<div id='idElt'> <p>id de la zone de texte: <input type='text' id='input2'> <button id='boutonOK2'> OK </button> </p> </div>");
 
        $("#boutonOK2").click(function(){
            var textId = $("#input2").val();
            formGauche.append("<input type='text' id=" + textId + " ></input>");
            $("#newInput").css("margin-left", "50px"); 
            $("#idElt").remove();
        });
 
    });
 
    $("#droite button:eq(2)").click(function(){
 
        coteD.append("<div id='buttonElt'> <p>Texte du bouton: <input type='text' id='input3'> <button id='boutonOK3'> OK </button> </p> </div>");
 
        $("#boutonOK3").click(function(){
            var textButton = $("#input3").val();
            formGauche.append("<button id='valider'>" + textButton + "</button>")
            $("#valider").css("margin-top", "50px"); 
            $("#buttonElt").remove();
        });
 
     });
 
    $("#droite button:eq(3)").click(function(){
       formGauche.append("<br/>");
     });  
 
});