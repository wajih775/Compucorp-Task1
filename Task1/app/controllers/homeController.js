app.controller('homeController', function ($scope, $modal, $log, $http, homeService) {

    var id, options, map;

    $scope.address = "";
    $scope.IsNo = false;
    $scope.selectedCountryCode = "";
    $scope.todayDate = new Date();

    function OpenModal() {
        var modalInstance = $modal.open({
            templateUrl: '../Task1/app/partials/querymodal.html',
            backdrop: 'static',
            scope: $scope,
            keyboard: false,
            controller: app.ModalInstanceCtrl,
            resolve: {
                service: function () {
                    return homeService;
                },
            }
        });
    };

    init();

    options = {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0
    };

    function init() {

        OpenModal();

        id = navigator.geolocation.watchPosition(function (pos) {
            var crd = pos.coords;
            Global.latitutude = crd.latitude;
            Global.longittude = crd.longitude;
            navigator.geolocation.clearWatch(id);
        }, function (err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }, options);
    }

});

app.ModalInstanceCtrl = function ($scope, $modalInstance, $http, $timeout, service) {

    var marker = [];
    var infowindow = [];
    var config = new Configuration();

    function onReady() {
        $scope.showloader(true);
        $timeout(function () {            
            var promise = service.getWeatherbyLocation($scope.selectedCountryCode, Global.latitutude, Global.longittude);
            promise.then(function (response) {
                $scope.showloader(false);
                $modalInstance.dismiss('cancel');
                $scope.$parent.data = WeatherModelMapper.getMapData(response.data);
                initialize($scope.$parent.data.Coord.lat, $scope.$parent.data.Coord.lon, $scope.$parent.data.Name);
            });
        }, 100);
    }

    function initialize(lat, long, html) {
        
        var myLatlng = new google.maps.LatLng(lat, long);
        var myOptions = {
            zoom: 6,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map"), myOptions);
        CreateMarker(lat, long, html);
    }

    function CreateMarker(lat, lon, html) {

        var icon = "../Task1/Content/images/red.png";

        var newmarker = new google.maps.Marker({
            position: new google.maps.LatLng(lat, lon),
            map: map,
            icon: new google.maps.MarkerImage(icon),
            title: html
        });

        newmarker['infowindow'] = new google.maps.InfoWindow({
            content: html
        });

        google.maps.event.addListener(newmarker, 'mouseover', function () {
            this['infowindow'].open(map, this);
        });

        marker.push(newmarker);
    }

    function RemoveMarkers() {
        infowindow = [];
        markers = [];
        for (i = 0; i < marker.length; i++) {
            marker[i].setMap(null);
        }
    }

    $scope.showloader = function (msg) {
        $scope.state = msg;
    }

    $scope.ok = function () {

        $scope.selectedCountryCode = "";
        $scope.IsNo = false;
        onReady();

    };

    $scope.cancel = function () {
        $scope.selectedCountryCode = "PK";
        $scope.IsNo = true;
    };

    $scope.submit = function () {
        $scope.IsNo = false;
        onReady();
    };

    $scope.changeCode = function (val) {
        $scope.selectedCountryCode = val;
    };

};

app.controller('navController', function ($scope, $location) {
    $scope.getClass = function (path) {
        if ($location.path().substr(0, path.length) == path) {
            return true
        } else {
            return false;
        }
    }
});
