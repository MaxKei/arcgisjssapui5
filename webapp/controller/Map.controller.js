sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'arcgisjssapui5/util/ArcGis' // Ensure this path is correct
  ], function(Controller, ArcGis) {
    return Controller.extend("arcgisjssapui5.controller.Map", {
      onInit: function() {
        this.initializeMap('streets', 'mapContainer', [8.641874, 49.293589], 8);
      },
  
      initializeMap: function(baseMapName, mapDivId, centerPoint, zoomLevel) {
        ArcGis.require([
          'esri/Map',
          'esri/views/MapView',
          'dojo/domReady!'
        ], function(Map, MapView) {
          new MapView({
            map: new Map({
              basemap: baseMapName,
            }),
            container: mapDivId,
            center: centerPoint,
            zoom: zoomLevel
          });
        });
      }
    });
  });  