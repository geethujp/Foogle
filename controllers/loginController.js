foogleApp.controller('loginController', function($scope, $firebaseObject, $firebaseArray) {
    var myDataRef = new Firebase('https://fooglelogin.firebaseio.com/');
    $scope.usernames = [];
    myDataRef.on("value", function(snapshot) {
        $scope.$apply(function() {
            $scope.data = snapshot.val();
            for (var e in $scope.data) {
                $scope.usernames.push($scope.data[e].username);
            }
            $scope.complete = function() {
                $('#username').autocomplete({
                    source: $scope.usernames
                });
            }
        });
    });
});