angular.module('TawanAngularJSTest', ['ui.bootstrap']);
angular.module('TawanAngularJSTest').controller('peopleInformation', function($scope, $http) {
//  $scope.selected = '';
  $http.get('listuser.json').success(function(peopleinfo){
    $scope.first_name = peopleinfo;
  });
  
 });