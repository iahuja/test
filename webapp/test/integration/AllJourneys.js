jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"wl/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"wl/test/integration/pages/Worklist",
		"wl/test/integration/pages/Object",
		"wl/test/integration/pages/NotFound",
		"wl/test/integration/pages/Browser",
		"wl/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "wl.view."
	});

	sap.ui.require([
		"wl/test/integration/WorklistJourney",
		"wl/test/integration/ObjectJourney",
		"wl/test/integration/NavigationJourney",
		"wl/test/integration/NotFoundJourney",
		"wl/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});