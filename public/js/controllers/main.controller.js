app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {

    $scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.getCategoryCards = function(category){
		$scope.currentCategory = category
		FlashCardsFactory.getFlashCards(category)
		.then(function(cards){
    		console.log(cards)
    		$scope.flashCards = cards;
       	})
	}

    FlashCardsFactory.getFlashCards()
    	.then(function(cards){
    		console.log(cards)
    		$scope.flashCards = cards;
       	})


    $scope.answerQuestion = function(answer, flashCard) {
        if (!flashCard.answered) {
            flashCard.answered = true;
            flashCard.answeredCorrectly = answer.correct;
            if(answer.correct){
                ScoreFactory.correct++;
            }else{
                ScoreFactory.incorrect++;
            }
        }
    }

    $scope.resetCards = function(){
    	$scope.currentCategory = null;
    	FlashCardsFactory.getFlashCards()
    	.then(function(cards){
    		console.log(cards)
    		$scope.flashCards = cards;
       	});
    }
});
