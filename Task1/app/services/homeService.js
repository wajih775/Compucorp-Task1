app.service('homeService', function ($http) {
	
    this.getWeatherbyLocation = function (countryCode, lat, long) {
        var promise = webfetcherobject.getInstance($http).getWeatherResponse(countryCode, lat, long);
        return promise;
    };

});