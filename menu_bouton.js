
// fonction boutonover avec id_bouton comme la paramètre
function boutonover(id_bouton) {
    // en event mouseover on change le style pour faire le border
    id_bouton.addEventListener("mouseover", function (){    
            
            var buttonBorder = id_bouton.style;
            buttonBorder.borderTopColor = "#646464";
            buttonBorder.borderLeftColor = "#646464";    
            buttonBorder.borderBottomColor = "#F7F7F7";
            buttonBorder.borderRightColor = "#F7F7F7";
    });
}

// fonction boutout avec id_bouton comme la paramètre
function boutonout(id_bouton) {
        
 // en event mouseout on change le style pour faire le border inverse
 id_bouton.addEventListener("mouseout", function (){    
    
    var buttonBorderOver = id_bouton.style;
    buttonBorderOver.borderTopColor = "#F7F7F7";
    buttonBorderOver.borderLeftColor = "#F7F7F7";    
    buttonBorderOver.borderBottomColor = "#646464";
    buttonBorderOver.borderRightColor = "#646464";
});

}

window.addEventListener('load', function(){
    // on appele la fonction fermerMenus() au chargement de la page
    fermerMenus();
    
    //on appele la fonction boutonover avec les paramètres #bouton1-#bouton3. 
    //le cycle est pour changer les numeros de bouton 1,2,3.
    for(var i=1; i<4; i++){
    boutonover(
            
            document.querySelector(`#bouton${i}`)

    
    )};
 
    //on appele la fonction boutonout avec les paramètres #bouton1-#bouton3. 
    //le cycle est pour changer les numeros de bouton 1,2,3
    for(var i=1; i<4; i++){
        boutonout(
                
            document.querySelector(`#bouton${i}`)
          
        )};
});