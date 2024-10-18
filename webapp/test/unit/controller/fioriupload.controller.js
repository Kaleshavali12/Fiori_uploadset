/*global QUnit*/

sap.ui.define([
	"comupload/fioriupload/controller/fioriupload.controller"
], function (Controller) {
	"use strict";

	QUnit.module("fioriupload Controller");

	QUnit.test("I should test the fioriupload controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
