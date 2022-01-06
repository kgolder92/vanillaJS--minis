document.addEventListener('DOMContentLoaded', () => {
    console.log('y')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let cardsArray = [
        {
            name: '1',
            img: './images/1.png'
        },
        {
            name: '1',
            img: './images/1.png'
        },
        {
            name: '2',
            img: './images/2.png'
        },
        {
            name: '2',
            img: './images/2.png'
        },
        {
            name: '3',
            img: './images/3.png'
        },
        {
            name: '3',
            img: './images/3.png'
        },
        {
            name: '4',
            img: './images/4.png'
        },
        {
            name: '4',
            img: './images/4.png'
        },
        {
            name: '5',
            img: './images/5.png'
        },
        {
            name: '5',
            img: './images/5.png'
        },
        {
            name: '6',
            img: './images/6.png'
        },
        {
            name: '6',
            img: './images/6.png'
        },
    ]

    cardsArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid'); 
    const resultDisplay = document.querySelector('#result');

    const createBoard = () => {
        console.log('yooo')
        for(let i = 0; i < cardsArray.length; i += 1) {
            let card = document.createElement('img');
            card.setAttribute('src', './images/cover.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    const checkForMatch = () => {
        let cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match')
            cards[optionOneId].setAttribute('src', './images/blank.png');
            cards[optionTwoId].setAttribute('src', './images/blank.png');
            cardsWon.push(cardsChosen);
            resultDisplay.textContent += 1;
        } else {
            cards[optionOneId].setAttribute('src', './images/cover.png');
            cards[optionTwoId].setAttribute('src', './images/cover.png');
            alert('not a match')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;

        if(cardsWon.length === cardsArray.length / 2) {
            resultDisplay.textContent = 'congrats you found them all'
        }
    }


    function flipCard ()  {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);

        if(cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200);
        }
    }

    createBoard();

})