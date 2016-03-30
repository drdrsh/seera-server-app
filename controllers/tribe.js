'use strict';

var EntityController = require(framework.helpers.path.controllers('entity', true));

function TribeController(app, router) {
    this.getEntityName = function() {
        return "tribe";
    };
    EntityController.call(this, app, router);
}

require("util").inherits(TribeController, EntityController);
module.exports = TribeController;
