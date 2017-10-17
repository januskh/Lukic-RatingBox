angular.module("umbraco").controller("Lukic.RatingBox.Controller", function ($scope, $http, editorState, dialogService, notificationsService) { 
    // Lukic.RatingBox Controller 

    $scope.fontClass = "fa";
    $scope.emptyStar = "fa-star-o";
    $scope.filledStar = "fa-star";

    $scope.config = $scope.model.config;
    $scope.range = _.range(1, (parseInt($scope.config.starsAmount)+1));

    if ($scope.model.value == null || $scope.model.value == '') {
        $scope.model.value = 0;
    }

    $scope.remove = function () {
        $scope.model.value = 0;
    }

    $scope.onclick = function (rating) {
        $scope.model.value = rating;
    }

}); 
