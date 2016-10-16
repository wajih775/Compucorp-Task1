function Configuration() {

    this.getWeatherApiKey = function () {
        return Configuration.APPID;
    }

    this.getServiceUrl = function (countryCode, lat, long) {
        
        if (countryCode != "")
            return Configuration.WeatherServiceUrl + "q=" + countryCode + "&APPID=" + Configuration.APPID;
        else
            return Configuration.WeatherServiceUrl + "lat=" + lat + "&lon=" + long + "&APPID=" + Configuration.APPID;
    }

}

Configuration.WeatherServiceUrl = "http://api.openweathermap.org/data/2.5/weather?";
Configuration.APPID = "6ce157694271a4547d4375ab02554538";

