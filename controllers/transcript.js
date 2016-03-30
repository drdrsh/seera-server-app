'use strict';

var EntityController = require(framework.helpers.path.controllers('entity', true));

function TranscriptController(app, router) {
    this.getEntityName = function() {
        return "transcript";
    };
    EntityController.call(this, app, router);
}

require("util").inherits(TranscriptController, EntityController);
module.exports = TranscriptController;
