var createCards = function(cardOne,cardTwo,cardThree,cardFour){
	var gameboard = document.getElementById('game-board');
	for (var i=1; i<=4; i++){
		var newCard = document.createElement('div');
		newCard.className = 'card';
		gameboard.appendChild(newCard);
	}
}
createCards('queen','queen','king','king')