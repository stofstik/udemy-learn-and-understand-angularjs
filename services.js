weatherApp.service('globalCity', function() {

    this.city = "Amsterdam, NL";

});

weatherApp.service('weatherService', [
    '$resource',
    function($resource) {

    var appid = "44b456335f8c7ab81a09cc743bf5b332";
    var url   = "http://api.openweathermap.org/data/2.5/forecast/daily";
    var weatherAPI = $resource(
        url, { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }
    });

    this.GetWeather = function(city, amountOfDays) {
        return weatherAPI.get({
            mode: "json",
            units: "metric",
            appid: appid,
            q: city,
            cnt: amountOfDays
        });
    };

}]);
