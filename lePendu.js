function init (){

    const listeMots=["bloc","super","joueur","puissance","glossaire","champ","espace","profusion","boomerang","sursauter","parapluie","zoologique"];//liste des mots à deviner
    console.log("Voici la liste de mots : "+listeMots);//aide pour la correction


    mot=listeMots[Math.floor(Math.random()* listeMots.length)];//prend un mot au hazard dans la liste :
    lettres = [mot[0]];// les lettres proposées par l'utilisateur 
    errors = 0// nombre d'erreurs faites par l'utilisateur
    console.log("Voici le mot à deviner : "+mot);//aide pour la correction
    document.getElementById("image").src="imgPendu/img0.png";//image du pendu


    document.getElementById("demo").innerHTML = "Le mot à deviner est : " + IterMot(mot,lettres,errors)[0]; //champ qui affiche l'état du mot actuel avec les lettres découvertes
    document.getElementById("vic").innerHTML = "Vies : "+ (8 - IterMot(mot,lettres,errors)[2])+ " ♥";// champ qui affiche les vies restantes, le message de victoire ou de défaite
    

    document.getElementById('Input').removeChild(document.getElementById('userInput'));
    let input = document.createElement('input');
    input.type="text";
    input.id="userInput";
    input.setAttribute('maxlength', '1');
    input.addEventListener ("keypress", function(e) {
        Submit(e.key);
      });
    

    document.getElementById("Input").appendChild(input);

}


function game(){
    init();
}


function IterMot(mot,lettres,errors){
    let morecherche="";//la partie du mot restant à être identifiée
    let motrouv="";//la partie du mot correctement identifiée avec les lettres
    for (i of mot){
        if (lettres.includes(i)){//
            motrouv+=i+" ";
            morecherche+="_ "
        }
        else{
            motrouv+="_ "
            morecherche+=i+" "
        }
    }
    errors=0;
    for (i of lettres){
        if (!(mot.includes(i))){
            errors+=1;//compte le nombre d'erreurs
        }
    }
    return [motrouv, morecherche, errors];//renvoie mais errors est une variable globale
}

function Submit(event){
    let arrayImg = ["img10.png"];//création du tableau d'image
    for (let i = 1; i < 9; i++) {
        arrayImg.push("imgPendu/img"+String(i)+".png");
      }
    
    if (event != "Enter"){//vérifie si le joueur a validé sa valeur en appuyant sur enter
        return null;
    }
    userInput=document.getElementById("userInput").value;
    if (userInput.length != 1 ||(8 - IterMot(mot,lettres)[2])==0){//vérifie que la longueur de l'input correspond à une seule lettre et que le joueur dispose de vie pour jouer
        return null;
    }
    
    
    document.getElementById("userInput").value="";// reset le champ d'input du joueur
    lettres.push(userInput)// ajoute l'input aux lettres déjà testée par le joueur
    document.getElementById("vic").innerHTML = "Vies : "+ (8 - IterMot(mot,lettres)[2])+ " ♥"; //modifie le nombre de vies restantes

    
    
    if (IterMot(mot,lettres)[2] > 0){//modifie l'image du pendu en fonction de l'avancement des erreurs
        document.getElementById("image").src=arrayImg[IterMot(mot,lettres)[2]];
    }
    
    document.getElementById("demo").innerHTML = "Le mot à deviner est : " + IterMot(mot,lettres)[0]; // modifie l'avancement du mot
    
    if  (!(IterMot(mot,lettres)[0].includes("_"))){//teste la victoire du joueur et affiche le nombre d'essais qui ont été nécessaires
        document.getElementById("vic").innerHTML = "💪 Bravo ! Vous avez trouvé en "+(IterMot(mot,lettres)[2])+" erreurs 🏆";
        document.getElementById('startInput').style.visibility="visible";

    }
    if ((8 - IterMot(mot,lettres)[2])==0){//teste la défaite
        document.getElementById("vic").innerHTML = "Dommage vous n'avez plus de vies, vous pouvez réessayer ! ❌";
        document.getElementById('startInput').style.visibility="visible ";
    }
}






