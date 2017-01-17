var createBoard = function(cards){
	var gameboard = document.getElementById('game-board');
	for (var i = 0; i < cards.length; i++) {
		var newCard = document.createElement('div');
		newCard.className = 'card';
		cardElement.setAttribute('data-card',cards[i]);
		cardElement.addEventListener('click',isTwoCards);
		if (cards[i]==='king') {
			cardElement.innerHTML = '<img src="king.png" alt="King" />';
		}
		else {
			cardElement.innerHTML = '<img src="queen.png" alt="Queen" />';
		}
		gameboard.appendChild(newCard);
	}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
	}
	cardsInPlay = [];
}

var isMatch = function(cardsInPlay){
	if (cardsInPlay[0]===cardsInPlay[1]){
		alert("It's a match!");
	}
	else {
		alert("Try again.");
	}
}

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
createBoard(cards);
