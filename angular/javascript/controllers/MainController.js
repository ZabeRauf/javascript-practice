app.controller('MainController', ['$scope', function($scope) {
    // the html can see what's in the scope.
    // our controller here can set the data that's in the scope.
    // this is how our files will communicate and pass data.

    $scope.todo = {
        title: "TODO: ",
        list: [ "Clean dishes", "Groceries", "Study Javascript" ]
    }

    $scope.remember = {
        title: "Remember: ",
        list: []
    }

    $scope.addItem = function(itemList, item) {
        itemList.push(item);
    }
}]);