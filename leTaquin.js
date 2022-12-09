let TableI = [];
for (var i = 0; i<16;i++) {
    TableI[i]=i;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function get_random (list) {
    return list[Math.floor((Math.random()*list.length))];
  }

  function shuffle(tab) {
    for (var i = tab.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var k= tab[i];
      tab[i]= tab[j];
      tab[j]= k;
    }
  }
shuffle(TableI);
for (let i = 0; i <16; i++) {
    console.log(TableI[i]);
}

