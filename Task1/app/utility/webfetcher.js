function webfetcher($http) {

    var Context = new Configuration();

    this.getWeatherResponse = function (countryCode, lat, long) {
        var serviceUrl = Context.getServiceUrl(countryCode, lat, long);
        var promise = $http.get(serviceUrl);
        return promise;
    }
}

var webfetcherobject = (function () {
    var instance;

    function createInstance($http) {
        var object = new webfetcher($http);
        return object;
    }

    return {
        getInstance: function ($http) {
            if (!instance) {
                instance = createInstance($http);
            }
            return instance;
        }
    };
})();