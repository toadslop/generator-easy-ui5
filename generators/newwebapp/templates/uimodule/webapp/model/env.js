sap.ui.define([], function () {
  "use strict";
  return {
    setUser: function () {
      return ($ui5GlobalVariables
        ? $ui5GlobalVariables.get("USERNAME")
        : new sap.ushell.services.UserInfo().getId()
      ).toLowerCase();
    },

    getEnv: function () {
      try {
        return $ui5GlobalVariables.get("ENV");
      } catch (err) {
        return "prod";
      }
    },

    isEnv: function (sEnv) {
      return this.getEnv() === sEnv;
    },
  };
});
