const Resultat = document.querySelector(".result");
const Essai = document.querySelector(".try");
const ObjectToFind = document.querySelector(".ObjectToFind");
const ZoneTexte = document.getElementById("number");
let button = document.querySelector(".valider");
let nbEssai = 0;
let reset = 0;
let tab = [
  [512675, 4675250, 401512, 1568231, 8, 909, 2000000000, 1000000, 456, 369],
  [
    "une Rolex",
    "un Jet privé",
    "une Ferrari 812 gts",
    "un yacht",
    "une multiprise",
    "un Iphone 13",
    "la Joconde",
    "une voiture de F1",
    "une medaille d'or au JO",
    "une carte graphique Nvidia GeForce RTX2060",
  ],
];

let RandomValue = Math.floor(Math.random() * tab[1].length);
let WordToFind = tab[1][RandomValue];
let NumberToFind = tab[0][RandomValue];
ObjectToFind.textContent = `Quel est le prix de cet objet : ${WordToFind} ?`;

function Reset() {
  nbEssai = 0;
  reset = 0;

  //document.getElementById("flemme").disabled=false;
  Resultat.textContent = "Proposez un prix dans la case ci-dessus.";
  Essai.textContent = "Nombre d'essais : 0";
  ZoneTexte.value = null;

  let Prev = RandomValue;
  let New = Math.floor(Math.random() * tab[1].length);
  while (New === Prev) {
    New = Math.floor(Math.random() * tab[1].length);
  }
  RandomValue = New;
  WordToFind = tab[1][RandomValue];
  NumberToFind = tab[0][RandomValue];

  ObjectToFind.textContent = `Quel est le prix de cet objet : ${WordToFind} ?`;
}

function Valider() {
  let Number = parseInt(document.getElementById("number").value);
  document.getElementById('vanish').style.visibility="hidden";
  if (reset === 0) {
    nbEssai = nbEssai + 1;
    if (Number === NumberToFind) {
      Resultat.textContent = `💪 F\u00e9licitations, vous avez trouv\u00e9 le bon r\u00e9sultat (${NumberToFind} \u20ac) en ${nbEssai} essais ! 🏆`;
      /* alert(
          `Bravo c'est le bon r\u00e9sulat (${NumberToFind} \u20ac) ! Vous avez trouv\u00e9 le bon r\u00e9sultat en ${nbEssai} essais !`
        ); */
      ZoneTexte.value = null;
      reset = 1;
      //document.getElementById("flemme").disabled=true;
    } else if (Number < NumberToFind) {
      Resultat.textContent = `C'est plus que ${Number} !`;
    } else {
      Resultat.textContent = `C'est moins que ${Number} !`;
    }
    Essai.textContent = `Nombre d'essais : ${nbEssai}`;
  }
}
