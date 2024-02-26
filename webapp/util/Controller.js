sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("arcgisjssapui5.controller.App", {
        onAfterRendering: function () {
            require([
                "esri/Map",
                "esri/views/MapView"
            ], function(Map, MapView) {
                var map = new Map({
                    basemap: "streets-vector"
                });

                var view = new MapView({
                    container: "MapDivId", // This should be the ID of the div in your view where you want to display the map
                    map: map,
                    center: [-118.80500, 34.02700], // Longitude, latitude
                    zoom: 13
                });
            });
        }
    });
});
