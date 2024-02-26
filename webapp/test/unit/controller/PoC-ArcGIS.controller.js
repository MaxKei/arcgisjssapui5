/*global QUnit*/

sap.ui.define([
	"arcgis-js-sapui5/controller/PoC-ArcGIS.controller"
], function (Controller) {
	"use strict";

	QUnit.module("PoC-ArcGIS Controller");

	QUnit.test("I should test the PoC-ArcGIS controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
