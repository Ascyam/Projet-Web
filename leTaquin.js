let TableI = [];
for (var i = 0; i<15;i++) {
    TableI[i]=i+1;
}
TableI[15]=0;

function shuffle(TableI) {
  for (var i = TableI.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var k= TableI[i];
    TableI[i]= TableI[j];
    TableI[j]= k;
  }
  Maj();
}

function Deplacement (number) {
  let T;
  switch (0){
    case TableI[number-1]: 
      if (number%4!=0 & number-1>-1){
        T=TableI[number];
        TableI[number]=TableI[number-1];
        TableI[number-1]=T;
      }
      break;
    case TableI[number+1]:
      if (number%4!=3 & number+1<17){
        T=TableI[number];
        TableI[number]=TableI[number+1];
        TableI[number+1]=T;
      }
      break;
    case TableI[number+4]:
      if (number+4<16){
        T=TableI[number];
        TableI[number]=TableI[number+4];
        TableI[number+4]=T;
      }
      break;
    case TableI[number-4]:
      if (number-4>-1){
        T=TableI[number];
        TableI[number]=TableI[number-4];
        TableI[number-4]=T;
      }
      break;
    default:
      console.log('Clique au mauvais endroit');
  }
}

let x0,x1,x2,x3,x4,x5,x6,x7,x8,x9,x10,x11,x12,x13,x14,x15
function Moving (number) {
  Deplacement(number);
  console.log(TableI[number]);
  Maj();
}

function Maj (){
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
  document.getElementById("x0").innerHTML = x0;
  document.getElementById("x1").innerHTML = x1;
  document.getElementById("x2").innerHTML = x2;
  document.getElementById("x3").innerHTML = x3;
  document.getElementById("x4").innerHTML = x4;
  document.getElementById("x5").innerHTML = x5;
  document.getElementById("x6").innerHTML = x6;
  document.getElementById("x7").innerHTML = x7;
  document.getElementById("x8").innerHTML = x8;
  document.getElementById("x9").innerHTML = x9;
  document.getElementById("x10").innerHTML = x10;
  document.getElementById("x11").innerHTML = x11;
  document.getElementById("x12").innerHTML = x12;
  document.getElementById("x13").innerHTML = x13;
  document.getElementById("x14").innerHTML = x14;
  document.getElementById("x15").innerHTML = x15;
}

function Fin (){
  for (var i = 0; i<16;i++) {
    if (TableI[i]=i+1) {
      z++;
    }    
  }
  if (z=15) {
    document.getElementById("z").innerHTML = "Vous avez gagné(e)";
  }
  else{ 
    z=0;
  }
}
  