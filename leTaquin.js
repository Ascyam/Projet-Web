let TableI = [];
function init (){
  for (var i = 0; i<15;i++) {
      TableI[i]=i+1;
  }
  TableI[15]=0;
}


let z,n;
n=-1;
let x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15;

function Maj (){ //permet l'affichage
  let save;
  if (document.getElementById("x0")!=null) {
    for (let j = 0; j<16; j++) {
      if (TableI[j] == 0) {
        TableI[j] = "";
        save=j;
      }
    }
    x0=TableI[0];
    x1=TableI[1];
    x2=TableI[2];
    x3=TableI[3];
    x4=TableI[4];
    x5=TableI[5];
    x6=TableI[6];
    x7=TableI[7];
    x8=TableI[8];
    x9=TableI[9];
    x10=TableI[10];
    x11=TableI[11];
    x12=TableI[12];
    x13=TableI[13];
    x14=TableI[14];
    x15=TableI[15];
    document.getElementById("x0").innerText = x0;
    document.getElementById("x1").innerText = x1;
    document.getElementById("x2").innerText = x2;
    document.getElementById("x3").innerText = x3;
    document.getElementById("x4").innerText = x4;
    document.getElementById("x5").innerText = x5;
    document.getElementById("x6").innerText = x6;
    document.getElementById("x7").innerText = x7;
    document.getElementById("x8").innerText = x8;
    document.getElementById("x9").innerText = x9;
    document.getElementById("x10").innerText = x10;
    document.getElementById("x11").innerText = x11;
    document.getElementById("x12").innerText = x12;
    document.getElementById("x13").innerText = x13;
    document.getElementById("x14").innerText = x14;
    document.getElementById("x15").innerText = x15;
    TableI[save]=0;
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}


function shuffle(TableI) {

  /*cette fonction permet un mélange du tableau en partant d'un taquin soluble
  j'ai conscience qu'elle n'est peut être pas optimale néanmoins elle fonctionne... */

  init();       //remise à zéro du tableau
  let k;        //variable de permutation du tableau
  let iter=0;   //nombre d'échanges
  let cpt=[];   // tableau contenant une solution au Taquin +/- optimale
  for (let i = 0; i<getRandomInt(50,70); i++) {
    for (let j = 0; j<16; j++) {
      if (TableI[j] == 0) {
        iter++;
        let u = getRandomInt(1,5);
        switch (u){
          case 1: //gauche
            if (j%4!=0 & j-1>-1){
              k= TableI[j];
              TableI[j]= TableI[j-1];
              TableI[j-1]= k;
              if (cpt[cpt.length-1]==3) {
                cpt.pop();
              }
              else{
                cpt.push(1);
              }
              break;
            }
          case 2: //bas
            if (j+4<16){
              k= TableI[j];
              TableI[j]= TableI[j+4];
              TableI[j+4]= k;
              if (cpt[cpt.length-1]==4) {
                cpt.pop();
              }
              else{
                cpt.push(2);
              }
              break;
            }
          case 3: //droite
            if (j%4!=3 & j+1<17){
              k= TableI[j];
              TableI[j]= TableI[j+1];
              TableI[j+1]= k;
              if (cpt[cpt.length-1]==1) {
                cpt.pop();
              }
              else{
                cpt.push(3);
              }
              break;
            }
          case 4: // haut
            if (j-4>-1){
              k= TableI[j];
              TableI[j]= TableI[j-4];
              TableI[j-4]= k;
              if (cpt[cpt.length-1]==2) {
                cpt.pop();
              }
              else{
                cpt.push(4);
              }
              break;
            }
        }
      }
    }
    Maj();
    n=0;
  }
  console.log(iter);
  console.log(cpt.length);
  console.log(cpt);
  if (document.getElementById("win")!=null){
    document.getElementById("win").remove();
  }
  document.getElementById("tries").innerText = "";
  document.getElementById("idea-text").innerText = "L'ordinateur annonce " + cpt.length + " coups. Saurez-vous le battre ?";
}

function Deplacement (number) {
  let T;
  switch (0){
    case TableI[number-1]:
      if (number%4!=0 & number-1>-1){
        T=TableI[number];
        TableI[number]=TableI[number-1];
        TableI[number-1]=T;
        n++;
      }
      break;
    case TableI[number+1]:
      if (number%4!=3 & number+1<17){
        T=TableI[number];
        TableI[number]=TableI[number+1];
        TableI[number+1]=T;
        n++;
      }
      break;
    case TableI[number+4]:
      if (number+4<16){
        T=TableI[number];
        TableI[number]=TableI[number+4];
        TableI[number+4]=T;
        n++;
      }
      break;
    case TableI[number-4]:
      if (number-4>-1){
        T=TableI[number];
        TableI[number]=TableI[number-4];
        TableI[number-4]=T;
        n++;
      }
      break;
    default:
      console.log('Clique au mauvais endroit');
      console.log(n);
  }
  if (document.getElementById("win")==null) {
    document.getElementById("tries").innerText = n ;
  }
}

function Moving (number) {
  Deplacement(number);
  Maj();
  Fin();
}

function Fin (){
  for (var i = 0; i<15;i++) {
    if (TableI[i]==i+1) {
      z++;
    }
  }
  if (z==15 && document.getElementById("win")==null) {
    const newdiv = document.createElement("div");
    newdiv.textContent="💪 Vous avez gagné en " + n + " coups 🏆";
    newdiv.classList.add("win");
    newdiv.setAttribute("id", "win");
    document.getElementById("replay-menu").appendChild(newdiv);
    n=0;
  }
  else{
    z=0;
  }
}