const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')

var word=['SUPER','JOUER','AIMER','PARIS','VOLER','HUSKY','FIXER','BASSE','PIPAS',
'PAYEZ','TRAIN','DAMES','METRO','TRONE','NOTER','NOTRE','ANNEE','ANIME','ONION',
'CABLE','CAPOT','CARGO','CANON','BRAVO','CAIRE','COMME','CRACK','DEFIS','DATES',
'DRAME','DUBAI','ETAGE','STAGE','FAMAS','FRAIS','GACHE','GALOP','CREER','ACCES',
'ABORD','ABDOS','ACNES','FACHE','DUQUE','AJOUT','CHAUD','FROID','AILES','CHEFS'];
const wordle = word[Math.floor(Math.random()*word.length)]


const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '<<',
]
const guessRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
] 
let currentRow = 0
let currentTile = 0
let isGameOver = false

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((guess, guessIndex) => {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex )
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)

})

keys.forEach(key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})
const handleClick = (key) => {
    console.log('clicked', key)
    if (key === '<<') {
        deleteLetter()
        return
    } 
    if (key === 'ENTER'){
        checkRow()
        return
    }
    addLetter(key)
}
const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6){
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++
        console.log('guessRows', guessRows)
    }
}

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = ''
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if (currentTile > 4) {
        console.log('le mot est' + wordle)
        flipTile()
        if (wordle == guess) {
            showMessage('Bravo vous avez trouvé le mot')
            isGameOver = true
            return
        } else {
            if (currentRow >= 5) {
                isGameOver = false
                showMessage('Dommage pour vous')
                return
            }
            if (currentRow < 5) {
                currentRow++
                currentTile = 0
            }
        }
    }
}
const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    keyboard.remove();
    messageDisplay.append(messageElement)
    const messageButton = document.createElement('a');
    messageButton.textContent = "Rejouer";
    messageButton.setAttribute("href", ".");
    messageDisplay.append(messageButton);
    //setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
}
const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)
}
const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
        const dataletter = tile.getAttribute('data')

        setTimeout (() => {
            tile.classList.add('flip')
            if (dataletter == wordle[index]){
                tile.classList.add('green-overlay')
                addColorToKey(dataletter, 'green-overlay')
            } else if (wordle.includes(dataletter)) {
                tile.classList.add('yellow-overlay')
                addColorToKey(dataletter, 'yellow-overlay')
            } else {
                tile.classList.add('grey-overlay')
                addColorToKey(dataletter, 'grey-overlay')
            }
        }, 500 * index)
    })
}


