let TableI = [];
for (var i = 0; i<16;i++) {
    TableI[i]=i;
}

function shuffle(tab) {
  for (var i = tab.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var k= tab[i];
    tab[i]= tab[j];
    tab[j]= k;
  }
}

function Deplacement (number) {
  let T;
  switch (0){
    case TableI[number-1]:
      T=TableI[number];
      TableI[number]=TableI[number-1];
      TableI[number-1]=T;
      break;
    case TableI[number+1]:
      T=TableI[number];
      TableI[number]=TableI[number+1];
      TableI[number+1]=T;
      break;
    case TableI[number+4]:
      T=TableI[number];
      TableI[number]=TableI[number+4];
      TableI[number+4]=T;
      break;
    case TableI[number-4]:
      T=TableI[number];
      TableI[number]=TableI[number-4];
      TableI[number-4]=T;
      break;
    default:
      console.log('Clique au mauvais endroit');
  }
}

function Moving (number) {
  Deplacement(number);
  console.log(TableI[number]);
}

