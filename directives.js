weatherApp.directive("viewDay", function(){
    return {
        restrict: 'E',
        templateUrl: 'directives/view-day.html',
        replace: true,
        scope: {
            weatherDay: "=",
            roundTemp: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    };
});

