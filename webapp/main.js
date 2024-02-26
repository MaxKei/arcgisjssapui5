sap.ui.define([
  'sap/ui/core/ComponentContainer'
], function(ComponentContainer) {
  'use strict';

  // Initialize the UI5 component container, which will load the component defined in the manifest.json
  new ComponentContainer({
      name: 'arcgisjssapui5.App', // Namespace/ID of your application as defined in the manifest.json
      settings: {
          id: 'arcgisjssapui5'
      },
      async: true
  }).placeAt('content');
});