
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
function fermerMenus() {
    // on choisit les tous class .niveau2 pour les cacher

var menu_niveau2= document.querySelectorAll(".niveau2");

// on utulise forEach pour donner la class à chaque element avec la class .niveau2
menu_niveau2.forEach(function(element){
       
// on établit le style avec display:non pour fermer les menus

    element.style="display:none";
});
}

function menu(numero) {
// on fait le style avec display:block pour afficher le menu1,2,3
    
        document.querySelector(numero).style="display:block";
                       
    }

function Fleche1(id) { 

        
        // var fleshe1 = document.getElementById(id);

        id.addEventListener("mouseout", function (){    
        
        var image = document.querySelectorAll(`#${id.id} img`)  ;
        
        image.forEach(function(element) {
            
        element.setAttribute("src","images/fleche1.gif");	
		element.setAttribute("alt","flesh petite");
    
        });
  
         });
        };
    
    function Fleche2(id) { 
        
        
        // var fleshe2 = document.getElementById(id);

        id.addEventListener("mouseover", function (){   
            
            var image = document.querySelectorAll(`#${id.id} img`)  ;
            
            image.forEach(function(element) {
                
            element.setAttribute("src","images/fleche2.gif");	
            element.setAttribute("alt","fleshe grande");
        
            });
     
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

// quand on click sur bouton1 on appele la fonction menu() et affiche le menu1

var btn1 = document.getElementById('bouton1');

    
btn1.addEventListener("click", function(){   

menu('#menu1');

});


//quand on click sur bouton2 on appele la fonction menu() et affiche le menu2

var btn1 = document.getElementById('bouton2');

    
btn1.addEventListener("click", function(){   

menu('#menu2');

});

// quand on click sur bouton3 on appele la fonction menu() et affiche le menu3

var btn1 = document.getElementById('bouton3');

    
btn1.addEventListener("click", function(){   

menu('#menu3');

});


// appele Fleche1() et Flesh2() avec les parametres qui se changent dinamiquement

for(var k=1; k<10; k++){


Fleche1(
    
    document.querySelector(`#smenu${k}`))
};

for(var l=1; l<10; l++){

Fleche2(
    
    document.querySelector(`#smenu${l}`))

};

});







