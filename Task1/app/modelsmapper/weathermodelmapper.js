var WeatherModelMapper = (function () {

    function CreateMapData(data) {

        var Coord = new coord();
        var Weather = new weather();
        var Main = new main();
        var Wind = new wind();
        var Clouds = new clouds();
        var Rain = new rain();
        var Sys = new sys();
        var object = new weatherEntity();

        Coord = data.coord;
        Weather = data.weather[0];
        Weather.icon = Global.WheatherImagePath + Weather.icon + ".png";
        Main = data.main;
        Wind = data.wind;
        Clouds = data.clouds;
        Rain = data.rain;
        Sys = data.sys;

        object.Coord = Coord;
        object.Weather = Array(Weather);
        object.Main = Main;
        object.Wind = Wind;
        object.Clouds = Clouds;
        object.Rain = Rain;
        object.Base = data.base;
        object.Dt = data.dt;
        object.Name = data.name;
        object.Cod = data.cod;

        return object;
    }

    return {
        getMapData: function (data) {
            return CreateMapData(data);
        }
    };
})();