weatherApp.controller('homeController', [
    '$scope', '$location', 'globalCity',
    function($scope, $location, globalCity) {

    $scope.city = globalCity.city;

    $scope.$watch('city', function() {
        globalCity.city = $scope.city;
    });

    $scope.submit = function() {
        $location.path("/forecast");
    };

}]);

weatherApp.controller('forecastController', [
    '$scope', '$filter', '$routeParams', '$resource', 'globalCity', 'weatherService',
    function($scope, $filter, $routeParams, $resource, globalCity, weatherService) {
        $scope.amountOfDays = $routeParams.cnt || '2'; // default to '2'
        $scope.weatherResult = weatherService.GetWeather(globalCity.city, $scope.amountOfDays);

        $scope.roundTemperature = function(deg) {
            return Math.round(deg * 2) / 2;
        };

        $scope.convertToDate = function(dt) {
            return new Date(dt * 1000);
        };

    }
]);
