jQuery.sap.registerModulePath('arcgis_server', 'https://js.arcgis.com');

sap.ui.define([
  'arcgis_server/4.28/init',
], function() {
  return {
    require: require
  };
});