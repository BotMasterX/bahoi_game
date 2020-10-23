document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    {
      name: 'bahoi1',
      img: 'images/bahoi1.jpg'
    },
    {
      name: 'bahoi2',
      img: 'images/bahoi2.jpg'
    },
    {
      name: 'bahoi3',
      img: 'images/bahoi3.jpg'
    },
    {
      name: 'bahoi4',
      img: 'images/bahoi4.jpg'
    },
    {
      name: 'bahoi5',
      img: 'images/bahoi5.jpg'
    },
    {
      name: 'bahoi6',
      img: 'images/bahoi6.jpg'
    },
    {
      name: 'bahoi1',
      img: 'images/bahoi1.jpg'
    },
    {
      name: 'bahoi2',
      img: 'images/bahoi2.jpg'
    },
    {
      name: 'bahoi3',
      img: 'images/bahoi3.jpg'
    },
    {
      name: 'bahoi4',
      img: 'images/bahoi4.jpg'
    },
    {
      name: 'bahoi5',
      img: 'images/bahoi5.jpg'
    },
    {
      name: 'bahoi6',
      img: 'images/bahoi6.jpg'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  var cardsChosen = []
  var cardsChosenId = []
  const cardsWon = []

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/blank.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('alege alta carte')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('bv ai gasit o pereche')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.jpg')
      cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
      alert('incearca iar')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'FELICITARI'
	  
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
