sap.ui.define(["<%= appURI %>/model/env"], function (env) {
  "use strict";
  QUnit.module("Environment Module");

  QUnit.test(
    "Should display environment as 'dev' if ui5 global variables are present",
    function (assert) {
      const sEnv = env.getEnv();
      assert.equal(sEnv, "dev", "Environment was correctly set to 'dev'.");
    }
  );

  QUnit.test(
    "Should display environment as 'prod' if ui5 global variables are not present",
    function (assert) {
      const temp = $ui5GlobalVariables;
      delete window.$ui5GlobalVariables;
      assert.equal(env.getEnv(), "prod", "Environment was not set to 'prod'.");
      window.$ui5GlobalVariables = temp;
    }
  );
});
