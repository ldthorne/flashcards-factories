app.controller('StatsController', function ($scope, ScoreFactory) {
	console.log(ScoreFactory)
    $scope.scores = ScoreFactory;
});