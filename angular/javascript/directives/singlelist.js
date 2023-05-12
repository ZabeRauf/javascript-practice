app.directive('singlelist', function() {
    return {
        restrict: 'E',
        scope: {
            mylist: '='
        },
        templateUrl: 'javascript/directives/singlelist.html'
    }
})