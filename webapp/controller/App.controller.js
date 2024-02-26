sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'arcgisjssapui5/util/ArcGis'
], function(Controller, ArcGis) {
  Controller.extend('arcgisjssapui5.controller.App', {
    initializeMap(baseMapName, mapDivId, centerPoint, zoomLevel) {
      ArcGis.require([
        'esri/Map',
        'esri/views/MapView',
        'dojo/domReady!'
      ], function(Map, MapView) {
        MapView({
          map: Map({
            basemap: baseMapName,
          }),
          container: mapDivId,
          center: centerPoint,
          zoom: zoomLevel
        });
      });
    },

    onInit() {
      this.initializeMap('streets', 'mapContainer', [8.641874, 49.293589], 8);
    }
  });
});

//Originalo Underneath
/* sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("arcgisjssapui5.controller.App", {
        onInit: function() {
        }
      });
    }
 /asdsad/ ); 
  
  */