// Coordinates Class
var coord = function Coord() {
    var lon;
    var lat;
    return {
        lon: lon,
        lat: lat
    };
}

// Weather Class
var weather = function Weather() {
    var id;
    var main;
    var description;
    var icon;
    return {
        id: id,
        main: main,
        description: description,
        icon: icon
    }
}

// Main Class
var main = function Main() {
    var temp;
    var pressure;
    var humidity;
    var temp_min;
    var temp_max;
    return {
        temp: temp,
        pressure: pressure,
        humidity: humidity,
        temp_min: temp_min,
        temp_max: temp_max
    }
}

// Wind Class
var wind = function Wind() {
    var speed;
    var deg;
    return {
        speed: speed,
        deg: deg
    }
}

// Clouds Class
var clouds = function Clouds() {
    var all;
    return {
        all: all,
    }
}

// Rain Class
var rain = function Rain() {
    var h3;
    return {
        h3: h3
    }
}

// Sys Class
var sys = function Sys() {

    var type;
    var id;
    var message;
    var country;
    var sunrise;
    var sunset;

    return {
        type: type,
        id: id,
        message: message,
        country: country,
        sunrise: sunrise,
        sunset: sunset
    }
}


var weatherEntity = function WeatherEntity() {
    var Coord = new coord();
    var Weather = Array(new weather());
    var Base;
    var Main = new main();
    var Wind = new wind();
    var Clouds = new clouds();
    var Rain = new rain();
    var Dt;
    var Sys = new sys();
    var Name;
    var Cod;

    return {
        Coord: Coord,
        Weather: Weather,
        Base: Base,
        Main: Main,
        Wind: Wind,
        Clouds: Clouds,
        Rain: Rain,
        Dt: Dt,
        Sys: Sys,
        Name: Name,
        Cod: Cod
    }
};




