'use strict';

var EntityController = require(framework.helpers.path.controllers('entity', true));

function IdolController(app, router) {
    this.getEntityName = function() {
        return "idol";
    };
    EntityController.call(this, app, router);
}

require("util").inherits(IdolController, EntityController);
module.exports = IdolController;