//je déclare un tableau de 4 couleurs
const couleurPossibles = ["bleu", "rouge", "vert", "rose"]

//fonction qui vérifie si la proposition est valide
function propositionValide(proposition) {

//vérifie si la proposition est un tableau
if(!Array.isArray(proposition)){

//retourne faux si ce n'est pas un tableau
     return false;
}
 //vérif si chaque propos de couleur est valide  
if(proposition.length !==2){

//retourne faux si la longueur n'est pas 2
    return false;
}
  
//verifie si chaque propos de couleur est valide
for(let couleur of proposition){
    if (!couleurPossibles.includes(couleur)){

//retourne faux si 1 couleur n'est pas dans le tableau
        return false;
    }
}

//retourne vrai si toutes les vérifs sont passées
return true;
}

let proposition1= ["vert","rose"];
let proposition2= ["bleu", "gris"];

//vérifie les propositions
//affiche true
console.log (propositionValide(proposition1));
//affiche false
console.log (propositionValide(proposition2));







