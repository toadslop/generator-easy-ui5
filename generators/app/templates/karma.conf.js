module.exports = function (config) {
  "use strict";

  config.set({
    browserConsoleLogOptions: {
      level: "info",
      format: "%b %T: %m",
      terminal: true,
    },
    frameworks: ["ui5"],
    ui5: {
      configPath: "uimodule/ui5-test.yaml",
      type: "application",
      paths: {
        webapp: "uimodule/webapp",
      },
    },
  });
  require("karma-ui5/helper").configureIframeCoverage(config);
};